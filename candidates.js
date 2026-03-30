// ─────────────────────────────────────────────
//  PLAINVIEW — Candidate Data
//  Edit this file to add, update, or remove candidates.
//  All pages (index, about, etc.) pull from here.
// ─────────────────────────────────────────────

const TAGS = {
  housing:             { bg:'#E8D4BC', c:'#5C2E08' },
  environment:         { bg:'#CCDFD4', c:'#1A3C28' },
  healthcare:          { bg:'#DDD0E8', c:'#38205A' },
  economy:             { bg:'#F5E4C0', c:'#4A3408' },
  education:           { bg:'#C8DDE8', c:'#1A2E40' },
  'public safety':     { bg:'#F0D8CC', c:'#501E10' },
  immigration:         { bg:'#D8E4CC', c:'#243818' },
  'civil rights':      { bg:'#E4D4E4', c:'#3C1C3C' },
  infrastructure:      { bg:'#E0DCC8', c:'#383418' },
  'foreign policy':    { bg:'#D0DCE4', c:'#1C2C3C' },
  homelessness:        { bg:'#ECD8BC', c:'#4A2C08' },
  'water & energy':    { bg:'#CCE0D8', c:'#183428' },
  'reproductive rights':{ bg:'#E8CCE0', c:'#481838' },
  'gun policy':        { bg:'#D8D4E8', c:'#282040' },
  'campaign finance':  { bg:'#F2DCC8', c:'#4C2810' },
};

// ─────────────────────────────────────────────
//  TO ADD A CANDIDATE: copy one block below,
//  give it the next id number, fill in the fields.
//  region options:    'bay' | 'norcal' | 'central'
//  officetype:        'congress' | 'senate' | 'assembly' | 'local' | 'state'
//  party:             'dem' | 'rep' | 'ind'
//  status:            'incumbent' | 'challenger' | 'open seat'
// ─────────────────────────────────────────────

const CANDIDATES = [
  {
    id: 1,
    name: 'Barbara Lee',
    office: 'U.S. Senate · California',
    region: 'bay',
    officetype: 'congress',
    party: 'dem',
    status: 'incumbent',
    platform: 'Medicare for All, federal housing investment, ending cash bail, progressive tax reform. Opposes military aid without humanitarian conditions.',
    donors: 'Education ($180k), Health ($140k), Civil servants ($95k). No corporate PAC money accepted.',
    statement: '"Housing is a human right, not a commodity." — SF Chronicle, Jan 2026',
    tags: ['healthcare', 'housing', 'civil rights', 'education'],
    sources: ['OpenSecrets', 'Congress.gov'],
    updated: 'Mar 10, 2026',
    full: {
      voting: 'Voted against HR 2670 (NDAA). Voted yes on HR 5: George Floyd Justice in Policing Act. Rated 95% by ACLU.',
      finance: [
        { amt: '$180k', src: 'Education' },
        { amt: '$140k', src: 'Healthcare' },
        { amt: '$95k',  src: 'Civil servants' },
      ],
      endorsements: 'SEIU, Sierra Club, ACLU, Progressive Democrats of America',
      stances: [
        { issue: 'Housing',     text: 'Supports federal investment in affordable housing; co-sponsored American Housing and Economic Mobility Act.' },
        { issue: 'Immigration', text: 'Supports pathway to citizenship; opposes family separation policies.' },
      ],
    },
  },
  {
    id: 2,
    name: 'Matt Mahan',
    office: 'San Jose Mayor',
    region: 'bay',
    officetype: 'local',
    party: 'dem',
    status: 'incumbent',
    platform: 'Streamlined housing permitting, public safety investment, small business support, infrastructure repair.',
    donors: 'Real estate ($210k), Tech ($175k), Finance ($88k).',
    statement: '"We need to build more housing faster, full stop." — Mercury News, Feb 2026',
    tags: ['housing', 'infrastructure', 'economy', 'public safety'],
    sources: ['OpenSecrets', 'FEC'],
    updated: 'Mar 8, 2026',
    full: {
      voting: 'N/A (local executive)',
      finance: [
        { amt: '$210k', src: 'Real estate' },
        { amt: '$175k', src: 'Technology' },
        { amt: '$88k',  src: 'Finance' },
      ],
      endorsements: 'San Jose Chamber of Commerce, South Bay Labor Council',
      stances: [
        { issue: 'Housing',     text: 'Supports cutting permitting timelines from 18 months to 6; pro-market-rate and affordable development.' },
        { issue: 'Immigration', text: 'Designated San Jose a sanctuary city; opposes ICE cooperation without criminal warrant.' },
      ],
    },
  },
  {
    id: 3,
    name: 'Anna Caballero',
    office: 'CA State Senate · District 14',
    region: 'central',
    officetype: 'senate',
    party: 'dem',
    status: 'incumbent',
    platform: 'Agricultural water policy, rural healthcare access, wildfire prevention funding, broadband expansion.',
    donors: 'Agriculture ($230k), Utilities ($145k), Labor unions ($120k).',
    statement: '"Rural California cannot be an afterthought in state budget negotiations." — Fresno Bee, Dec 2025',
    tags: ['water & energy', 'healthcare', 'infrastructure', 'environment'],
    sources: ['OpenSecrets', 'Ballotpedia'],
    updated: 'Mar 5, 2026',
    full: {
      voting: 'Voted yes on SB 4 (housing near transit). Voted yes on AB 205 (energy omnibus). Rated 78% by CA League of Conservation Voters.',
      finance: [
        { amt: '$230k', src: 'Agriculture' },
        { amt: '$145k', src: 'Utilities' },
        { amt: '$120k', src: 'Labor unions' },
      ],
      endorsements: 'CA Farm Bureau, UFCW, CA Nurses Association',
      stances: [
        { issue: 'Housing',     text: 'Supports streamlined rural housing; authored SB 1105 on farmworker housing.' },
        { issue: 'Immigration', text: 'Supports ag guest worker programs; authored legislation on farmworker protections.' },
      ],
    },
  },
  {
    id: 4,
    name: 'Kevin de León',
    office: 'Los Angeles City Council · District 14',
    region: 'bay',
    officetype: 'local',
    party: 'dem',
    status: 'incumbent',
    platform: 'Homelessness services, immigrant rights, rent stabilization, green infrastructure.',
    donors: 'Labor unions ($195k), Community orgs ($88k), Real estate ($72k).',
    statement: '"Every unhoused neighbor deserves a path indoors, not a citation." — LA Times, Jan 2026',
    tags: ['homelessness', 'housing', 'civil rights', 'immigration'],
    sources: ['OpenSecrets', 'Ballotpedia'],
    updated: 'Feb 28, 2026',
    full: {
      voting: 'Voted yes on Measure ULA (real estate transfer tax). Voted yes on LA Green New Deal resolution.',
      finance: [
        { amt: '$195k', src: 'Labor unions' },
        { amt: '$88k',  src: 'Community orgs' },
        { amt: '$72k',  src: 'Real estate' },
      ],
      endorsements: 'SEIU Local 721, LA County Democratic Party',
      stances: [
        { issue: 'Housing',     text: 'Supports Measure ULA to fund affordable housing; co-authored motion on emergency shelter expansion.' },
        { issue: 'Immigration', text: 'Author of multiple motions declaring LA a sanctuary city; opposes ICE operations in LA County.' },
      ],
    },
  },
  {
    id: 5,
    name: 'Lanhee Chen',
    office: 'CA State Controller',
    region: 'bay',
    officetype: 'state',
    party: 'rep',
    status: 'challenger',
    platform: 'Fiscal accountability, audit reform, reducing bureaucratic waste, economic competitiveness.',
    donors: 'Finance ($310k), Business associations ($185k), Tech ($140k).',
    statement: '"California\'s fiscal house is in disorder. A Controller must be a watchdog, not a rubber stamp." — Wall Street Journal, Nov 2025',
    tags: ['economy', 'campaign finance', 'infrastructure'],
    sources: ['OpenSecrets', 'FEC'],
    updated: 'Mar 1, 2026',
    full: {
      voting: 'N/A (seeking statewide office)',
      finance: [
        { amt: '$310k', src: 'Finance sector' },
        { amt: '$185k', src: 'Business assoc.' },
        { amt: '$140k', src: 'Technology' },
      ],
      endorsements: 'CA Republican Party, Howard Jarvis Taxpayers Association',
      stances: [
        { issue: 'Housing',     text: 'Supports streamlining permitting to reduce costs; opposes rent control.' },
        { issue: 'Immigration', text: 'Supports E-Verify requirements; opposes state funding for undocumented immigrants.' },
      ],
    },
  },
  {
    id: 6,
    name: 'Ro Khanna',
    office: 'U.S. House · CA-17',
    region: 'bay',
    officetype: 'congress',
    party: 'dem',
    status: 'incumbent',
    platform: 'Tech regulation, universal basic income pilot, anti-monopoly policy, progressive foreign policy.',
    donors: 'Tech ($290k), Lawyers ($175k), Education ($95k). Opposes corporate PAC money.',
    statement: '"Big tech must be accountable to workers and communities, not just shareholders." — The Atlantic, Feb 2026',
    tags: ['economy', 'education', 'foreign policy', 'civil rights'],
    sources: ['Congress.gov', 'OpenSecrets'],
    updated: 'Mar 12, 2026',
    full: {
      voting: 'Voted against FY2024 NDAA. Voted yes on Inflation Reduction Act. Rated 97% by Progressive Punch.',
      finance: [
        { amt: '$290k', src: 'Technology' },
        { amt: '$175k', src: 'Lawyers' },
        { amt: '$95k',  src: 'Education' },
      ],
      endorsements: 'Bernie Sanders, Progressive Democrats of America, Communications Workers of America',
      stances: [
        { issue: 'Housing',     text: 'Supports federal investment in affordable housing; co-sponsored legislation on tech worker affordable housing in Silicon Valley.' },
        { issue: 'Immigration', text: 'Supports pathway to citizenship; co-sponsored DREAM Act.' },
      ],
    },
  },
  {
    id: 7,
    name: 'Alex Padilla',
    office: 'U.S. Senate · California',
    region: 'bay',
    officetype: 'congress',
    party: 'dem',
    status: 'incumbent',
    platform: 'Immigration reform, climate policy, voting rights, semiconductor investment.',
    donors: 'Tech ($320k), Labor ($210k), Finance ($155k).',
    statement: '"Protecting the right to vote is protecting democracy itself." — MSNBC, Jan 2026',
    tags: ['immigration', 'civil rights', 'environment', 'economy'],
    sources: ['Congress.gov', 'OpenSecrets'],
    updated: 'Mar 9, 2026',
    full: {
      voting: 'Voted yes on Inflation Reduction Act. Voted yes on CHIPS and Science Act. Rated 92% by League of Conservation Voters.',
      finance: [
        { amt: '$320k', src: 'Technology' },
        { amt: '$210k', src: 'Labor unions' },
        { amt: '$155k', src: 'Finance' },
      ],
      endorsements: 'CA Democratic Party, SEIU, Sierra Club, AFL-CIO',
      stances: [
        { issue: 'Housing',     text: 'Supports federal investment in affordable housing and down-payment assistance for first-generation homebuyers.' },
        { issue: 'Immigration', text: 'Author of S.348 (pathway to citizenship); strong opponent of border wall funding.' },
      ],
    },
  },
  {
    id: 8,
    name: 'Buffy Wicks',
    office: 'CA State Assembly · District 14',
    region: 'bay',
    officetype: 'assembly',
    party: 'dem',
    status: 'incumbent',
    platform: 'Housing production, childcare expansion, healthcare access, clean energy transition.',
    donors: 'Labor ($220k), Healthcare ($145k), Real estate ($110k).',
    statement: '"We cannot tax our way out of the housing crisis — we have to build." — CalMatters, Oct 2025',
    tags: ['housing', 'healthcare', 'education', 'environment'],
    sources: ['Ballotpedia', 'OpenSecrets'],
    updated: 'Feb 20, 2026',
    full: {
      voting: 'Authored AB 2011 (housing on commercial land). Voted yes on SB 423 (housing streamlining). Rated 88% by CA League of Conservation Voters.',
      finance: [
        { amt: '$220k', src: 'Labor unions' },
        { amt: '$145k', src: 'Healthcare' },
        { amt: '$110k', src: 'Real estate' },
      ],
      endorsements: 'Speaker Robert Rivas, East Bay Young Democrats, CA Teachers Association',
      stances: [
        { issue: 'Housing',     text: 'Primary author of AB 2011, allowing residential development on commercial-zoned land statewide.' },
        { issue: 'Immigration', text: 'Supports sanctuary policies; authored legislation expanding language access in state services.' },
      ],
    },
  },
];
