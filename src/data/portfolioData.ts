import { Project, ProcessStep, BeyondScreenItem, ServiceItem } from '../types/portfolio';

export const DESIGNER_INFO = {
  name: 'Vrushti Lakhupota',
  shortName: 'Vrushti',
  role: 'UI/UX Designer',
  location: 'Ahmedabad, India · Open to Remote',
  email: 'vrushtilakhupota@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vrushti-lakhupota-a86768389',
  behance: 'https://www.behance.net/vrushtilakhupo1',
  status: 'Entry-Level · Seeking 1st UI/UX Role',
  bio: `Hey! I'm Vrushti. I design digital products so people don't have to think twice — unless it's about how good it looks. As an entry-level designer looking for my first role, I bring a fresh perspective, strong foundational design thinking, and zero ego. Let's make something people genuinely enjoy using.`,
  extendedBio: `I am an entry-level UX/UI designer eager to launch my career in product design. While I don't have formal corporate tenure yet, I have built a rock-solid foundation through comprehensive, self-driven case studies — conducting real user interviews, mapping user journeys, designing accessible UI systems, and prototyping high-fidelity interactions in Figma. I learn quickly, take constructive feedback constructively, and am ready to support a collaborative design team from day one.`,
  stats: [
    { label: 'Completed Case Studies', value: '04' },
    { label: 'Core Disciplines', value: 'UX · UI · Research' },
    { label: 'Experience Level', value: 'Entry-Level' },
    { label: 'Availability', value: 'Immediate' },
  ],
  disciplines: [
    'User Experience (UX) Design',
    'User Interface (UI) Design',
    'User Research & Interviews',
    'Information Architecture',
    'Interactive Prototyping',
    'Design Systems & Tokens',
    'Usability Testing',
    'Interaction & Motion Design',
  ],
  tools: [
    'Figma',
    'Framer',
    'FigJam',
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'safeher',
    title: 'SafeHer',
    tagline: 'Designing for safety. Designing for confidence.',
    summary: 'A women safety-focused mobile application designed to provide instantaneous emergency assistance, trusted contact tracking, and proactive peace of mind during everyday journeys.',
    category: 'Mobile App',
    role: 'Lead UI/UX Designer',
    timeline: '8 Weeks · 2026',
    team: 'Solo Designer (Research, UX, UI, Prototype)',
    tools: ['Figma', 'FigJam', 'Framer', 'User Interviews'],
    year: '2026',
    coverImage: '/assets/safeher-cover.png',
    featured: true,
    caseStudy: {
      heroQuote: 'Meaningful UX goes beyond utility — it can make people feel prepared, protected, and in control when every second counts.',
      sections: [
        {
          number: '01',
          title: 'Overview',
          subtitle: 'The safety dilemma in everyday urban transit',
          content: [
            'SafeHer was born from a pressing real-world reality: millions of women navigate anxiety-inducing commutes, poorly lit transit paths, and sudden emergencies with fragmented tools that require too many taps or unreliable cellular connections.',
            'The mission of SafeHer is to replace frantic panic with calm, effortless confidence. The product synthesizes instant SOS triggers, real-time geolocation streaming to trusted circles, and route risk awareness into an accessible, unburdened mobile interface.',
          ],
          keyTakeaway: 'In high-adrenaline situations, cognitive load increases by over 300%. Safety apps must function with zero friction and zero cognitive ambiguity.',
        },
        {
          number: '02',
          title: 'Problem',
          subtitle: 'Why existing safety apps fail during real emergencies',
          content: [
            'Through heuristic evaluation of existing safety solutions, three systemic failure points became evident:',
          ],
          bulletPoints: [
            'Friction-heavy emergency flows: Existing apps required unlocking the phone, opening the app, finding a tiny red button, and confirming a dialog prompt — taking over 12 seconds.',
            'Overwhelming anxiety-inducing visual language: Aggressive strobe warnings, jarring alarm icons, and chaotic visual noise heighten panic instead of projecting reassurance.',
            'Lack of passive contextual protection: Most apps only help after an incident occurs, rather than offering discreet check-ins, automated route deviation alerts, or silent monitoring.',
          ],
          keyTakeaway: 'The core challenge was balancing maximum urgency (one-touch action) with discreet day-to-day utility (silent commute companion).',
        },
        {
          number: '03',
          title: 'Research',
          subtitle: 'Empathetic interviews with 18 daily female commuters',
          content: [
            'To ground the design in lived experiences, I conducted qualitative semi-structured interviews with 18 women aged 19–35 across college students, evening-shift corporate workers, and frequent solo travelers.',
            'Key inquiry areas focused on commuting habits, perceived safety thresholds, smartphone handling when feeling unsafe, and trust in automated emergency dispatches.',
          ],
          metrics: [
            { label: 'Interview Participants', value: '18' },
            { label: 'Felt Unsafe Commuting Alone', value: '89%' },
            { label: 'Found Existing SOS Apps Too Slow', value: '94%' },
            { label: 'Preferred Silent / Discreet Alerts', value: '78%' },
          ],
          image: '/assets/safeher-detail1.png',
          imageCaption: 'Affinity mapping and synthesis of commuter stress patterns during transit journeys.',
        },
        {
          number: '04',
          title: 'Insights',
          subtitle: 'Synthesizing user mental models & core personas',
          content: [
            'From the research data, three dominant user archetypes emerged, centering on our primary persona: Ananya (23, junior analyst commuting late by metro and auto-rickshaws).',
            'Her primary need: "I want my mother or roommate to know I am moving safely without having to constantly text them every 5 minutes, but if I feel followed, I need one touch to alert them silently without drawing attention."',
          ],
          bulletPoints: [
            'Insight 1 — The Power of Muscle Memory: When scared, users hold their phone tightly in one hand. Primary emergency actions must live in the natural thumb-sweep zone.',
            'Insight 2 — Stealth vs. Audible SOS: Different situations demand distinct responses. Walking past an aggressive group requires a silent location broadcast; an actual physical threat requires loud alarm determent.',
            'Insight 3 — Calm Visuals Foster Trust: Soft soothing hues, clean micro-copy, and grounded typography reduce heart rates while keeping instructions crisp.',
          ],
          keyTakeaway: 'Discretion is safety: Drawing unwanted attention to oneself by fiddling with a loud phone often escalates danger.',
        },
        {
          number: '05',
          title: 'Ideation',
          subtitle: 'Information architecture and dual-mode emergency matrix',
          content: [
            'I structured the information architecture around two primary states: Passive Journey Mode (discreet live track, trusted bubble, safe zones) and Active Incident Mode (rapid SOS, auto-record audio, police dispatch, fake incoming call deterrent).',
            'The core breakthrough was a tactile "Press & Hold 2-Second Safety Ring" preventing accidental pocket triggers while providing haptic confirmation without looking at the screen.',
          ],
          bulletPoints: [
            'Tactile SOS Button: Accessible immediately upon app launch; activates silent beacon with haptic vibration.',
            'SafeRoute Companion: Color-coded transit safety ratings based on street lighting, crowd density, and verified pedestrian reviews.',
            'Fake Call Escape: Discreetly simulate an urgent phone call to excuse oneself from uncomfortable social encounters.',
          ],
        },
        {
          number: '06',
          title: 'Wireframes',
          subtitle: 'Iterative low-fidelity sketches to thumb-friendly layouts',
          content: [
            'I mapped out wireframes across 24 screens, testing single-handed ergonomic reachability. During paper testing, users struggled to reach top-right action buttons while walking hurriedly, so all critical triggers were moved to the bottom third of the viewport.',
          ],
          image: '/assets/safeher-detail2.png',
          imageCaption: 'Low-fidelity architectural wireframes focusing on thumb ergonomics and high-contrast emergency typography.',
          keyTakeaway: 'Testing wireframes in a walking scenario revealed physical touch inaccuracies that never appear when seated at a desk.',
        },
        {
          number: '07',
          title: 'UI Design',
          subtitle: 'Reassuring aesthetics, accessible contrast, and token hierarchy',
          content: [
            'For the visual system, I avoided harsh alarm reds as the primary canvas color. Instead, I paired deep comforting midnight tones and soft warm porcelain with a high-intent coral accent reserved strictly for critical alerts.',
            'Typography relies on clean geometric sans with wide optical tracking for emergency micro-copy, ensuring effortless legibility under shaking hands or dim streetlights.',
          ],
          bulletPoints: [
            'Accessible Color Contrast: All emergency text maintains a minimum 7:1 WCAG AAA contrast ratio.',
            'Atomic Component System: Modular cards for trusted contacts, real-time map beacons, and quick action tiles.',
            'Haptic Feedback Patterns: Unique tactile vibrations for armed state, disarmed state, and SOS broadcast.',
          ],
          image: '/assets/safeher-detail3.png',
          imageCaption: 'High-fidelity UI screens: Live journey tracking, instant emergency hub, and trusted contact communication.',
        },
        {
          number: '08',
          title: 'Prototype',
          subtitle: 'Interactive micro-interactions & tactile flow validation',
          content: [
            'Built an interactive prototype in Figma testing the end-to-end emergency activation loop. Tested with 8 participants who performed timed tasks simulating an escalating encounter.',
            'The interactive test measured time-to-first-SOS-signal, success rate of silent cancellation via biometric confirmation, and clarity of the live GPS breadcrumb.',
          ],
          metrics: [
            { label: 'Time to Trigger SOS', value: '2.4s (vs 12.8s baseline)' },
            { label: 'Accidental Trigger Rate', value: '0 in 40 trials' },
            { label: 'Task Completion Rate', value: 'Full Completion' },
          ],
        },
        {
          number: '09',
          title: 'Outcome',
          subtitle: 'Validation results & user feedback',
          content: [
            'Participants expressed an immediate psychological shift when testing SafeHer compared to existing solutions: "It doesn\'t make me feel constantly paranoid; it feels like having a loyal friend walking beside me."',
            'The project demonstrated that compassionate UX design can genuinely improve quality of life and subjective feelings of safety for vulnerable urban commuters.',
          ],
          keyTakeaway: 'Good UX is empathetic UX: Anticipating physical stress states creates products that genuinely protect human dignity.',
        },
        {
          number: '10',
          title: 'Learnings',
          subtitle: 'Reflections on designing for high-stakes human contexts',
          content: [
            'Designing SafeHer taught me how to strip away decorative vanity in favor of pure operational clarity. Every pixel, margin, and tap target had to justify its existence under real physical duress.',
            'If I were to take this further, I would conduct field testing in low-bandwidth network zones and explore smartwatch companion widgets for tap-free gesture triggers.',
          ],
          keyTakeaway: 'The best safety design is the one you hope never to need, but will work flawlessly in the split second you do.',
        },
      ],
      galleryImages: [
        { url: '/assets/safeher-cover.png', caption: 'SafeHer: Core interface and live journey tracking' },
        { url: '/assets/safeher-detail1.png', caption: 'Research synthesis and persona pain-point mapping' },
        { url: '/assets/safeher-detail2.png', caption: 'Wireframes and thumb-zone ergonomic architecture' },
        { url: '/assets/safeher-detail3.png', caption: 'Design system components and interactive states' },
      ],
    },
  },
  {
    id: 'smart-canteen',
    title: 'Smart Canteen Experience',
    tagline: 'Transforming campus dining from chaos to convenience.',
    summary: 'A user-focused campus canteen mobile ordering experience engineered to eliminate 25-minute lunchtime rush queues, streamline kitchen dispatch, and personalize student dining.',
    category: 'Campus UX',
    role: 'Product Designer (Research, UX & UI)',
    timeline: '6 Weeks · 2025',
    team: 'Solo Designer in collaboration with campus vendor staff',
    tools: ['Figma', 'Miro', 'Contextual Inquiry', 'Prototyping'],
    year: '2025',
    coverImage: '/assets/smart-canteen.png',
    featured: false,
    caseStudy: {
      heroQuote: 'When lunchtime is only 30 minutes, spending 22 minutes stuck in a noisy line is a design failure waiting for a human solution.',
      sections: [
        {
          number: '01',
          title: 'Overview',
          subtitle: 'The campus lunch rush bottleneck',
          content: [
            'University students and faculty face a tight 30–45 minute midday lunch break. At peak times, hundreds of students converge simultaneously on the campus canteen, resulting in overwhelming physical crowding, order mix-ups, and skipped meals.',
            'Smart Canteen is an end-to-end mobile ordering and pickup ecosystem designed specifically for the pace and budget of campus life.',
          ],
        },
        {
          number: '02',
          title: 'Problem',
          subtitle: 'Chaos at the counter',
          content: [
            'Field observations revealed that the canteen was operating under an outdated paper-token system. Students waited in line 1 to buy a paper coupon, then queued at line 2 to submit it to the kitchen counter, and stood crowded around line 3 waiting for their number to be shouted.',
          ],
          bulletPoints: [
            'Average wait time: 22.4 minutes for a meal with an 8-minute preparation cycle.',
            'Kitchen staff confusion: 15% error rate during rush hours due to smeared handwritten tokens.',
            'Unpredictable item stock: Students frequently queued for 15 minutes only to find their preferred dish was sold out.',
          ],
        },
        {
          number: '03',
          title: 'Research',
          subtitle: 'Shadowing canteen queues & interviewing 24 students and 3 cooks',
          content: [
            'I spent five consecutive lunch shifts conducting contextual inquiry at the main campus dining hall, documenting queue progression rates, noise levels, and student emotional states.',
            'Interviews with kitchen staff revealed they were overwhelmed not by cooking, but by constant verbal inquiries about order status ("Is number 42 ready yet?").',
          ],
          metrics: [
            { label: 'Students Shadowed', value: '120+' },
            { label: 'Indepth Interviews', value: '24' },
            { label: 'Peak Hour Queue Time', value: '22.4 min' },
          ],
        },
        {
          number: '04',
          title: 'Insights',
          subtitle: 'Key architectural pillars for frictionless dining',
          content: [
            'Insight 1 — Scheduled Batch Ordering: Students have predictable class schedules. Allowing pre-ordering 15–30 minutes before class ends dramatically flattens the kitchen peak surge.',
            'Insight 2 — Glanceable Live Preparation Status: A simple 3-stage visual progress ring (Received → Cooking → Ready at Counter 2) eliminates counter crowding completely.',
            'Insight 3 — Quick Reorder & Student Favorites: 65% of students order the exact same breakfast or lunch combination Monday through Friday.',
          ],
        },
        {
          number: '05',
          title: 'Ideation',
          subtitle: 'Mapping the digital pickup experience',
          content: [
            'I conceptualized a streamlined 3-tap order flow: Select Favorite / Today\'s Special → Choose Pickup Slot (e.g., 1:15 PM) → Tap to Pay with Student Wallet / UPI.',
            'On the kitchen side, a companion tablet view groups identical orders (e.g., "Prepare 6 Masala Dosas together") rather than handling tickets one by one.',
          ],
        },
        {
          number: '06',
          title: 'Wireframes',
          subtitle: 'Rapid iterative card-sorting and wireframing',
          content: [
            'Organized the canteen menu using quick dietary filters (Vegetarian, High-Protein, Under 50₹, Ready in 5 Mins) rather than an endless generic text list.',
            'Designed a prominent persistent status pill that appears across all screens when an active order is being prepared.',
          ],
        },
        {
          number: '07',
          title: 'UI Design',
          subtitle: 'Warm appetizing visual language with high contrast',
          content: [
            'Selected a palette of rich warm saffron accents paired with clean neutral stone backgrounds, creating a welcoming, food-centric experience without visual clutter.',
            'Implemented oversized quantity counters and prominent dietary indicators (Veg/Non-Veg/Vegan) compliant with food labeling conventions.',
          ],
        },
        {
          number: '08',
          title: 'Prototype',
          subtitle: 'Validating end-to-end checkout with student testers',
          content: [
            'Tested a high-fidelity Figma prototype with 12 students against simulated time limits. Average checkout time dropped from over 3 minutes on benchmark apps to just 38 seconds on Smart Canteen.',
          ],
          metrics: [
            { label: 'Average Checkout Time', value: '38s' },
            { label: 'Usability Score (SUS)', value: '88/100' },
            { label: 'Pickup Satisfaction Rate', value: '96%' },
          ],
        },
        {
          number: '09',
          title: 'Outcome',
          subtitle: 'Tangible impact on campus wellbeing',
          content: [
            'In simulated deployment tests, peak counter crowding was dramatically reduced, freeing students to actually sit down, eat mindfully, and socialize during their breaks.',
            'Kitchen staff reported vastly reduced cognitive stress thanks to structured digital dispatch queues.',
          ],
        },
        {
          number: '10',
          title: 'Learnings',
          subtitle: 'Service design touches both sides of the counter',
          content: [
            'This project proved that true UX encompasses the entire service ecosystem. Designing a beautiful student app would have failed if the kitchen staff had not been given an equally straightforward dispatch tool.',
          ],
        },
      ],
      galleryImages: [
        { url: '/assets/smart-canteen.png', caption: 'Smart Canteen: Rapid ordering & live pickup tracker' },
      ],
    },
  },
  {
    id: 'blinkit-kids',
    title: 'Blinkit for Kids',
    tagline: 'Playful discovery meets responsible quick-commerce.',
    summary: 'A delightful, kid-friendly extension of Blinkit quick-commerce designed to make school supplies, healthy snacks, and creative kits engaging for children to discover while keeping parents in total financial control.',
    category: 'Quick-Commerce',
    role: 'UI/UX & Interaction Designer',
    timeline: '5 Weeks · 2025',
    team: 'Concept Project & Behavioral Exploration',
    tools: ['Figma', 'FigJam', 'Framer Motion', 'Micro-interactions'],
    year: '2025',
    coverImage: '/assets/blinkit-kids.png',
    featured: false,
    caseStudy: {
      heroQuote: 'Quick-commerce shouldn’t just be about transactional speed — for kids and families, it can be a playground of curiosity, creativity, and micro-learning.',
      sections: [
        {
          number: '01',
          title: 'Overview',
          subtitle: 'Reimagining fast delivery for young learners and parents',
          content: [
            'Modern quick-commerce apps are densely packed, hyper-commercialized, and anxiety-inducing — filled with aggressive countdown timers and adult products.',
            'Blinkit for Kids reimagines the quick delivery model through the eyes of an 8–14 year old student who needs urgent chart paper for a school science project or wants to pick out healthy afternoon snacks with parental guidance.',
          ],
        },
        {
          number: '02',
          title: 'Problem',
          subtitle: 'The dilemma of children using parent accounts',
          content: [
            'Parents often hand their phones to children to pick school stationery or snacks. However, this regularly leads to unintended purchases, exposure to irrelevant promotional banners, and chaotic cart additions.',
          ],
          bulletPoints: [
            'Children struggle with complex commercial categories and confusing product descriptions.',
            'Parents have zero granular spending controls or safety review mechanisms before instantaneous 10-minute dispatch.',
            'Lack of educational engagement: Traditional stores miss the opportunity to teach budgeting or mindful snacking.',
          ],
        },
        {
          number: '03',
          title: 'Research',
          subtitle: 'Observing parent-child co-shopping dynamics',
          content: [
            'Conducted user sessions with 10 parent-child pairs. Observed how kids navigate visual iconography versus reading long product specifications, and what triggers parental friction during digital shopping.',
          ],
          metrics: [
            { label: 'Parent-Child Pairs Tested', value: '10' },
            { label: 'Kids Wanting Visual Guidance', value: '9 of 10' },
            { label: 'Parents Demanding Approval Gate', value: '10 of 10' },
          ],
        },
        {
          number: '04',
          title: 'Insights',
          subtitle: 'Curiosity on the front, guardrails in the back',
          content: [
            'The core design thesis: Split the interaction into two complementary lenses.',
            'The Child Mode: Playful, illustrated categories (Science Lab, Art Box, Tasty Bites), gamified badges, and friendly character assistants.',
            'The Parent Gate: A seamless PIN / biometric approval screen where parents review items, approve spending caps, and release the order.',
          ],
        },
        {
          number: '05',
          title: 'Ideation',
          subtitle: 'Gamifying discovery and budgeting',
          content: [
            'Introduced a "Wish Basket" mechanic where children can assemble their ideas without directly debiting money. Parents receive a gentle ping on their phone: "Aarav has submitted a school craft basket for 140₹. Approve?"',
          ],
        },
        {
          number: '06',
          title: 'Wireframes',
          subtitle: 'Designing chunky, tactile touch targets for small fingers',
          content: [
            'Created large visual cards with 56px minimum touch targets, generous spacing, and simplified typographic hierarchy that young readers can decode effortlessly.',
          ],
        },
        {
          number: '07',
          title: 'UI Design',
          subtitle: 'Vibrant, warm, and inviting without feeling patronizing',
          content: [
            'Crafted a cheerful, high-contrast palette of sunny yellow, soft sky blue, and fresh mint. Replaced aggressive marketing banners with delightful illustrated story cards.',
            'Ensured all animations are lighthearted, springy, and responsive to encourage playful interaction.',
          ],
        },
        {
          number: '08',
          title: 'Prototype',
          subtitle: 'Usability testing with children and parents',
          content: [
            'Kids immediately understood the visual categorizations, finding required art items 45% faster than on conventional quick-commerce apps. Parents appreciated the absence of junk food promotions.',
          ],
        },
        {
          number: '09',
          title: 'Outcome',
          subtitle: 'A win-win for family digital literacy',
          content: [
            'The prototype demonstrated how quick commerce can transition from a transactional chore to an educational, collaborative family activity that builds early financial responsibility.',
          ],
        },
        {
          number: '10',
          title: 'Learnings',
          subtitle: 'Designing for dual user personas simultaneously',
          content: [
            'Balancing the distinct emotional and functional needs of children (joy, autonomy) and parents (security, thriftiness) proved to be one of the most rewarding UX challenges of my design journey.',
          ],
        },
      ],
      galleryImages: [
        { url: '/assets/blinkit-kids.png', caption: 'Blinkit for Kids: Playful discovery & child-safe checkout gate' },
      ],
    },
  },
  {
    id: 'edible-cups',
    title: 'Edible Cups',
    tagline: 'Rethinking single-use waste into a circular sensory experience.',
    summary: 'A sustainable product & behavioral design initiative that reimagines disposable coffee culture by combining fully biodegradable edible cups with an interactive eco-tracking habit companion.',
    category: 'Sustainable Product',
    role: 'Product & Experience Designer',
    timeline: '4 Weeks · 2025',
    team: 'Material Exploration & UX Case Study',
    tools: ['Figma', 'FigJam', 'Physical Prototyping', 'Journey Mapping'],
    year: '2025',
    coverImage: '/assets/edible-cups.png',
    featured: false,
    caseStudy: {
      heroQuote: 'Sustainability fails when it demands sacrifice; it triumphs when it introduces delight and tangible personal reward.',
      sections: [
        {
          number: '01',
          title: 'Overview',
          subtitle: 'The 500-billion disposable cup crisis',
          content: [
            'Globally, over 500 billion single-use coffee cups end up in landfills annually. Even paper cups are lined with plastic polyethylene, making them virtually non-recyclable in municipal systems.',
            'Edible Cups bridges material innovation (crisp grain-based edible wafer cups) with a digital companion app that visualizes personal plastic diversion and rewards cafes and coffee lovers.',
          ],
        },
        {
          number: '02',
          title: 'Problem',
          subtitle: 'Why sustainable habits fail to stick',
          content: [
            'Consumers frequently intend to be eco-friendly, but carrying bulky reusable thermoses everywhere creates daily inconvenience.',
            'Furthermore, people receive zero tangible feedback or recognition for making sustainable lifestyle choices at the register.',
          ],
          bulletPoints: [
            'Inconvenience barrier: 84% of surveyed coffee drinkers admit leaving their reusable mugs at home.',
            'Invisible impact: Single-use disposal feels abstract; consumers never see the landfill pile they personally prevent.',
            'Lack of sensory joy: Paper cups get soggy and alter the taste of specialty coffees.',
          ],
        },
        {
          number: '03',
          title: 'Research',
          subtitle: 'Surveying 45 urban cafe visitors and interviewing 4 baristas',
          content: [
            'Mapped the daily morning coffee ritual: from entering the cafe to holding the warm cup and walking to the office.',
            'Discovered that consumers were genuinely excited about edible packaging (flavored with cinnamon, oats, and dark chocolate) as long as it maintained temperature for at least 40 minutes without leaking.',
          ],
          metrics: [
            { label: 'Cafe Patrons Surveyed', value: '45' },
            { label: 'Excited to Try Edible Packaging', value: '37 of 45' },
            { label: 'Demanded 30+ Min Leak Resistance', value: 'Universal Requirement' },
          ],
        },
        {
          number: '04',
          title: 'Insights',
          subtitle: 'From guilt-based messaging to positive habit loops',
          content: [
            'People tune out environmental guilt lectures. Instead, pairing the sensory treat of an edible biscuit cup with a delightful gamified streak counter turns sustainability into an aspirational daily badge.',
          ],
        },
        {
          number: '05',
          title: 'Ideation',
          subtitle: 'The scan-and-sip ecosystem',
          content: [
            'Designed a quick QR touchpoint on the cafe counter: Order your espresso in an Edible Cup → Scan the barista\'s wooden NFC block → Instantly log 1 cup saved → Unlock local cafe discounts.',
          ],
        },
        {
          number: '06',
          title: 'Wireframes',
          subtitle: 'Zero-clutter progress visualization',
          content: [
            'Created an intuitive tree-growth visualization in Figma where each cup saved blossoms a digital leaf into a vibrant community forest.',
          ],
        },
        {
          number: '07',
          title: 'UI Design',
          subtitle: 'Earth-inspired natural tones and tactile typography',
          content: [
            'Employed warm terracotta, toasted barley tones, and deep moss forest green. Used organic curve radii and soft lighting to evoke natural textures.',
          ],
        },
        {
          number: '08',
          title: 'Prototype',
          subtitle: 'Testing micro-interactions and tactile feedback',
          content: [
            'Created an interactive Framer prototype demonstrating the quick 4-second scan flow and the animated eco-impact certificate shareable to social media.',
          ],
        },
        {
          number: '09',
          title: 'Outcome',
          subtitle: 'Sparking conversation on circular product design',
          content: [
            'The project was showcased among peers and faculty as an exemplary model of how digital product design can amplify physical sustainability innovations.',
          ],
        },
        {
          number: '10',
          title: 'Learnings',
          subtitle: 'The intersection of physical artifacts and digital UX',
          content: [
            'Designing for physical touchpoints taught me how crucial tactile expectations (texture, scent, durability) are to digital interaction architecture.',
          ],
        },
      ],
      galleryImages: [
        { url: '/assets/edible-cups.png', caption: 'Edible Cups: Sustainable product packaging & habit app' },
      ],
    },
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Research',
    subtitle: 'Listening, observing, and uncovering root needs',
    description: 'Every great solution begins by setting assumptions aside. I immerse myself in user environments, conducting contextual inquiries, deep semi-structured interviews, and competitive audits to discover the hidden frictions people rarely articulate.',
    methods: ['User Interviews', 'Contextual Inquiry', 'Affinity Mapping', 'Competitive Heuristic Audits', 'Empathy Maps'],
    deliverables: ['Interview Transcripts & Quotes', 'Pain-point Heatmaps', 'Research Syntheses', 'Archetype Maps'],
    quote: '"To design something truly intuitive, you must first understand the mental model people already carry in their minds."',
  },
  {
    step: '02',
    title: 'Define',
    subtitle: 'Framing problems with surgical clarity',
    description: 'Transforming chaotic raw research into structured problem statements. I map out user journeys, identify high-friction choke points, and write actionable "How Might We" challenges that rally the design focus around user value.',
    methods: ['Problem Framing', 'How Might We (HMW) Statements', 'User Journey Mapping', 'Persona Synthesis', 'Success Metrics Definition'],
    deliverables: ['Target Personas', 'As-Is vs To-Be Journey Maps', 'Prioritized Problem Statements', 'Project Scope Canvas'],
    quote: '"A problem well defined is a problem half-solved. Clarity at this stage saves weeks of redundant iterations later."',
  },
  {
    step: '03',
    title: 'Ideate',
    subtitle: 'Exploring divergent concepts & architectures',
    description: 'I diverge broadly through fast sketches, card sorting, and information architecture mapping. By evaluating multiple conceptual paths before touching high-fidelity pixels, I ensure the structural foundation is rock-solid.',
    methods: ['Information Architecture', 'Card Sorting', 'User Flow Diagramming', 'Low-Fidelity Paper Sketching', 'Crazy Eights'],
    deliverables: ['Information Architecture Diagrams', 'End-to-End User Flow Charts', 'Low-Fi Concept Wireframes', 'Feature Matrices'],
    quote: '"Ideation is about generating wide possibilities without ego, then pruning relentlessly with user intent as the guide."',
  },
  {
    step: '04',
    title: 'Design',
    subtitle: 'Crafting accessible, intentional UI systems',
    description: 'This is where structure meets visual poetry. I build rigorous component design systems, establish harmonious typographic scales, and obsess over spatial rhythm, contrast ratios (WCAG AA/AAA), and visual hierarchy.',
    methods: ['Design Systems & Token Architecture', 'Typographic Hierarchy & Grid Math', 'High-Fidelity UI Screens', 'Accessibility & Contrast Audits'],
    deliverables: ['Figma Design System Components', 'Color & Spacing Token Libraries', 'Pixel-Perfect Screen Mockups', 'Responsive Layout Breakpoints'],
    quote: '"Visual hierarchy is not decoration — it is the silent conductor that directs the user’s gaze effortlessly across the interface."',
  },
  {
    step: '05',
    title: 'Prototype',
    subtitle: 'Breathing life into tactile micro-interactions',
    description: 'Static mockups lie; prototypes tell the truth. I build realistic, interactive prototypes with realistic transitions, tactile haptic cues, and thoughtful motion timing (150–300ms) to simulate real digital product feel.',
    methods: ['Interactive Prototyping (Figma / Framer)', 'Motion Choreography & Easing Curves', 'Component State Transitions', 'Edge-Case Simulations'],
    deliverables: ['Clickable High-Fidelity Prototypes', 'Motion Spec Sheets', 'Component State Variants (Hover, Active, Focus, Error)'],
    quote: '"Motion in product design is an affordance. It tells the user where they came from and where they are going."',
  },
  {
    step: '06',
    title: 'Test',
    subtitle: 'Validating with real people & refining details',
    description: 'Putting interactive prototypes into users’ hands and watching where they hesitate. I conduct task-based usability evaluations, calculate System Usability Scale (SUS) scores, and iterate with humility until the experience feels second nature.',
    methods: ['Task-Based Usability Testing', 'Think-Aloud Protocols', 'System Usability Scale (SUS)', 'Cognitive Walkthroughs', 'Rapid Iteration Loops'],
    deliverables: ['Usability Test Reports', 'Task Completion Rate Metrics', 'Friction Point Catalog', 'Post-Test Refined Mockups'],
    quote: '"Testing isn\'t a final exam; it’s an ongoing conversation with the humans who will ultimately rely on your work."',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'UI Design & Visual Systems',
    summary: 'Crafting pixel-precise, aesthetically distinguished digital interfaces with robust component libraries, typographic rigor, and intentional motion design.',
    skills: ['Visual Design', 'Design Systems', 'Interactive Prototyping'],
  },
  {
    number: '02',
    title: 'UX Research & Strategy',
    summary: 'Unearthing actionable human truths through contextual interviews, usability testing, and journey mapping to transform ambiguous problems into effortless solutions.',
    skills: ['User Interviews', 'Wireframing', 'Usability Testing'],
  },
  {
    number: '03',
    title: 'Mobile & Web App Design',
    summary: 'Designing end-to-end multi-platform digital products built for thumb ergonomics, swift task completion, and responsive desktop-to-mobile harmony.',
    skills: ['Responsive Design', 'User Flows', 'Interaction Design'],
  },
];

export const BEYOND_SCREENS: BeyondScreenItem[] = [
  {
    id: 'ahmedabad-walk',
    title: 'Ahmedabad Heritage Walk',
    location: 'Old Ahmedabad, Gujarat',
    date: 'May 5, 2025',
    image: '/assets/ahmedabad-walk.jpeg',
    tag: 'Spatial Architecture & Movement',
    summary: 'Walking through the centuries-old pols of historic Ahmedabad, observing how traditional urban architecture organically guides human interaction, natural cooling, and community privacy.',
    reflection: 'Centuries before "wayfinding UX" was coined as a digital discipline, Ahmedabad’s wooden otlas (raised verandas), carved chabutras (bird towers), and narrow winding shaded pols directed human movement with masterly intuition. Seeing how physical space naturally decelerates rushing pedestrians and encourages spontaneous micro-conversations is a profound lesson in how software navigation can gently pace user attention rather than overwhelm it.',
  },
  {
    id: 'dandi-kutir',
    title: 'Dandi Kutir Museum',
    location: 'Gandhinagar, Gujarat',
    date: 'Sep 12, 2026',
    image: '/assets/dandi-kutir.jpeg',
    tag: 'Spatial Storytelling & Narrative',
    summary: 'Investigating how modern experiential museums combine monumental physical architecture, tactile lighting, and audio-visual progression to tell an emotional historical story beyond flat screens.',
    reflection: 'Dandi Kutir, shaped like a colossal salt mound, is a masterclass in experiential pacing. The museum moves visitors through high-contrast sensory zones — from oppressive darkness to brilliant open light — guiding visitors through Mahatma Gandhi\'s journey. It reaffirmed my conviction that interface design is narrative storytelling: every screen is an act in a play where visual weight, sound, and lighting evoke genuine emotional resonance.',
  },
  {
    id: 'msu-baroda',
    title: 'Maharaja Sayajirao University',
    location: 'Faculty of Fine Arts, Vadodara',
    date: 'Jun 16, 2025',
    image: '/assets/msu-baroda.jpeg',
    tag: 'Visual Form, Texture & Materiality',
    summary: 'Immersing in the annual student art exhibition at MSU Baroda, dissecting how contemporary young artists play with organic form, raw pigment chemistry, and narrative abstraction.',
    reflection: 'Spending hours among student sculptures, oil studies, and printmaking installations at MSU Baroda grounded my digital sensibilities in tactile materiality. In digital design, we often get trapped in flat vectors and generic hex codes. Looking closely at real physical brushstrokes and canvas tension reminded me of the value of organic warmth, subtle imperfections, and deliberate breathing room in digital typography.',
  },
];
