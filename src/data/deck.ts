/**
 * All deck content lives here for easy editing.
 * Aurelia Gold Corp (TSX: AUR) — Whitefish Lake Gold Project, Northern Ontario
 * Three scenarios: Open Pit | Underground | Phased Hybrid
 */

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  highlights: string[];
  image: string;
}

export interface FinancialRow {
  label: string;
  values: (string | number)[];
  highlight?: boolean;
}

export interface HomeType {
  id: string;
  name: string;
  tagline: string;
  specs: { label: string; value: string }[];
  floorPlanImage: string;
  exteriorImage: string;
  targetBuyer: string;
  priceBand: string;
  features: string[];
}

export interface ZoningItem {
  label: string;
  value: string;
}

export interface Section {
  id: string;
  navLabel: string;
  title: string;
  subtitle?: string;
  tileIcon: string;
}

export const sections: Section[] = [
  { id: "cover", navLabel: "Cover", title: "Aurelia Gold Corp", subtitle: "TSX: AUR — Advanced-stage gold exploration", tileIcon: "01" },
  { id: "opportunity", navLabel: "The Opportunity", title: "The Opportunity", subtitle: "Gold market thesis and timing", tileIcon: "02" },
  { id: "property", navLabel: "Exploration Assets", title: "Exploration Assets", subtitle: "Geology, drill results, and resource", tileIcon: "03" },
  { id: "zoning", navLabel: "Permits & Regulatory", title: "Permits & Regulatory", subtitle: "Approvals and environmental pathway", tileIcon: "04" },
  { id: "homes", navLabel: "Mine Plans", title: "Mine Development Plans", subtitle: "Three viable pathways to production", tileIcon: "05" },
  { id: "financials", navLabel: "Financials", title: "Financial Projections", subtitle: "NPV, IRR, and capital structure", tileIcon: "06" },
  { id: "team", navLabel: "Our Team", title: "Our Team", subtitle: "Proven mine builders and operators", tileIcon: "07" },
  { id: "closing", navLabel: "Closing", title: "Investment Opportunity", subtitle: "Capital raise and next steps", tileIcon: "08" },
];

export const cover = {
  headline: "Aurelia\nGold Corp",
  tagline: "TSX: AUR — Advanced-Stage Gold Exploration",
  date: "February 2026",
  location: "Northern Ontario, Canada",
  backgroundImage: "/images/craigmore-drone-1.jpg",
};

export const team: TeamMember[] = [
  {
    name: "Margaret Chen",
    role: "Chief Executive Officer",
    bio: "25+ years in mining exploration and development across North America and West Africa. Former VP Exploration at Barrick Gold, where she led the discovery and delineation of two multi-million-ounce gold deposits. Founded Aurelia Gold to pursue high-grade opportunities in tier-one jurisdictions.",
    highlights: [
      "Led discovery of 3.2M oz Au deposit at Hemlo East while at Barrick Gold",
      "Raised $180M+ in exploration and development financing across 4 projects",
      "P.Geo designation, MSc Geology — Queen's University",
    ],
    image: "",
  },
  {
    name: "David Blackwood",
    role: "VP Exploration",
    bio: "Seasoned exploration geologist with 18 years of experience in orogenic gold systems across the Canadian Shield. Specialist in structural geology and 3D modelling of high-grade gold deposits. Joined Aurelia Gold in 2023 to lead the Whitefish Lake drilling program.",
    highlights: [
      "Defined 1.8M oz Au resource at Red Lake extension — Great Bear Resources",
      "Published 12 peer-reviewed papers on Canadian Shield gold mineralisation",
      "P.Geo, PhD Structural Geology — University of Western Ontario",
    ],
    image: "",
  },
  {
    name: "James Sutherland",
    role: "Chief Financial Officer",
    bio: "20 years of mining finance experience across capital markets, project financing, and M&A advisory. Former Managing Director at BMO Capital Markets in the Global Metals & Mining group. Structured $2B+ in mining financings including royalty, streaming, and project debt facilities.",
    highlights: [
      "Structured $650M project finance for Detour Lake mine expansion",
      "Led $340M bought-deal financing for Agnico Eagle exploration program",
      "CFA, MBA — Rotman School of Management",
    ],
    image: "",
  },
];

export const opportunity = {
  headline: "The Opportunity",
  subtitle: "Aurelia Gold Corp (TSX: AUR) holds 12,400 hectares of contiguous mineral claims in the prolific Abitibi Greenstone Belt — the most productive gold-producing region in the world. Recent drilling has intersected high-grade gold mineralisation across a 2.8 km strike length, with an NI 43-101 compliant resource of 1.4 million ounces.",
  buildOverview: {
    totalUnits: "1.4M oz Au (M&I)",
    composition: "3 development scenarios",
    acreage: "12,400 hectares",
    timeline: "18–36 months to production",
    renderImage: "/images/build-at-a-glance.png",
  },
  mapImage: "/images/craigmore-map-site.png",
  locationStats: [
    { icon: "transit", label: "Road Access", detail: "Year-round highway access via Trans-Canada corridor" },
    { icon: "highway", label: "Power Grid", detail: "Ontario Hydro grid connection within 8 km of site" },
    { icon: "shopping", label: "Infrastructure", detail: "Timmins (pop. 42,000) — 45 min drive with full services" },
    { icon: "school", label: "Workforce", detail: "Established mining labour pool across Abitibi region" },
    { icon: "downtown", label: "Tier-1 Jurisdiction", detail: "Ontario, Canada — top-ranked mining jurisdiction globally" },
    { icon: "waterfront", label: "Water & Tailings", detail: "Adequate water supply and identified tailings locations" },
  ],
  thesis: [
    {
      title: "Record Gold Prices",
      description: "Gold has surged past $2,800/oz in 2025, driven by central bank buying, geopolitical risk, and persistent inflation — creating an exceptional margin environment for new gold producers.",
      stat: "$2,800+",
      statLabel: "Gold price per ounce (2025)",
      source: "LBMA, January 2025",
    },
    {
      title: "Supply Deficit",
      description: "Global gold mine production has plateaued at ~3,600 tonnes/year while new major discoveries have declined 80% over the past decade — the industry faces a structural supply gap.",
      stat: "80%",
      statLabel: "Decline in major discoveries since 2010",
      source: "S&P Global Market Intelligence, 2024",
    },
    {
      title: "High-Grade Resource",
      description: "The Whitefish Lake deposit averages 5.2 g/t Au across the main zone — placing it in the top 10% of undeveloped gold projects globally by grade, with significant exploration upside.",
      stat: "5.2 g/t",
      statLabel: "Average gold grade (main zone)",
      source: "NI 43-101 Technical Report, 2025",
    },
    {
      title: "Near-Term Catalyst",
      description: "Feasibility study expected Q3 2026, with a clear path to construction decision and first gold pour by Q4 2027 under the open-pit scenario. Multiple de-risking catalysts ahead.",
      stat: "18 mo",
      statLabel: "Months to initial production (open-pit)",
      source: "",
    },
  ],
  demandDrivers: [
    "Central bank gold purchases at record levels — 1,037 tonnes in 2023, accelerating in 2024–25",
    "Tier-1 Canadian jurisdiction with clear permitting pathway and First Nations support agreement",
    "High-grade, near-surface mineralisation amenable to low-cost open-pit extraction methods",
    "Established infrastructure reduces capital intensity vs. remote greenfield gold projects",
    "Multiple high-priority exploration targets beyond the current resource boundary",
    "Consolidation trend — mid-tier producers actively acquiring advanced-stage gold projects",
  ],
};

export const property = {
  location: "Northern Ontario, Canada",
  address: "Whitefish Lake Gold Project — Abitibi Greenstone Belt",
  totalAcreage: "12,400 hectares (124 km²)",
  proposedLots: "1.4M oz Au — NI 43-101 Measured & Indicated",
  zoning: "Mining claims — active exploration permits",
  servicing: "Ontario Hydro grid within 8 km; year-round road access",
  topography: "Canadian Shield — moderate relief, sparse boreal forest",
  access: "45 min from Timmins via Highway 101; winter road to camp",
  sitePlanImage: "/images/site-plan.jpg",
  locationImage: "/images/craigmore-map-site.png",
  galleryImages: [
    { src: "/images/craigmore-drone-1.jpg", caption: "Aerial view of the Whitefish Lake project area — Abitibi Greenstone Belt" },
    { src: "/images/craigmore-drone-2.jpg", caption: "Drill pad and core shack at the main zone discovery" },
    { src: "/images/craigmore-map-site.png", caption: "Claim map showing 12,400 ha mineral tenure package" },
  ],
  constraints: [
    "Seasonal access constraints during spring breakup (April–May) — camp accessible year-round via winter road upgrades",
    "Environmental baseline studies required for mine permitting — water quality monitoring in progress since Q2 2024",
    "First Nations consultation protocol established — Mattagami First Nation engagement agreement signed Q3 2024",
  ],
  advantages: [
    "High-grade gold deposit (5.2 g/t Au) in the prolific Abitibi Greenstone Belt — world's largest gold camp",
    "Near-surface mineralisation starts at 15m depth — amenable to low-cost open-pit mining methods",
    "2.8 km of strike length defined with mineralisation open along strike and at depth",
    "Existing camp, roads, and drill pads reduce pre-development capital requirements significantly",
    "Ontario Hydro grid connection within 8 km reduces operating costs vs. diesel generation",
    "Proximity to Timmins provides access to skilled mining workforce and established supply chain",
  ],
  communalAmenities: [
    "120-person exploration camp with kitchen and recreational facilities",
    "Core logging and storage facility — 25,000 m of drill core catalogued",
    "Two fully permitted drill pads with room for expansion",
    "Helicopter pad for site access during spring breakup periods",
    "Environmental monitoring station network (6 locations across claims)",
  ],
};

/* ── Permits & Regulatory ── */

export const zoning = {
  headline: "Permits & Regulatory",
  subtitle: "The Whitefish Lake project holds all necessary exploration permits under Ontario's Mining Act and has initiated the environmental assessment process required for mine development. First Nations engagement is well advanced with a signed exploration agreement in place.",
  classification: "Active Mineral Claims — Exploration Permits in Place",
  maxUnits: "Mine development permits in progress",
  entitlements: [
    { label: "Mineral Tenure", value: "487 mineral claims — 12,400 ha" },
    { label: "Exploration Permits", value: "Active — Class B (Ontario Mining Act)" },
    { label: "Environmental Status", value: "Baseline studies underway since Q2 2024" },
    { label: "First Nations", value: "Exploration Agreement — Mattagami FN (Q3 2024)" },
    { label: "Mine Closure Plan", value: "Draft submitted to MNDM — under review" },
    { label: "Water Use Permit", value: "Category 3 PTTW — approved for exploration" },
  ] as ZoningItem[],
  surroundings: [
    "Located within the Porcupine Mining Division — active mining district since 1909",
    "Adjacent to historic Dome Mine property (20M+ oz Au lifetime production)",
    "Multiple operating mines within 50 km — Detour Lake, Borden, Porcupine",
    "Ontario Ministry of Mines and Northern Development supportive of development",
    "Established mining supply chain and service providers in Timmins region",
    "No competing land use — area designated for mineral exploration and development",
  ],
  mapImage: "/images/craigmore-map-site.png",
  advantages: [
    "Ontario ranked #1 mining jurisdiction globally — Fraser Institute Annual Survey 2024",
    "Clear regulatory pathway — Environmental Assessment process well understood and precedented",
    "First Nations engagement agreement already signed — reduces social licence risk significantly",
    "Exploration permits active — no delays to the continued drilling and infill program",
    "Adjacent to operating mines — demonstrates regulatory and community acceptance in the area",
  ],
};

/* ── Scenario A: Open Pit Mine ── */

export const premiumCondoUnit: HomeType = {
  id: "open-pit",
  name: "Open Pit Mine",
  tagline: "Lowest capital intensity, fastest to production — conventional open-pit mining of near-surface high-grade gold with an 18-month construction timeline and 8-year mine life producing 120,000 oz Au annually",
  specs: [
    { label: "Mine Type", value: "Open Pit" },
    { label: "Annual Production", value: "120,000 oz Au" },
    { label: "Mine Life", value: "8 years" },
    { label: "Strip Ratio", value: "4.5:1" },
    { label: "Mill Throughput", value: "3,500 tpd" },
    { label: "Head Grade", value: "4.8 g/t Au" },
    { label: "Recovery Rate", value: "94.5%" },
    { label: "Construction", value: "18 months" },
  ],
  floorPlanImage: "",
  exteriorImage: "/images/townhome-exterior.jpg",
  targetBuyer: "Institutional investors and mining-focused funds seeking near-term gold production exposure with low capital intensity, proven open-pit mining method, and clear path to positive cash flow within 24 months of construction start.",
  priceBand: "$890/oz AISC",
  features: [
    "120,000 oz Au annual production over an 8-year mine life — 960,000 oz total recovery",
    "Low all-in sustaining cost (AISC) of $890/oz — 68% operating margin at $2,800/oz gold",
    "18-month construction timeline using proven conventional open-pit and CIL processing",
    "Near-surface deposit starting at 15m depth — minimal pre-stripping requirement",
    "Lowest initial capex of the three scenarios at $185M — strong IRR of 52%",
    "Potential for pit expansion based on ongoing infill and step-out drill results",
  ],
};

/* ── Scenario B: Underground Mine ── */

export const maxDensityCondoUnit: HomeType = {
  id: "underground",
  name: "Underground Mine",
  tagline: "Higher grade, longer mine life — selective underground mining targeting the high-grade core with long-hole stoping, yielding 85,000 oz Au annually over 14 years at industry-leading grades of 7.8 g/t Au",
  specs: [
    { label: "Mine Type", value: "Underground (Long-Hole Stoping)" },
    { label: "Annual Production", value: "85,000 oz Au" },
    { label: "Mine Life", value: "14 years" },
    { label: "Mill Throughput", value: "1,800 tpd" },
    { label: "Head Grade", value: "7.8 g/t Au" },
    { label: "Recovery Rate", value: "95.2%" },
    { label: "Mining Width", value: "3.5 m minimum" },
    { label: "Construction", value: "30 months" },
  ],
  floorPlanImage: "",
  exteriorImage: "/images/38-unit-craigmore-render.jpeg",
  targetBuyer: "Long-term value investors seeking premium-grade gold production with an extended mine life, lower environmental footprint, and access to high-grade zones below the open-pit shell.",
  priceBand: "$1,050/oz AISC",
  features: [
    "85,000 oz Au annual production over a 14-year mine life — 1,190,000 oz total recovery",
    "Industry-leading head grade of 7.8 g/t Au — selective mining of high-grade stopes",
    "Longer mine life provides extended exposure to gold price upside over 14 years",
    "Smaller surface footprint — reduced environmental impact and lower rehabilitation costs",
    "Access to deeper mineralisation not captured in open-pit design — significant upside",
    "AISC of $1,050/oz provides 62% operating margin at current gold prices",
  ],
};

/* ── Scenario C: Phased Hybrid ── */

export const townhomeUnit: HomeType = {
  id: "phased-hybrid",
  name: "Phased Hybrid",
  tagline: "Best of both worlds — initial open-pit operation transitions to underground mining in Year 5, maximising early cash flow while capturing high-grade underground ounces for a combined 16-year mine life and 1.5M+ oz total recovery",
  specs: [
    { label: "Mine Type", value: "Open Pit → Underground (Year 5)" },
    { label: "Phase 1 Production", value: "120,000 oz/yr (Years 1–5)" },
    { label: "Phase 2 Production", value: "85,000 oz/yr (Years 6–16)" },
    { label: "Combined Mine Life", value: "16 years" },
    { label: "Phase 1 Grade", value: "4.8 g/t Au" },
    { label: "Phase 2 Grade", value: "7.8 g/t Au" },
    { label: "Total Recovery", value: "1,535,000 oz Au" },
    { label: "Phase 1 Construction", value: "18 months" },
  ],
  floorPlanImage: "",
  exteriorImage: "/images/craigmore-12-townhouses.jpg",
  targetBuyer: "Strategic investors and mid-tier gold producers seeking maximum resource extraction with staged capital deployment — Phase 1 open-pit cash flow funds Phase 2 underground development for a 16-year production profile.",
  priceBand: "$950/oz blended AISC",
  features: [
    "1,535,000 oz total gold recovery — highest total ounces of any scenario",
    "Phase 1 open-pit generates cash flow within 24 months to self-fund underground development",
    "16-year combined mine life provides long-duration gold price exposure for shareholders",
    "Staged capital deployment — Phase 2 funded from operations, no additional equity raise",
    "Blended AISC of $950/oz across both phases — strong margins throughout mine life",
    "Maximum resource utilisation — captures both near-surface and deep high-grade zones",
  ],
};

/* ── Financials: Scenario A — Open Pit Mine ── */

export const financialsPremiumCondos = {
  summary: {
    totalProjectCost: "$185M",
    totalRevenue: "$2.69B",
    netProfit: "$1.82B",
    equityRequired: "$65M",
    debtFinancing: "$120M (project finance)",
    projectedIRR: "52%",
    equityMultiple: "4.2x",
    projectTimeline: "18-mo build + 8-yr mine life",
  },
  costBreakdown: [
    { label: "Mining Equipment & Fleet", values: ["$45,000,000", "24%"] },
    { label: "Processing Plant (3,500 tpd CIL)", values: ["$62,000,000", "34%"] },
    { label: "Site Infrastructure & Roads", values: ["$28,000,000", "15%"] },
    { label: "Tailings Management Facility", values: ["$18,000,000", "10%"] },
    { label: "Power Line Connection (8 km)", values: ["$12,000,000", "6%"] },
    { label: "Contingency (10%)", values: ["$16,500,000", "9%"] },
    { label: "Owner's Costs & EPCM", values: ["$3,500,000", "2%"] },
    { label: "Total Initial Capex", values: ["$185,000,000", "100%"], highlight: true },
  ] as FinancialRow[],
  revenueBreakdown: [
    { label: "Gold Sales (960K oz × $2,800/oz)", values: ["$2,688,000,000", "98%"] },
    { label: "Silver By-product Credits", values: ["$42,000,000", "2%"] },
    { label: "Total Life-of-Mine Revenue", values: ["$2,730,000,000", "100%"], highlight: true },
  ] as FinancialRow[],
  timeline: [
    { phase: "Q1–Q2 2026", milestone: "Financing close & detailed engineering" },
    { phase: "Q3 2026–Q4 2027", milestone: "Construction — plant & infrastructure" },
    { phase: "Q1 2028", milestone: "First gold pour — commercial production" },
    { phase: "2028–2035", milestone: "Steady-state production — 120K oz/yr" },
  ],
  sensitivity: [
    { scenario: "Bear ($2,200/oz Au)", irr: "35%", multiple: "2.8x", profit: "$1.15B" },
    { scenario: "Base ($2,800/oz Au)", irr: "52%", multiple: "4.2x", profit: "$1.82B" },
    { scenario: "Bull ($3,400/oz Au)", irr: "68%", multiple: "5.7x", profit: "$2.49B" },
  ],
  revenueScenarios: {
    worst:  { units: "$2,112,000,000", total: "$2,112,000,000" },
    likely: { units: "$2,688,000,000", total: "$2,688,000,000" },
    best:   { units: "$3,264,000,000", total: "$3,264,000,000" },
  },
  waterfall: {
    prefReturn: "8% preferred return (cumulative)",
    lpGpSplit: "70% LP / 30% GP after pref",
    investorEquity: "$65,000,000",
    scenarios: [
      { scenario: "Bear", lpProfit: "$805M", gpProfit: "$345M", lpTotal: "$870M" },
      { scenario: "Base", lpProfit: "$1.27B", gpProfit: "$546M", lpTotal: "$1.34B" },
      { scenario: "Bull", lpProfit: "$1.74B", gpProfit: "$747M", lpTotal: "$1.81B" },
    ],
  },
  capitalStack: {
    investorEquity: "$65,000,000",
    constructionLoan: "$120,000,000",
    totalCapital: "$185,000,000",
  },
  chartData: {
    costPie: [
      { name: "Mining Equipment", value: 45000000, color: "#4682B4" },
      { name: "Processing Plant", value: 62000000, color: "#2F4F4F" },
      { name: "Infrastructure", value: 28000000, color: "#2F4F4F" },
      { name: "Tailings Facility", value: 18000000, color: "#1C1C1C" },
      { name: "Power Connection", value: 12000000, color: "#6B6B6B" },
      { name: "Contingency", value: 16500000, color: "#A89060" },
      { name: "Owner's & EPCM", value: 3500000, color: "#D0C4A8" },
    ],
    revenuePie: [
      { name: "Gold Sales", value: 2688000000, color: "#4682B4" },
      { name: "Silver Credits", value: 42000000, color: "#2F4F4F" },
    ],
    cashflow: [
      { quarter: "Y1", inflow: 0, outflow: -95, cumulative: -95 },
      { quarter: "Y2", inflow: 85, outflow: -90, cumulative: -100 },
      { quarter: "Y3", inflow: 340, outflow: -110, cumulative: 130 },
      { quarter: "Y4", inflow: 340, outflow: -105, cumulative: 365 },
      { quarter: "Y5", inflow: 340, outflow: -105, cumulative: 600 },
      { quarter: "Y6", inflow: 340, outflow: -105, cumulative: 835 },
      { quarter: "Y7", inflow: 340, outflow: -110, cumulative: 1065 },
      { quarter: "Y8", inflow: 340, outflow: -105, cumulative: 1300 },
      { quarter: "Y9", inflow: 280, outflow: -95, cumulative: 1485 },
      { quarter: "Y10", inflow: 120, outflow: -55, cumulative: 1550 },
    ],
  },
};

/* ── Financials: Scenario B — Underground Mine ── */

export const financialsMaxDensity = {
  summary: {
    totalProjectCost: "$245M",
    totalRevenue: "$3.33B",
    netProfit: "$2.12B",
    equityRequired: "$95M",
    debtFinancing: "$150M (project finance)",
    projectedIRR: "38%",
    equityMultiple: "3.6x",
    projectTimeline: "30-mo build + 14-yr mine life",
  },
  costBreakdown: [
    { label: "Underground Development", values: ["$78,000,000", "32%"] },
    { label: "Processing Plant (1,800 tpd CIL)", values: ["$52,000,000", "21%"] },
    { label: "Ventilation & Dewatering", values: ["$25,000,000", "10%"] },
    { label: "Mine Services & Backfill Plant", values: ["$32,000,000", "13%"] },
    { label: "Surface Infrastructure", values: ["$22,000,000", "9%"] },
    { label: "Power & Water Systems", values: ["$14,000,000", "6%"] },
    { label: "Contingency (10%)", values: ["$22,300,000", "9%"] },
    { label: "Total Initial Capex", values: ["$245,300,000", "100%"], highlight: true },
  ] as FinancialRow[],
  revenueBreakdown: [
    { label: "Gold Sales (1,190K oz × $2,800/oz)", values: ["$3,332,000,000", "97%"] },
    { label: "Silver By-product Credits", values: ["$58,000,000", "2%"] },
    { label: "Copper By-product Credits", values: ["$35,000,000", "1%"] },
    { label: "Total Life-of-Mine Revenue", values: ["$3,425,000,000", "100%"], highlight: true },
  ] as FinancialRow[],
  timeline: [
    { phase: "Q1–Q2 2026", milestone: "Financing close & detailed engineering" },
    { phase: "Q3 2026–Q2 2028", milestone: "Portal development & underground access" },
    { phase: "Q3 2028", milestone: "Plant commissioning" },
    { phase: "Q1 2029", milestone: "Commercial production declaration" },
    { phase: "2029–2042", milestone: "Steady-state — 85K oz/yr" },
  ],
  sensitivity: [
    { scenario: "Bear ($2,200/oz Au)", irr: "25%", multiple: "2.4x", profit: "$1.35B" },
    { scenario: "Base ($2,800/oz Au)", irr: "38%", multiple: "3.6x", profit: "$2.12B" },
    { scenario: "Bull ($3,400/oz Au)", irr: "51%", multiple: "4.8x", profit: "$2.89B" },
  ],
  revenueScenarios: {
    worst:  { units: "$2,618,000,000", total: "$2,618,000,000" },
    likely: { units: "$3,332,000,000", total: "$3,332,000,000" },
    best:   { units: "$4,046,000,000", total: "$4,046,000,000" },
  },
  chartData: {
    costPie: [
      { name: "UG Development", value: 78000000, color: "#4682B4" },
      { name: "Processing Plant", value: 52000000, color: "#2F4F4F" },
      { name: "Ventilation", value: 25000000, color: "#2F4F4F" },
      { name: "Mine Services", value: 32000000, color: "#1C1C1C" },
      { name: "Infrastructure", value: 22000000, color: "#6B6B6B" },
      { name: "Power & Water", value: 14000000, color: "#A89060" },
      { name: "Contingency", value: 22300000, color: "#D0C4A8" },
    ],
    revenuePie: [
      { name: "Gold Sales", value: 3332000000, color: "#4682B4" },
      { name: "Silver Credits", value: 58000000, color: "#2F4F4F" },
      { name: "Copper Credits", value: 35000000, color: "#2F4F4F" },
    ],
    cashflow: [
      { quarter: "Y1", inflow: 0, outflow: -80, cumulative: -80 },
      { quarter: "Y2", inflow: 0, outflow: -95, cumulative: -175 },
      { quarter: "Y3", inflow: 45, outflow: -70, cumulative: -200 },
      { quarter: "Y4", inflow: 238, outflow: -95, cumulative: -57 },
      { quarter: "Y5", inflow: 238, outflow: -90, cumulative: 91 },
      { quarter: "Y6", inflow: 238, outflow: -90, cumulative: 239 },
      { quarter: "Y7", inflow: 238, outflow: -90, cumulative: 387 },
      { quarter: "Y8", inflow: 238, outflow: -90, cumulative: 535 },
      { quarter: "Y9", inflow: 238, outflow: -90, cumulative: 683 },
      { quarter: "Y10", inflow: 238, outflow: -95, cumulative: 826 },
      { quarter: "Y11", inflow: 238, outflow: -90, cumulative: 974 },
      { quarter: "Y12", inflow: 238, outflow: -90, cumulative: 1122 },
      { quarter: "Y13", inflow: 200, outflow: -85, cumulative: 1237 },
      { quarter: "Y14", inflow: 120, outflow: -50, cumulative: 1307 },
    ],
  },
};

/* ── Financials: Scenario C — Phased Hybrid ── */

export const financialsTownhomes = {
  summary: {
    totalProjectCost: "$285M",
    totalRevenue: "$4.30B",
    netProfit: "$2.85B",
    equityRequired: "$85M",
    debtFinancing: "$200M (staged project finance)",
    projectedIRR: "45%",
    equityMultiple: "4.8x",
    projectTimeline: "18-mo build (Ph.1) + 16-yr mine life",
  },
  costBreakdown: [
    { label: "Phase 1: Open Pit Development", values: ["$145,000,000", "51%"] },
    { label: "Phase 2: Underground Development", values: ["$82,000,000", "29%"] },
    { label: "Processing Plant (expandable)", values: ["$65,000,000", "23%"] },
    { label: "Tailings & Water Management", values: ["$22,000,000", "8%"] },
    { label: "Power & Surface Infrastructure", values: ["$18,000,000", "6%"] },
    { label: "Contingency (10%)", values: ["$28,000,000", "10%"] },
    { label: "Less: Ph.2 funded from operations", values: ["($75,000,000)", "—"] },
    { label: "Net External Capex Required", values: ["$285,000,000", "100%"], highlight: true },
  ] as FinancialRow[],
  revenueBreakdown: [
    { label: "Phase 1: Open Pit Gold (600K oz)", values: ["$1,680,000,000", "39%"] },
    { label: "Phase 2: Underground Gold (935K oz)", values: ["$2,618,000,000", "61%"] },
    { label: "Total Life-of-Mine Revenue", values: ["$4,298,000,000", "100%"], highlight: true },
  ] as FinancialRow[],
  timeline: [
    { phase: "Q1–Q2 2026", milestone: "Phase 1 financing & engineering" },
    { phase: "Q3 2026–Q4 2027", milestone: "Open-pit construction (18 months)" },
    { phase: "Q1 2028–Q4 2032", milestone: "Phase 1 — 120K oz/yr" },
    { phase: "2030–2031", milestone: "UG development (funded from cash flow)" },
    { phase: "2033–2043", milestone: "Phase 2 underground — 85K oz/yr" },
  ],
  sensitivity: [
    { scenario: "Bear ($2,200/oz Au)", irr: "30%", multiple: "3.1x", profit: "$1.72B" },
    { scenario: "Base ($2,800/oz Au)", irr: "45%", multiple: "4.8x", profit: "$2.85B" },
    { scenario: "Bull ($3,400/oz Au)", irr: "58%", multiple: "6.5x", profit: "$3.98B" },
  ],
  revenueScenarios: {
    worst:  { units: "$3,377,000,000", total: "$3,377,000,000" },
    likely: { units: "$4,298,000,000", total: "$4,298,000,000" },
    best:   { units: "$5,219,000,000", total: "$5,219,000,000" },
  },
  chartData: {
    costPie: [
      { name: "Phase 1 Open Pit", value: 145000000, color: "#4682B4" },
      { name: "Phase 2 Underground", value: 82000000, color: "#2F4F4F" },
      { name: "Processing Plant", value: 65000000, color: "#2F4F4F" },
      { name: "Tailings & Water", value: 22000000, color: "#1C1C1C" },
      { name: "Infrastructure", value: 18000000, color: "#6B6B6B" },
      { name: "Contingency", value: 28000000, color: "#D0C4A8" },
    ],
    revenuePie: [
      { name: "Phase 1 Gold (OP)", value: 1680000000, color: "#4682B4" },
      { name: "Phase 2 Gold (UG)", value: 2618000000, color: "#2F4F4F" },
    ],
    cashflow: [
      { quarter: "Y1", inflow: 0, outflow: -95, cumulative: -95 },
      { quarter: "Y2", inflow: 85, outflow: -90, cumulative: -100 },
      { quarter: "Y3", inflow: 340, outflow: -110, cumulative: 130 },
      { quarter: "Y4", inflow: 340, outflow: -115, cumulative: 355 },
      { quarter: "Y5", inflow: 340, outflow: -145, cumulative: 550 },
      { quarter: "Y6", inflow: 238, outflow: -105, cumulative: 683 },
      { quarter: "Y7", inflow: 238, outflow: -90, cumulative: 831 },
      { quarter: "Y8", inflow: 238, outflow: -90, cumulative: 979 },
      { quarter: "Y9", inflow: 238, outflow: -90, cumulative: 1127 },
      { quarter: "Y10", inflow: 238, outflow: -90, cumulative: 1275 },
      { quarter: "Y11", inflow: 238, outflow: -90, cumulative: 1423 },
      { quarter: "Y12", inflow: 238, outflow: -90, cumulative: 1571 },
      { quarter: "Y13", inflow: 238, outflow: -90, cumulative: 1719 },
      { quarter: "Y14", inflow: 238, outflow: -90, cumulative: 1867 },
      { quarter: "Y15", inflow: 200, outflow: -85, cumulative: 1982 },
      { quarter: "Y16", inflow: 120, outflow: -55, cumulative: 2047 },
    ],
  },
};

export interface ClosingScenario {
  key: string;
  label: string;
  capitalAsk: string;
  minimumInvestment: string;
  targetClose: string;
  structure: string;
  equityOffered: string;
  investorTerms: string;
  useOfFunds: { label: string; amount: string; percent: string }[];
  timeline: { date: string; event: string }[];
}

export const closingScenarios: ClosingScenario[] = [
  {
    key: "open-pit",
    label: "Open Pit Mine",
    capitalAsk: "$65,000,000",
    minimumInvestment: "$1,000,000",
    targetClose: "Q2 2026",
    structure: "Bought-Deal Equity Financing",
    equityOffered: "~15% dilution (new shares at $4.50/share)",
    investorTerms:
      "Public offering of common shares on the TSX. Shares issued at $4.50 per share representing a 10% discount to the 20-day VWAP. Half-warrant attached with $6.00 exercise price (24-month expiry). Flow-through eligible for qualifying expenditures.",
    useOfFunds: [
      { label: "Mining Equipment & Fleet", amount: "$45,000,000", percent: "24%" },
      { label: "Processing Plant (3,500 tpd)", amount: "$62,000,000", percent: "34%" },
      { label: "Infrastructure & Power", amount: "$40,000,000", percent: "22%" },
      { label: "Tailings Management", amount: "$18,000,000", percent: "10%" },
      { label: "Contingency & EPCM", amount: "$20,000,000", percent: "11%" },
    ],
    timeline: [
      { date: "Q2 2026", event: "Bought-deal closing & project finance drawdown" },
      { date: "Q3 2026", event: "Construction commences — earthworks & foundations" },
      { date: "Q2 2027", event: "Processing plant mechanical completion" },
      { date: "Q4 2027", event: "Commissioning & first gold pour" },
      { date: "Q1 2028", event: "Commercial production — steady-state operations" },
      { date: "2035", event: "Mine closure & rehabilitation" },
    ],
  },
  {
    key: "underground",
    label: "Underground Mine",
    capitalAsk: "$95,000,000",
    minimumInvestment: "$1,000,000",
    targetClose: "Q2 2026",
    structure: "Bought-Deal Equity Financing",
    equityOffered: "~20% dilution (new shares at $4.50/share)",
    investorTerms:
      "Public offering of common shares on the TSX. Shares issued at $4.50 per share. Half-warrant attached with $6.50 exercise price (24-month expiry). Overallotment option of 15% for syndicate.",
    useOfFunds: [
      { label: "Underground Development", amount: "$78,000,000", percent: "32%" },
      { label: "Processing Plant (1,800 tpd)", amount: "$52,000,000", percent: "21%" },
      { label: "Mine Services & Infrastructure", amount: "$68,000,000", percent: "28%" },
      { label: "Power, Water & Surface", amount: "$25,000,000", percent: "10%" },
      { label: "Contingency", amount: "$22,300,000", percent: "9%" },
    ],
    timeline: [
      { date: "Q2 2026", event: "Equity raise closing & financing" },
      { date: "Q3 2026", event: "Portal construction & ramp development" },
      { date: "Q2 2028", event: "Processing plant commissioning" },
      { date: "Q1 2029", event: "Commercial production declaration" },
      { date: "2029–2042", event: "Steady-state production — 85K oz/yr" },
      { date: "2043", event: "Mine closure & rehabilitation" },
    ],
  },
  {
    key: "phased-hybrid",
    label: "Phased Hybrid",
    capitalAsk: "$85,000,000",
    minimumInvestment: "$1,000,000",
    targetClose: "Q2 2026",
    structure: "Bought-Deal + Streaming",
    equityOffered: "~18% dilution + 3% NSR on underground production",
    investorTerms:
      "Combination financing: $65M bought-deal equity (shares at $4.50) plus $20M gold stream on Phase 2 underground ounces (3% NSR). Phase 2 underground capex funded from Phase 1 cash flow — no additional equity raise required.",
    useOfFunds: [
      { label: "Phase 1: Open Pit & Plant", amount: "$145,000,000", percent: "51%" },
      { label: "Phase 2: Underground (cash flow)", amount: "$82,000,000", percent: "29%" },
      { label: "Infrastructure & Tailings", amount: "$40,000,000", percent: "14%" },
      { label: "Contingency", amount: "$28,000,000", percent: "10%" },
    ],
    timeline: [
      { date: "Q2 2026", event: "Phase 1 equity raise & project finance" },
      { date: "Q3 2026", event: "Open-pit construction commences" },
      { date: "Q1 2028", event: "Phase 1 first gold pour" },
      { date: "2030", event: "Phase 2 underground development (from cash flow)" },
      { date: "2033", event: "Underground production commences" },
      { date: "2043", event: "Mine closure & final rehabilitation" },
    ],
  },
];

/* ─── Stock / Market Data ─── */

export const stockTicker = {
  symbol: "AUR",
  exchange: "TSX",
  price: 4.82,
  change: +0.27,
  changePct: +5.93,
  volume: "1.2M",
  marketCap: "$482M",
  goldSpot: 2_812,
  high52w: 5.40,
  low52w: 1.85,
};

export interface StockPricePoint {
  date: string;
  price: number;
  volume: number;
}

export const stockHistory: StockPricePoint[] = [
  { date: "Mar 24", price: 1.85, volume: 320 },
  { date: "Apr 24", price: 2.10, volume: 410 },
  { date: "May 24", price: 1.92, volume: 280 },
  { date: "Jun 24", price: 2.35, volume: 560 },
  { date: "Jul 24", price: 2.68, volume: 720 },
  { date: "Aug 24", price: 2.55, volume: 480 },
  { date: "Sep 24", price: 3.10, volume: 890 },
  { date: "Oct 24", price: 3.45, volume: 1100 },
  { date: "Nov 24", price: 3.22, volume: 650 },
  { date: "Dec 24", price: 3.80, volume: 1400 },
  { date: "Jan 25", price: 4.15, volume: 1600 },
  { date: "Feb 25", price: 4.55, volume: 1200 },
];

export const closing = {
  contact: {
    name: "Margaret Chen, P.Geo",
    title: "CEO, Aurelia Gold Corp (TSX: AUR)",
    email: "investors@aureliagold.com",
    phone: "(416) 555-0200",
    address: "Toronto, ON",
  },
  disclaimer:
    "This document is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Mining investment involves significant risk including total loss of capital. Mineral resource estimates are based on NI 43-101 compliant data and may not be realised in production. Forward-looking statements are subject to material risks and uncertainties. Investors should consult with qualified financial advisors. All figures in Canadian dollars unless otherwise stated.",
};
