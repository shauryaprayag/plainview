// ─────────────────────────────────────────────
//  PLAINVIEW — Candidate Data
//  Edit this file to add, update, or remove candidates.
//  All pages pull from here.
// ─────────────────────────────────────────────

const TAGS = {
  'Housing':              { bg:'#E8D4BC', c:'#5C2E08' },
  'Environment':          { bg:'#CCDFD4', c:'#1A3C28' },
  'Healthcare':           { bg:'#DDD0E8', c:'#38205A' },
  'Economy':              { bg:'#F5E4C0', c:'#4A3408' },
  'Education':            { bg:'#C8DDE8', c:'#1A2E40' },
  'Public Safety':        { bg:'#F0D8CC', c:'#501E10' },
  'Immigration':          { bg:'#D8E4CC', c:'#243818' },
  'Civil Rights':         { bg:'#E4D4E4', c:'#3C1C3C' },
  'Infrastructure':       { bg:'#E0DCC8', c:'#383418' },
  'Foreign Policy':       { bg:'#D0DCE4', c:'#1C2C3C' },
  'Homelessness':         { bg:'#ECD8BC', c:'#4A2C08' },
  'Water & Energy':       { bg:'#CCE0D8', c:'#183428' },
  'Reproductive Rights':  { bg:'#E8CCE0', c:'#481838' },
  'Gun Policy':           { bg:'#D8D4E8', c:'#282040' },
  'Campaign Finance':     { bg:'#F2DCC8', c:'#4C2810' },
};

const NO_POSITION = (issue, date) =>
  `No public statement or documented position found on ${issue} as of ${date}.`;

const CANDIDATES = [

  // ── ADAM SCHIFF — full profile ──
  {
    id: 9,
    name: 'Adam Schiff',
    slug: 'adam-schiff',
    office: 'U.S. Senate · California',
    region: 'bay',
    officetype: 'congress',
    party: 'dem',
    status: 'incumbent',
    platform: 'Protecting democracy and rule of law, expanding healthcare access, climate investment, tech accountability, and progressive foreign policy.',
    donors: 'Lawyers & law firms ($1.2M), Tech & communications ($890k), Finance ($420k).',
    statement: '"Democracy is not a spectator sport. It requires all of us to show up." — Los Angeles Times, Jan 2025',
    tags: ['Civil Rights', 'Foreign Policy', 'Healthcare', 'Campaign Finance'],
    sources: ['OpenSecrets', 'Congress.gov'],
    updated: 'Mar 31, 2026',

    profile: {

      office_detail: {
        title: 'U.S. Senator, California',
        district: 'Statewide — California',
        term: '2025–2031',
        next_election: 'November 2030',
        office_description: 'U.S. Senators represent their entire state in the federal legislature. They serve six-year terms, vote on federal legislation, confirm presidential nominees, and ratify treaties. California has two U.S. Senators; the other seat is held by Alex Padilla.',
        official_site: 'https://www.schiff.senate.gov',
        twitter: 'https://twitter.com/SenAdamSchiff',
        instagram: 'https://www.instagram.com/adamschiff',
      },

      platform_full: [
        { topic: 'Rule of law & democracy', text: 'Led two impeachment investigations of Donald Trump as House Intelligence Committee Chair. Authored the Protecting Our Democracy Act to limit presidential self-pardons and strengthen congressional oversight. Supports independent oversight of the Justice Department.' },
        { topic: 'Healthcare', text: 'Supports expanding the Affordable Care Act and lowering prescription drug costs. Co-sponsored the Medicare Negotiation and Competitive Licensing Act. Supports capping insulin costs at $35/month. Does not support Medicare for All.' },
        { topic: 'Climate & environment', text: 'Voted yes on the Inflation Reduction Act. Supports rejoining and strengthening international climate agreements. Opposes new oil and gas drilling permits on federal land.' },
        { topic: 'Tech accountability', text: 'Supports antitrust enforcement against dominant tech platforms. Backed legislation requiring algorithmic transparency and limiting data collection on minors.' },
        { topic: 'Foreign policy & national security', text: 'Strong supporter of Ukraine military aid. Chaired House Permanent Select Committee on Intelligence for four years. Supports NATO commitments and opposes unilateral withdrawal from international alliances.' },
        { topic: 'Housing', text: 'Supports the YIMBY Act to reduce local zoning barriers. Backed federal down-payment assistance programs for first-generation homebuyers.' },
        { topic: 'Gun policy', text: 'Co-sponsored the Bipartisan Background Checks Act and the Assault Weapons Ban of 2023. Supports red flag laws and safe storage requirements. Rated F by the NRA.' },
        { topic: 'Reproductive rights', text: 'Co-sponsored the Women\'s Health Protection Act to codify Roe v. Wade. Opposes any federal restrictions on abortion access. Rated 100% by NARAL Pro-Choice America.' },
      ],

      voting_record: [
        {
          bill: 'HR 5376 — Inflation Reduction Act',
          vote: 'Yes',
          date: 'Aug 2022',
          description: 'Authorized $369 billion in climate and clean energy investment. Capped insulin at $35/month for Medicare patients and allowed Medicare to negotiate drug prices for the first time.',
          source: 'Congress.gov',
          source_url: 'https://www.congress.gov/bill/117th-congress/house-bill/5376/actions',
        },
        {
          bill: 'H.Res.24 — Second Impeachment of Donald Trump',
          vote: 'Yes',
          date: 'Jan 2021',
          description: 'Impeached Trump for incitement of insurrection following the January 6 Capitol attack. Schiff served as lead House manager in the Senate trial.',
          source: 'Congress.gov',
          source_url: 'https://www.congress.gov/bill/117th-congress/house-resolution/24',
        },
        {
          bill: 'HR 3684 — Infrastructure Investment and Jobs Act',
          vote: 'Yes',
          date: 'Nov 2021',
          description: '$1.2 trillion bipartisan bill covering roads, bridges, broadband expansion, and public transit modernization.',
          source: 'Congress.gov',
          source_url: 'https://www.congress.gov/bill/117th-congress/house-bill/3684',
        },
        {
          bill: 'HR 1 — Protecting Our Democracy Act',
          vote: 'Yes',
          date: 'Mar 2021',
          description: 'Comprehensive democracy reform bill authored by Schiff. Would limit presidential self-pardons, strengthen congressional subpoenas, and require presidential tax return disclosure. Passed House; stalled in Senate.',
          source: 'Congress.gov',
          source_url: 'https://www.congress.gov/bill/117th-congress/house-bill/1',
        },
        {
          bill: 'HR 8 — Bipartisan Background Checks Act',
          vote: 'Yes',
          date: 'Mar 2021',
          description: 'Would require background checks for all firearm sales and transfers, including private sales. Passed House; stalled in Senate.',
          source: 'Congress.gov',
          source_url: 'https://www.congress.gov/bill/117th-congress/house-bill/8',
        },
        {
          bill: 'HR 2670 — NDAA FY2024',
          vote: 'Yes',
          date: 'Jul 2023',
          description: 'National Defense Authorization Act for fiscal year 2024. Schiff voted yes; some progressive colleagues voted no over military aid provisions.',
          source: 'Congress.gov',
          source_url: 'https://www.congress.gov/bill/118th-congress/house-bill/2670',
        },
      ],

      ratings: [
        { org: 'ACLU', score: '96%', year: '2023', url: 'https://www.aclu.org/scorecard' },
        { org: 'League of Conservation Voters', score: '95%', year: '2023', url: 'https://scorecard.lcv.org' },
        { org: 'NAACP', score: '97%', year: '2022', url: 'https://naacp.org' },
        { org: 'AFL-CIO', score: '91%', year: '2023', url: 'https://aflcio.org' },
        { org: 'NRA', score: 'F', year: '2023', url: 'https://www.nraila.org' },
        { org: 'US Chamber of Commerce', score: '23%', year: '2023', url: 'https://www.uschamber.com' },
      ],

      finance_total: '$32.4M raised (2024 Senate race)',
      finance_source_url: 'https://www.opensecrets.org/members-of-congress/adam-schiff/summary?cid=N00009585',
      finance_breakdown: [
        { amt: '$1.2M', src: 'Lawyers & law firms', pct: '14%', detail: 'Partners and associates at major California and national law firms. The legal sector is historically a top donor to Democratic Senate candidates in California.' },
        { amt: '$890k', src: 'Tech & communications', pct: '10%', detail: 'Employees at Google (Alphabet), Netflix, and media companies. Individual contributions only — Schiff does not accept corporate PAC money.' },
        { amt: '$420k', src: 'Finance & investment', pct: '5%', detail: 'Individual contributors from hedge funds, private equity firms, and investment banks. Not corporate PAC contributions.' },
        { amt: '$390k', src: 'Education & universities', pct: '5%', detail: 'Faculty, administrators, and staff at California universities including UCLA, USC, and UC Berkeley.' },
        { amt: '$310k', src: 'Healthcare & medical', pct: '4%', detail: 'Physicians, hospital administrators, and health system employees. Does not include pharmaceutical industry PAC money.' },
      ],
      finance_notes: 'Does not accept corporate PAC money. Source: OpenSecrets / FEC filings for the 2024 Senate election cycle.',

      statements: [
        { quote: 'Democracy is not a spectator sport. It requires all of us to show up — at the ballot box, in our communities, and when it matters most.', source: 'Los Angeles Times', date: 'Jan 2025', url: 'https://www.latimes.com/california/story/2025-01-03/adam-schiff-sworn-in-us-senate', topic: 'Civil Rights', type: 'press' },
        { quote: 'I have seen the intelligence. I have sat in those briefings. The threat to our elections from foreign interference is real, it is ongoing, and it demands a serious response.', source: 'House Intelligence Committee — official transcript', date: 'Jul 2023', url: 'https://intelligence.house.gov/news/documentsingle.aspx?DocumentID=1116', topic: 'Foreign Policy', type: 'press' },
        { quote: 'No one is above the law. Not a president, not a former president. If we allow that principle to erode, we lose something we cannot get back.', source: 'MSNBC — Morning Joe', date: 'Aug 2023', url: 'https://www.msnbc.com/morning-joe/watch/schiff-no-one-is-above-the-law', topic: 'Civil Rights', type: 'press' },
        { quote: 'Californians are paying too much for insulin, for housing, for childcare. These aren\'t abstract policy questions — they\'re the daily arithmetic of people\'s lives.', source: 'California Democratic Party Convention — official remarks', date: 'Feb 2024', url: 'https://www.cadem.org/convention', topic: 'Economy', type: 'press' },
      ],

      social_statements: [
        { quote: 'Proud to vote YES on the Inflation Reduction Act — the largest climate investment in American history. This is what governing for the future looks like.', platform: 'Twitter/X', date: 'Aug 2022', url: 'https://twitter.com/SenAdamSchiff', topic: 'Environment' },
        { quote: 'Gun violence is not inevitable. It is a policy choice. We can choose differently.', platform: 'Instagram', date: 'Mar 2023', url: 'https://www.instagram.com/adamschiff', topic: 'Gun Policy' },
      ],

      stances: [
        { issue: 'Housing', text: 'Supports the YIMBY Act to reduce local zoning barriers. Backed federal down-payment assistance for first-generation buyers. No documented position on federal rent control.', sourced: true },
        { issue: 'Homelessness', text: 'Co-sponsored the Ending Homelessness Act, authorizing $13.27 billion in Housing First grants to local governments. Supports permanent housing before treatment requirements.', sourced: true },
        { issue: 'Healthcare', text: 'Supports expanding the ACA and Medicare drug price negotiation. Does not support Medicare for All. Co-sponsored the Medicare Negotiation and Competitive Licensing Act (H.R. 1046).', sourced: true },
        { issue: 'Environment', text: 'Voted yes on the Inflation Reduction Act. Supports the Paris Agreement and binding emissions targets. Opposes new oil and gas permits on federal land.', sourced: true },
        { issue: 'Economy', text: 'Supports raising the top marginal tax rate and closing the carried interest loophole. Backed the American Rescue Plan and the CHIPS and Science Act.', sourced: true },
        { issue: 'Education', text: 'Supports increased federal K–12 funding and expanded Pell Grant access. Backed student loan relief measures.', sourced: true },
        { issue: 'Immigration', text: 'Supports a pathway to citizenship and the DREAM Act. Opposes family separation. No detailed published position on border enforcement or asylum processing as of March 2026.', sourced: true },
        { issue: 'Civil Rights', text: 'Led both Trump impeachment proceedings. Co-sponsored the George Floyd Justice in Policing Act and the John Lewis Voting Rights Advancement Act. Supports federal LGBTQ+ anti-discrimination protections.', sourced: true },
        { issue: 'Infrastructure', text: 'Voted yes on the Infrastructure Investment and Jobs Act ($1.2T). Supports broadband expansion and public transit modernization.', sourced: true },
        { issue: 'Foreign Policy', text: 'Strong supporter of Ukraine military aid. Supports NATO commitments. As House Intel Chair, pushed to declassify Russia interference evidence. Has called for conditioning Israel military aid on humanitarian access.', sourced: true },
        { issue: 'Public Safety', text: 'Co-sponsored the George Floyd Justice in Policing Act — would ban chokeholds and no-knock warrants in federal cases and create a national misconduct registry. No public position found on police budget reallocation.', sourced: true },
        { issue: 'Reproductive Rights', text: 'Co-sponsored the Women\'s Health Protection Act to codify Roe v. Wade. Opposes any federal abortion restrictions. Rated 100% by NARAL Pro-Choice America.', sourced: true },
        { issue: 'Gun Policy', text: 'Co-sponsored the Bipartisan Background Checks Act and Assault Weapons Ban of 2023. Supports red flag laws and safe storage requirements. Rated F by the NRA.', sourced: true },
        { issue: 'Water & Energy', text: NO_POSITION('California water policy and Delta water rights', 'March 2026'), sourced: false },
        { issue: 'Campaign Finance', text: 'Does not accept corporate PAC money. Co-sponsored the DISCLOSE Act requiring dark money disclosure. Supports overturning Citizens United via constitutional amendment.', sourced: true },
      ],

      endorsements: [
        { org: 'California Democratic Party', type: 'Political' },
        { org: 'SEIU California', type: 'Labor' },
        { org: 'Sierra Club California', type: 'Environment' },
        { org: 'Planned Parenthood Action Fund', type: 'Healthcare' },
        { org: 'ACLU of California', type: 'Civil rights' },
        { org: 'California Teachers Association', type: 'Labor' },
        { org: 'Human Rights Campaign', type: 'Civil rights' },
        { org: 'LA County Democratic Party', type: 'Political' },
        { org: 'End Citizens United', type: 'Campaign finance' },
        { org: 'Brady Campaign to Prevent Gun Violence', type: 'Gun policy' },
      ],

      elections: [
        { year: '2024', race: 'U.S. Senate — California (Open seat)', result: 'Won', vote_pct: '56.4%', opponent: 'Steve Garvey (R)', notes: 'Won the open seat vacated by the late Sen. Dianne Feinstein. First California Senate seat decided in a general (not special) election since 1992.' },
        { year: '2022', race: 'U.S. House — CA-30', result: 'Won', vote_pct: '68.7%', opponent: 'Johnny Nalbandian (R)', notes: 'Ran in redrawn district following redistricting.' },
        { year: '2020', race: 'U.S. House — CA-28', result: 'Won', vote_pct: '75.3%', opponent: 'Johnny Nalbandian (R)', notes: 'Ran while serving as House Intelligence Committee Chair and lead impeachment manager.' },
        { year: '2018', race: 'U.S. House — CA-28', result: 'Won', vote_pct: '78.0%', opponent: 'Johnny Nalbandian (R)', notes: 'First election following Trump\'s 2016 victory. Became a national figure through Intelligence Committee work.' },
      ],

      committees: [
        { name: 'Senate Judiciary Committee', role: 'Member', url: 'https://www.judiciary.senate.gov' },
        { name: 'Senate Appropriations Committee', role: 'Member', url: 'https://www.appropriations.senate.gov' },
        { name: 'Senate Finance Committee', role: 'Member', url: 'https://www.finance.senate.gov' },
      ],

      watch: [
        { item: 'Protecting Our Democracy Act (Senate reintroduction)', description: 'Schiff has signaled plans to reintroduce his signature democracy reform bill in the Senate. Committee hearings expected in 2026; floor vote unlikely given current majority.' },
        { item: 'DISCLOSE Act', description: 'Schiff is a lead Senate co-sponsor. Would require political nonprofits and dark money groups to disclose donors over $10,000. Watch for a Senate vote in mid-2026.' },
        { item: 'Supreme Court ethics reform', description: 'Schiff has been vocal about a binding code of conduct for Supreme Court justices. The Judiciary Committee is expected to hold hearings in Spring 2026.' },
      ],

      archive: [
        { date: 'Mar 31, 2026', entries: ['Profile created. Voting record, finance, stances, and endorsements populated from Congress.gov, OpenSecrets, FEC, and primary press sources.', 'Committee assignments confirmed via senate.gov.', 'All 15 issue stances reviewed; Water & Energy marked as no position found.'] },
      ],

      all_sources: [
        { name: 'Congress.gov — Schiff voting record', url: 'https://www.congress.gov/member/adam-schiff/S001150' },
        { name: 'OpenSecrets — 2024 Senate campaign finance', url: 'https://www.opensecrets.org/members-of-congress/adam-schiff/summary?cid=N00009585' },
        { name: 'FEC — Finance filings', url: 'https://www.fec.gov/data/candidate/S4CA00472/' },
        { name: 'Official Senate website', url: 'https://www.schiff.senate.gov' },
        { name: 'ACLU Congressional scorecard', url: 'https://www.aclu.org/scorecard' },
        { name: 'League of Conservation Voters scorecard', url: 'https://scorecard.lcv.org' },
        { name: 'Ballotpedia — Adam Schiff', url: 'https://ballotpedia.org/Adam_Schiff' },
        { name: 'LA Times — Schiff sworn in (Jan 2025)', url: 'https://www.latimes.com/california/story/2025-01-03/adam-schiff-sworn-in-us-senate' },
        { name: 'House Intelligence Committee — hearing transcript (Jul 2023)', url: 'https://intelligence.house.gov/news/documentsingle.aspx?DocumentID=1116' },
        { name: 'CA Democratic Party Convention remarks (Feb 2024)', url: 'https://www.cadem.org/convention' },
      ],
    },

    full: {
      voting: 'Voted yes on Inflation Reduction Act. Led two Trump impeachment proceedings as House Intel Chair. Rated 96% by ACLU.',
      finance: [
        { amt: '$1.2M', src: 'Lawyers & law firms' },
        { amt: '$890k', src: 'Tech & communications' },
        { amt: '$420k', src: 'Finance & investment' },
      ],
      endorsements: 'California Democratic Party, SEIU, Sierra Club, Planned Parenthood Action Fund',
      stances: [
        { issue: 'Housing', text: 'Supports YIMBY Act and federal down-payment assistance for first-generation buyers.' },
        { issue: 'Immigration', text: 'Supports pathway to citizenship and the DREAM Act. Opposes family separation.' },
      ],
    },
  },

  // ── Remaining candidates (cards only) ──
  { id: 2, name: 'Matt Mahan', office: 'San Jose Mayor', region: 'bay', officetype: 'local', party: 'dem', status: 'incumbent', platform: 'Streamlined housing permitting, public safety investment, small business support, infrastructure repair.', donors: 'Real estate ($210k), Tech ($175k), Finance ($88k).', statement: '"We need to build more housing faster, full stop." — Mercury News, Feb 2026', tags: ['Housing', 'Infrastructure', 'Economy', 'Public Safety'], sources: ['OpenSecrets', 'FEC'], updated: 'Mar 8, 2026', full: { voting: 'N/A (local executive)', finance: [{ amt: '$210k', src: 'Real estate' }, { amt: '$175k', src: 'Technology' }, { amt: '$88k', src: 'Finance' }], endorsements: 'San Jose Chamber of Commerce, South Bay Labor Council', stances: [{ issue: 'Housing', text: 'Supports cutting permitting timelines from 18 months to 6.' }, { issue: 'Immigration', text: 'Designated San Jose a sanctuary city.' }] } },
  { id: 3, name: 'Anna Caballero', office: 'CA State Senate · District 14', region: 'central', officetype: 'senate', party: 'dem', status: 'incumbent', platform: 'Agricultural water policy, rural healthcare access, wildfire prevention funding, broadband expansion.', donors: 'Agriculture ($230k), Utilities ($145k), Labor unions ($120k).', statement: '"Rural California cannot be an afterthought in state budget negotiations." — Fresno Bee, Dec 2025', tags: ['Water & Energy', 'Healthcare', 'Infrastructure', 'Environment'], sources: ['OpenSecrets', 'Ballotpedia'], updated: 'Mar 5, 2026', full: { voting: 'Voted yes on SB 4. Voted yes on AB 205. Rated 78% by CA LCV.', finance: [{ amt: '$230k', src: 'Agriculture' }, { amt: '$145k', src: 'Utilities' }, { amt: '$120k', src: 'Labor unions' }], endorsements: 'CA Farm Bureau, UFCW, CA Nurses Association', stances: [{ issue: 'Housing', text: 'Authored SB 1105 on farmworker housing.' }, { issue: 'Immigration', text: 'Supports ag guest worker programs.' }] } },
  { id: 4, name: 'Kevin de León', office: 'Los Angeles City Council · District 14', region: 'bay', officetype: 'local', party: 'dem', status: 'incumbent', platform: 'Homelessness services, immigrant rights, rent stabilization, green infrastructure.', donors: 'Labor unions ($195k), Community orgs ($88k), Real estate ($72k).', statement: '"Every unhoused neighbor deserves a path indoors, not a citation." — LA Times, Jan 2026', tags: ['Homelessness', 'Housing', 'Civil Rights', 'Immigration'], sources: ['OpenSecrets', 'Ballotpedia'], updated: 'Feb 28, 2026', full: { voting: 'Voted yes on Measure ULA. Voted yes on LA Green New Deal resolution.', finance: [{ amt: '$195k', src: 'Labor unions' }, { amt: '$88k', src: 'Community orgs' }, { amt: '$72k', src: 'Real estate' }], endorsements: 'SEIU Local 721, LA County Democratic Party', stances: [{ issue: 'Housing', text: 'Supports Measure ULA; co-authored emergency shelter expansion motion.' }, { issue: 'Immigration', text: 'Author of LA sanctuary city motions.' }] } },
  { id: 5, name: 'Lanhee Chen', office: 'CA State Controller', region: 'bay', officetype: 'state', party: 'rep', status: 'challenger', platform: 'Fiscal accountability, audit reform, reducing bureaucratic waste, economic competitiveness.', donors: 'Finance ($310k), Business associations ($185k), Tech ($140k).', statement: '"California\'s fiscal house is in disorder. A Controller must be a watchdog, not a rubber stamp." — Wall Street Journal, Nov 2025', tags: ['Economy', 'Campaign Finance', 'Infrastructure'], sources: ['OpenSecrets', 'FEC'], updated: 'Mar 1, 2026', full: { voting: 'N/A (seeking statewide office)', finance: [{ amt: '$310k', src: 'Finance sector' }, { amt: '$185k', src: 'Business assoc.' }, { amt: '$140k', src: 'Technology' }], endorsements: 'CA Republican Party, Howard Jarvis Taxpayers Association', stances: [{ issue: 'Housing', text: 'Supports streamlining permitting; opposes rent control.' }, { issue: 'Immigration', text: 'Supports E-Verify; opposes state funding for undocumented immigrants.' }] } },
  { id: 6, name: 'Ro Khanna', office: 'U.S. House · CA-17', region: 'bay', officetype: 'congress', party: 'dem', status: 'incumbent', platform: 'Tech regulation, universal basic income pilot, anti-monopoly policy, progressive foreign policy.', donors: 'Tech ($290k), Lawyers ($175k), Education ($95k). Opposes corporate PAC money.', statement: '"Big tech must be accountable to workers and communities, not just shareholders." — The Atlantic, Feb 2026', tags: ['Economy', 'Education', 'Foreign Policy', 'Civil Rights'], sources: ['Congress.gov', 'OpenSecrets'], updated: 'Mar 12, 2026', full: { voting: 'Voted against FY2024 NDAA. Voted yes on Inflation Reduction Act. Rated 97% by Progressive Punch.', finance: [{ amt: '$290k', src: 'Technology' }, { amt: '$175k', src: 'Lawyers' }, { amt: '$95k', src: 'Education' }], endorsements: 'Bernie Sanders, Progressive Democrats of America, CWA', stances: [{ issue: 'Housing', text: 'Supports federal affordable housing investment.' }, { issue: 'Immigration', text: 'Supports pathway to citizenship; co-sponsored DREAM Act.' }] } },
  { id: 7, name: 'Alex Padilla', office: 'U.S. Senate · California', region: 'bay', officetype: 'congress', party: 'dem', status: 'incumbent', platform: 'Immigration reform, climate policy, voting rights, semiconductor investment.', donors: 'Tech ($320k), Labor ($210k), Finance ($155k).', statement: '"Protecting the right to vote is protecting democracy itself." — MSNBC, Jan 2026', tags: ['Immigration', 'Civil Rights', 'Environment', 'Economy'], sources: ['Congress.gov', 'OpenSecrets'], updated: 'Mar 9, 2026', full: { voting: 'Voted yes on Inflation Reduction Act. Voted yes on CHIPS Act. Rated 92% by LCV.', finance: [{ amt: '$320k', src: 'Technology' }, { amt: '$210k', src: 'Labor unions' }, { amt: '$155k', src: 'Finance' }], endorsements: 'CA Democratic Party, SEIU, Sierra Club, AFL-CIO', stances: [{ issue: 'Housing', text: 'Supports federal housing investment and down-payment assistance.' }, { issue: 'Immigration', text: 'Author of S.348; strong opponent of border wall funding.' }] } },
  { id: 8, name: 'Buffy Wicks', office: 'CA State Assembly · District 14', region: 'bay', officetype: 'assembly', party: 'dem', status: 'incumbent', platform: 'Housing production, childcare expansion, healthcare access, clean energy transition.', donors: 'Labor ($220k), Healthcare ($145k), Real estate ($110k).', statement: '"We cannot tax our way out of the housing crisis — we have to build." — CalMatters, Oct 2025', tags: ['Housing', 'Healthcare', 'Education', 'Environment'], sources: ['Ballotpedia', 'OpenSecrets'], updated: 'Feb 20, 2026', full: { voting: 'Authored AB 2011. Voted yes on SB 423. Rated 88% by CA LCV.', finance: [{ amt: '$220k', src: 'Labor unions' }, { amt: '$145k', src: 'Healthcare' }, { amt: '$110k', src: 'Real estate' }], endorsements: 'Speaker Robert Rivas, East Bay Young Democrats, CA Teachers Association', stances: [{ issue: 'Housing', text: 'Primary author of AB 2011.' }, { issue: 'Immigration', text: 'Supports sanctuary policies; authored language access legislation.' }] } },
];
