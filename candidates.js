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
    slug: 'barbara-lee',
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

    // ── FULL PROFILE DATA ──
    profile: {

      // Office & District
      office_detail: {
        title: 'U.S. Senator, California',
        district: 'Statewide — California',
        term: '2025–2031',
        next_election: 'November 2030',
        office_description: 'U.S. Senators represent their entire state in the federal legislature. They serve six-year terms, vote on federal legislation, confirm presidential nominees, and ratify treaties. California has two U.S. Senators.',
        official_site: 'https://www.barbaralee.senate.gov',
        twitter: 'https://twitter.com/SenBarbaraLee',
        instagram: 'https://www.instagram.com/senbarbaralee',
      },

      // Official Platform
      platform_full: [
        { topic: 'Healthcare', text: 'Supports Medicare for All — a single-payer federal healthcare system replacing private insurance. Co-sponsored S.1129, the Medicare for All Act of 2023.' },
        { topic: 'Housing', text: 'Supports the American Housing and Economic Mobility Act, which would invest $450 billion in affordable housing construction and down-payment assistance for first-generation homebuyers.' },
        { topic: 'Criminal justice', text: 'Supports ending cash bail, abolishing mandatory minimums, and redirecting federal funding from incarceration to prevention and rehabilitation programs.' },
        { topic: 'Tax policy', text: 'Supports raising the top marginal income tax rate, reinstating the corporate minimum tax, and closing carried interest loopholes.' },
        { topic: 'Foreign policy', text: 'Opposes unconditional military aid; has consistently voted against defense authorization bills that lack humanitarian accountability provisions.' },
        { topic: 'Climate', text: 'Supports the Green New Deal framework. Co-sponsored the Climate Emergency Act of 2023. Rated 98% by the League of Conservation Voters (2023).' },
      ],

      // Voting Record
      voting_record: [
        { bill: 'HR 2670 — NDAA FY2024', vote: 'No', date: 'Jul 2023', description: 'National Defense Authorization Act. Lee opposed the bill citing lack of humanitarian conditions on military aid.', source: 'Congress.gov', source_url: 'https://www.congress.gov/bill/118th-congress/house-bill/2670' },
        { bill: 'HR 5 — George Floyd Justice in Policing Act', vote: 'Yes', date: 'Mar 2021', description: 'Would have banned chokeholds, no-knock warrants in federal cases, and established a national police misconduct registry. Passed House, died in Senate.', source: 'Congress.gov', source_url: 'https://www.congress.gov/bill/117th-congress/house-bill/5' },
        { bill: 'HR 5376 — Inflation Reduction Act', vote: 'Yes', date: 'Aug 2022', description: 'Authorized $369 billion in climate and clean energy investment, capped insulin costs, and allowed Medicare to negotiate drug prices.', source: 'Congress.gov', source_url: 'https://www.congress.gov/bill/117th-congress/house-bill/5376' },
        { bill: 'HR 3684 — Infrastructure Investment and Jobs Act', vote: 'Yes', date: 'Nov 2021', description: '$1.2 trillion bipartisan infrastructure bill covering roads, bridges, broadband, and public transit.', source: 'Congress.gov', source_url: 'https://www.congress.gov/bill/117th-congress/house-bill/3684' },
        { bill: 'H.Res.24 — Impeachment of Donald Trump (2021)', vote: 'Yes', date: 'Jan 2021', description: 'Impeached Trump for incitement of insurrection following the January 6 Capitol attack.', source: 'Congress.gov', source_url: 'https://www.congress.gov/bill/117th-congress/house-resolution/24' },
        { bill: 'AUMF repeal (H.R.256)', vote: 'Yes', date: 'Jun 2021', description: 'Lee has been the lone consistent vote to repeal the 2001 Authorization for Use of Military Force. This vote supported repealing the 2002 Iraq AUMF.', source: 'Congress.gov', source_url: 'https://www.congress.gov/bill/117th-congress/house-bill/256' },
      ],

      // Scorecard Ratings
      ratings: [
        { org: 'ACLU', score: '95%', year: '2023', url: 'https://www.aclu.org/scorecard' },
        { org: 'League of Conservation Voters', score: '98%', year: '2023', url: 'https://scorecard.lcv.org' },
        { org: 'NAACP', score: '100%', year: '2022', url: 'https://naacp.org' },
        { org: 'AFL-CIO', score: '97%', year: '2023', url: 'https://aflcio.org' },
        { org: 'NRA', score: 'F', year: '2022', url: 'https://www.nraila.org' },
        { org: 'US Chamber of Commerce', score: '12%', year: '2023', url: 'https://www.uschamber.com' },
      ],

      // Campaign Finance
      finance_total: '$4.2M raised (2022 cycle)',
      finance_breakdown: [
        { amt: '$180k', src: 'Education', pct: '18%' },
        { amt: '$140k', src: 'Healthcare', pct: '14%' },
        { amt: '$95k',  src: 'Civil servants / public admin', pct: '10%' },
        { amt: '$88k',  src: 'Lawyers & law firms', pct: '9%' },
        { amt: '$72k',  src: 'Civil rights / social advocacy', pct: '7%' },
      ],
      finance_notes: 'No corporate PAC money accepted. No contributions from fossil fuel companies. Source: OpenSecrets / FEC filings.',
      finance_source_url: 'https://www.opensecrets.org/members-of-congress/barbara-lee/summary',

      // Statements Timeline
      statements: [
        { quote: 'Housing is a human right, not a commodity. Every Californian deserves a safe place to call home.', source: 'SF Chronicle', date: 'Jan 2026', url: 'https://www.sfchronicle.com', topic: 'housing' },
        { quote: 'I have been saying for decades that we need Medicare for All. The insurance companies have had their turn. It\'s time to put patients first.', source: 'MSNBC', date: 'Sep 2025', url: 'https://www.msnbc.com', topic: 'healthcare' },
        { quote: 'Sending weapons without humanitarian accountability is not foreign policy — it\'s complicity. I will not vote for it.', source: 'The Nation', date: 'Apr 2024', url: 'https://www.thenation.com', topic: 'foreign policy' },
        { quote: 'The 2001 AUMF was a blank check for endless war. I was the only vote against it then. I am still fighting to repeal it now.', source: 'Congressional Record', date: 'Jun 2023', url: 'https://www.congress.gov', topic: 'foreign policy' },
      ],

      // Social Media Statements
      social_statements: [
        { quote: 'We cannot build our way to safety with more police. We build safety with jobs, housing, healthcare, and schools.', platform: 'Twitter/X', date: 'Oct 2023', url: 'https://twitter.com/SenBarbaraLee', topic: 'public safety' },
        { quote: 'Proud to vote YES on the Inflation Reduction Act — the largest climate investment in US history. This is what fighting for our future looks like.', platform: 'Instagram', date: 'Aug 2022', url: 'https://www.instagram.com/senbarbaralee', topic: 'environment' },
      ],

      // Issue Stances
      stances: [
        { issue: 'Housing', text: 'Supports the American Housing and Economic Mobility Act; advocates for federal investment in public housing and community land trusts. Opposes exclusionary zoning at the federal level.' },
        { issue: 'Immigration', text: 'Supports a pathway to citizenship for undocumented immigrants. Co-sponsored the Dream and Promise Act. Opposes family separation and opposes cooperation with ICE in sanctuary jurisdictions.' },
        { issue: 'Healthcare', text: 'Strong Medicare for All advocate. Co-sponsored the Medicare for All Act of 2023. Opposes means-testing of Medicaid and Medicare.' },
        { issue: 'Climate & environment', text: 'Co-sponsored the Green New Deal resolution. Supports a federal jobs guarantee tied to clean energy transition. Opposes new fossil fuel permits on federal land.' },
        { issue: 'Foreign policy', text: 'Cast the sole vote against the 2001 AUMF. Consistently opposes unconditional military aid. Supports cutting the defense budget and redirecting funds to domestic priorities.' },
        { issue: 'Criminal justice', text: 'Supports ending cash bail, the BREATHE Act, and federal decriminalization of cannabis. Opposes private prisons and mandatory minimum sentences.' },
        { issue: 'Reproductive rights', text: 'Supports codifying Roe v. Wade into federal law. Co-sponsored the Women\'s Health Protection Act. Opposes any federal restrictions on abortion access.' },
        { issue: 'Gun policy', text: 'Supports universal background checks, assault weapons ban, and red flag laws. Rated F by the NRA.' },
        { issue: 'Economy', text: 'Supports raising the federal minimum wage to $17/hour. Co-sponsored legislation to expand the Child Tax Credit. Opposes carried interest tax loopholes.' },
      ],

      // Endorsements
      endorsements: [
        { org: 'SEIU (Service Employees International Union)', type: 'Labor' },
        { org: 'Sierra Club', type: 'Environment' },
        { org: 'ACLU', type: 'Civil rights' },
        { org: 'Progressive Democrats of America', type: 'Political' },
        { org: 'California Nurses Association', type: 'Labor' },
        { org: 'NAACP California State Conference', type: 'Civil rights' },
        { org: 'Planned Parenthood Action Fund', type: 'Healthcare' },
        { org: 'San Francisco Democratic Party', type: 'Political' },
      ],

      // Election History
      elections: [
        { year: '2022', race: 'U.S. House, CA-12 (Primary)', result: 'Won', vote_pct: '72.4%', opponent: 'Various', notes: 'Won Democratic primary for newly redrawn district.' },
        { year: '2020', race: 'U.S. House, CA-13', result: 'Won', vote_pct: '90.3%', opponent: 'Nikka Piterman (R)', notes: 'Ran unopposed in general; near-walkover.' },
        { year: '2018', race: 'U.S. House, CA-13', result: 'Won', vote_pct: '91.4%', opponent: 'Various', notes: 'Unopposed in general election.' },
        { year: '2024', race: 'U.S. Senate, California', result: 'Won', vote_pct: '51.3%', opponent: 'Steve Garvey (R)', notes: 'Won open seat race after Sen. Feinstein\'s death. First Black woman elected to CA Senate seat.' },
      ],

      // What to Watch
      watch: [
        { item: 'AUMF Repeal push', description: 'Lee has introduced legislation every Congress since 2001 to repeal the Authorization for Use of Military Force. Watch for a Senate floor vote in 2026.' },
        { item: 'Medicare for All Act (S.1129)', description: 'Co-sponsored with Sen. Sanders. Committee markup expected in the Senate HELP Committee in late 2026.' },
        { item: 'American Housing and Economic Mobility Act', description: 'Re-introduced in 2025. Senate Banking Committee hearings scheduled for Spring 2026.' },
      ],

      // Committee Assignments
      committees: [
        { name: 'Senate Appropriations Committee', role: 'Member' },
        { name: 'Senate Foreign Relations Committee', role: 'Member' },
        { name: 'Senate Banking, Housing, and Urban Affairs Committee', role: 'Member' },
      ],

      // All Sources
      all_sources: [
        { name: 'Congress.gov — Voting record', url: 'https://www.congress.gov/member/barbara-lee/L000551' },
        { name: 'OpenSecrets — Campaign finance', url: 'https://www.opensecrets.org/members-of-congress/barbara-lee/summary' },
        { name: 'FEC — Finance filings', url: 'https://www.fec.gov' },
        { name: 'Official Senate website', url: 'https://www.barbaralee.senate.gov' },
        { name: 'League of Conservation Voters scorecard', url: 'https://scorecard.lcv.org' },
        { name: 'ACLU Congressional scorecard', url: 'https://www.aclu.org/scorecard' },
        { name: 'Ballotpedia — Barbara Lee', url: 'https://ballotpedia.org/Barbara_Lee' },
      ],
    },

    // Keep old full block for card modal compatibility
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
