export const PERSON = {
  name: "Naji Ullah",
  role: "Software engineer. Builds things, then writes them down.",
  location: "Lahore, Pakistan",
  email: "najiu1836@gmail.com",
  site: "naji.codes",
  github: "https://github.com/Naji-Ullah",
  linkedin: "https://www.linkedin.com/in/naji-ullah-53222624b/",
};

export const PROJECTS = [
  {
    id: "lamppost",
    no: "Entry 01",
    domain: "Fintech",
    title: "Lamppost.io",
    role: "Front-end Engineer",
    tags: ["React", "Redux Saga", "Performance"],
    standfirst:
      "A financial data platform that needed to stop asking its own API the same question twice.",
    log: "I owned the school org-chart - a clear way to show who answers to whom - and then went hunting for everywhere the app double-asked the server. It was asking a lot. That kind of work is the most satisfying: nothing new on screen, everything quietly faster.",
    notes: [
      "Async flow on Redux Saga, kept legible.",
      "Built the org-chart from nothing.",
      "Trimmed redundant API calls; Lighthouse calmed down.",
      "Split big components into small honest ones.",
      "Sat close to backend and product so things lined up.",
    ],
  },
  {
    id: "blendgenai",
    no: "Entry 02",
    domain: "AI",
    title: "BlendGenAI",
    role: "Full-stack Engineer",
    tags: ["React", "Three.js", "Meshy AI", "OpenAI"],
    standfirst: "Type a sentence, get a 3D model you can spin around.",
    log: "I built the whole front end and the viewer you inspect models in. The quietly clever part was running people's vague prompts through OpenAI first, so the generator had a fighting chance before it tried to sculpt 'cool dragon thing'.",
    notes: [
      "Entire React front end.",
      "Three.js model viewer on the dashboard.",
      "Meshy AI for generate, enhance and texture.",
      "OpenAI prompt clean-up before generation.",
      "Smooth on phones, not just my laptop.",
    ],
  },
  {
    id: "scimedics",
    no: "Entry 03",
    domain: "Health",
    title: "SciMedics",
    role: "Backend Engineer",
    tags: ["Next.js", "Django", "DRF", "PostgreSQL"],
    standfirst:
      "A medical SaaS where the rules are strict and the data is not allowed to be wrong.",
    log: "I lived on the backend - survey workflows, the report generation, and APIs that had to be fast and appropriately paranoid. Health software is a good teacher. It does not forgive 'probably fine'.",
    notes: [
      "Survey workflows and report generation in Django.",
      "APIs on DRF over PostgreSQL.",
      "Access kept deliberately tight.",
      "Several internal tools onto one clean path.",
    ],
  },
  {
    id: "marketsmart",
    no: "Entry 04",
    domain: "Data",
    title: "MarketSmart - Pursuit Data",
    role: "Full-stack Engineer",
    tags: ["Next.js", "Firebase", "Stripe", "Algolia"],
    standfirst:
      "Pulled business leads off five different sites and kept them searchable the moment they landed.",
    log: "Scrapers feeding Firestore, billing on Stripe, search on Algolia, and auth that made sure people only ever saw their own pile. Five sources is four more than anyone hopes for. It mostly held.",
    notes: [
      "Next.js + Firebase, scraping five sources.",
      "Firebase Extensions: Stripe, Algolia, SendGrid.",
      "Role-based auth via custom claims.",
      "Code reviews and sprint planning, properly.",
    ],
  },
  {
    id: "fencedeck",
    no: "Entry 05",
    domain: "Operations",
    title: "Fence & Deck Connection",
    role: "Full-stack Engineer",
    tags: ["React", "Firebase", "Salesforce", "Square"],
    standfirst: "Quoting and workflow, glued to Salesforce, paid through Square.",
    log: "I kept quotes and opportunities in step with the CRM, automated the reports nobody wanted to make by hand, and wired up real money. Then I talked to the people actually using it, which changed more than the code did.",
    notes: [
      "Quoting workflows in React + Firebase.",
      "Quote and opportunity data synced with Salesforce.",
      "Puppeteer-generated reports.",
      "Cloud Functions keeping modules in sync.",
      "Square ACH and card payments via Node.",
    ],
  },
  {
    id: "ryanhomes",
    no: "Entry 06",
    domain: "Operations",
    title: "Ryan Homes Integrations",
    role: "Full-stack Engineer",
    tags: ["React", "Firebase", "Node.js", "Salesforce"],
    standfirst:
      "A quote system wired into the Ryan Homes API, with dashboards that finally agreed on the numbers.",
    log: "Most of this was getting two systems to tell the same story. I wrote the Node logic that creates opportunities through their API, then spent a good while making the dashboards stop contradicting each other.",
    notes: [
      "Quote-management workflows in React + Firebase.",
      "Node logic creating opportunities via the Ryan Homes API.",
      "Dashboards reconciled and trusted.",
      "Steady shipping with the team.",
      "Hands-on with Salesforce and CRM models.",
    ],
  },
  {
    id: "angiesleads",
    no: "Entry 07",
    domain: "Automation",
    title: "Angi Lead Integrations",
    role: "Automation",
    tags: ["Zapier", "Salesforce", "Webhooks", "API"],
    standfirst:
      "A bridge from Angi into Salesforce that took webhooks live and turned away anything malformed.",
    log: "No interface, just plumbing - multi-path lead routing on Zapier, normalised with lookup tables so it survived Salesforce's strict picklists, and locked down so the junk stayed out. Unglamorous, and very satisfying when it just runs.",
    notes: [
      "Multi-path lead pipeline, Angi → Salesforce, on Zapier.",
      "Real-time webhook ingestion.",
      "Lookup-table normalisation for strict picklists.",
      "Custom header auth on the endpoints.",
    ],
  },
];

export const INSTRUMENTS = [
  {
    label: "Frontend",
    note: "What the user actually touches.",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Redux Toolkit / Saga",
      "HTML & CSS",
      "Tailwind",
      "Material UI",
    ],
  },
  {
    label: "Backend",
    note: "Where the rules and the data live.",
    items: [
      "Django",
      "Django REST Framework",
      "Firebase - Firestore, Auth, Functions",
      "REST APIs",
      "PostgreSQL",
      "Serverless",
    ],
  },
  {
    label: "On the bench",
    note: "Everything that helps the other two ship.",
    items: [
      "Git & GitHub",
      "Docker",
      "AWS EC2",
      "Firebase Hosting",
      "Postman",
      "Salesforce",
      "Zapier",
    ],
  },
];

export const EXPERIENCE = {
  company: "Devflovv",
  role: "Software Engineer",
  period: "Feb 2025 - Present",
  log: [
    "I'm an software engineer at Devflovv. In practice that means building responsive front ends in React and Next.js, writing the Django and DRF that sit behind them, and integrating whatever third-party API the work needs - AI services, Stripe, email - usually after reading the docs so nobody else has to.",
    "I work across Firebase, Firestore, Auth, Cloud Functions - set up routing and state with Redux Toolkit and Saga, and spend a fair amount of time chasing performance problems, which are almost always a redundant API call wearing a disguise. The rest is the unglamorous part: reviews, planning, and showing up.",
  ],
};

export const EDUCATION = {
  degree: "BS Software Engineering",
  school: "COMSATS University, Lahore",
  period: "2024 - Present",
  aside: "Studying it by night, applying it by deadline.",
};

export const NAV_LINKS = [
  { label: "Logbook", id: "logbook" },
  { label: "Instruments", id: "instruments" },
  { label: "Time Served", id: "time" },
  { label: "Send Word", id: "contact" },
];

export const MARQUEE_ITEMS = [
  "React",
  "Next.js",
  "TypeScript",
  "Django",
  "Firebase",
  "Redux Saga",
  "Three.js",
  "Stripe",
  "AWS",
  "Salesforce",
  "PostgreSQL",
  "Zapier",
];
