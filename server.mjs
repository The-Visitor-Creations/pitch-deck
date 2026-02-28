import { createServer } from 'http';
import { readFile, stat, createReadStream } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { gzip, brotliCompress, constants } from 'zlib';
import { promisify } from 'util';
import { createReadStream as fsCreateReadStream } from 'fs';

const gzipAsync = promisify(gzip);
const brotliAsync = promisify(brotliCompress);

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PORT = 8090;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.pdf': 'application/pdf',
  '.mp4': 'video/mp4',
};

/* Only compress text-based formats (images are already compressed) */
const COMPRESSIBLE = new Set(['.html', '.css', '.js', '.mjs', '.json', '.svg']);

/* In-memory cache: compress once, serve many */
const cache = new Map();

createServer(async (req, res) => {
  let url = req.url === '/' ? '/index.html' : req.url;
  url = decodeURIComponent(url.split('?')[0]);

  /* Block path traversal */
  if (url.includes('..')) { res.writeHead(403); res.end('Forbidden'); return; }

  const filePath = join(__dirname, url);
  const ext = extname(filePath);

  try {
    const fileStat = await stat(filePath);
    const contentType = MIME[ext] || 'application/octet-stream';
    const headers = { 'Content-Type': contentType };

    /* ── ETag ── */
    const etag = '"' + fileStat.size.toString(16) + '-' + fileStat.mtimeMs.toString(16) + '"';
    headers['ETag'] = etag;
    if (req.headers['if-none-match'] === etag) {
      res.writeHead(304, headers);
      res.end();
      return;
    }

    /* ── Cache-Control ── */
    if (ext === '.html') {
      headers['Cache-Control'] = 'no-cache, must-revalidate';
    } else if (['.jpg', '.jpeg', '.png', '.webp', '.svg', '.woff2', '.woff'].includes(ext)) {
      headers['Cache-Control'] = 'public, max-age=31536000, immutable';
    } else {
      headers['Cache-Control'] = 'public, max-age=86400';
    }

    /* ── Large files (>5 MB): stream instead of buffering ── */
    if (fileStat.size > 5 * 1024 * 1024) {
      headers['Content-Length'] = fileStat.size;
      if (ext === '.pdf') {
        headers['Content-Disposition'] = 'attachment; filename="BOET Materials Corporate Presentation.pdf"';
      }
      res.writeHead(200, headers);
      fsCreateReadStream(filePath).pipe(res);
      return;
    }

    const data = await readFile(filePath);

    /* ── Compression for text-based formats ── */
    if (COMPRESSIBLE.has(ext) && data.length > 1024) {
      const acceptEncoding = req.headers['accept-encoding'] || '';
      const cacheKey = filePath + ':' + fileStat.mtimeMs;

      if (acceptEncoding.includes('br')) {
        const brKey = cacheKey + ':br';
        if (!cache.has(brKey)) {
          cache.set(brKey, await brotliAsync(data, {
            params: { [constants.BROTLI_PARAM_QUALITY]: 6 }
          }));
        }
        headers['Content-Encoding'] = 'br';
        headers['Vary'] = 'Accept-Encoding';
        res.writeHead(200, headers);
        res.end(cache.get(brKey));
        return;
      } else if (acceptEncoding.includes('gzip')) {
        const gzKey = cacheKey + ':gz';
        if (!cache.has(gzKey)) {
          cache.set(gzKey, await gzipAsync(data, { level: 6 }));
        }
        headers['Content-Encoding'] = 'gzip';
        headers['Vary'] = 'Accept-Encoding';
        res.writeHead(200, headers);
        res.end(cache.get(gzKey));
        return;
      }
    }

    res.writeHead(200, headers);
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
}).listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
