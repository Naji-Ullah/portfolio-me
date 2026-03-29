export const PROJECTS = [
  {
    id: "lamppost",
    index: "01",
    domain: "SaaS",
    title: "Lamppost.io",
    role: "Front-end Engineer",
    tags: ["React.js", "Redux Saga", "Performance"],
    short: "Financial data platform with school org-chart tooling and optimised API pipelines.",
    bullets: [
      "Worked with tools like Redux Saga to manage asynchronous operations & API calls.",
      "Built and integrated complex user features such as a school organization chart, helping represent hierarchical structures.",
      "Collaborated closely with backend and product teams to streamline feature flow, improving data handling across the app.",
      "Optimised various features in frontend — reduced extra API calls, enhancing the flow, loading time and Lighthouse scores.",
      "Refactored components to follow the DRY principle, creating pure components for better maintainability.",
    ],
  },
  {
    id: "blendgenai",
    index: "02",
    domain: "ARTIFICIAL INTELLIGENCE",
    title: "BlendGenAI",
    role: "Full Stack Engineer",
    tags: ["React.js", "Three.js", "Meshy AI", "OpenAI"],
    short: "AI-powered 3D model generation platform with interactive viewer and prompt refinement.",
    bullets: [
      "Developed the complete React-based frontend for an AI-powered 3D model generation platform.",
      "Integrated Three.js to build an interactive 3D model viewer on the dashboard.",
      "Implemented Meshy AI API for model generation, enhancement, and texture application, and integrated OpenAI API for prompt refinement to improve model quality.",
      "Ensured clean component architecture, reusable UI patterns, and optimized frontend performance across devices.",
    ],
  },
  {
    id: "scimedics",
    index: "03",
    domain: "HEALTH TECH",
    title: "SciMedics",
    role: "Backend Engineer",
    tags: ["Next.js", "Django", "DRF", "PostgreSQL"],
    short: "Medical SaaS platform for survey workflows, automated report generation and secure API design.",
    bullets: [
      "Contributed to a medical SaaS platform built with Next.js and Django, focusing on backend development and API integrations.",
      "Implemented survey workflows and automated report generation using Django.",
      "Worked with PostgreSQL and utilized Django REST Framework (DRF) to design scalable and secure APIs.",
      "Integrated multiple internal tools and libraries, improving data flow, validation, and backend processing pipelines.",
    ],
  },
  {
    id: "marketsmart",
    index: "04",
    domain: "Business",
    title: "MarketSmart - Pursuit Data",
    role: "Full Stack Engineer",
    tags: ["Next.js", "Firebase", "Stripe", "Algolia"],
    short: "Scalable data platform scraping business leads from five sources with real-time Firebase storage.",
    bullets: [
      "Built a scalable Next.js + Firebase platform that scraped business data from five different websites and stored it in Firestore for real-time access.",
      "Integrated multiple Firebase Extensions including Stripe billing, Algolia search, and email automation via SendGrid.",
      "Developed role-based access and authentication using customClaims to secure user data.",
      "Participated in code reviews, sprint planning to maintain code quality and team productivity.",
    ],
  },
  {
    id: "fencedeck",
    index: "05",
    domain: "Business",
    title: "Fence & Deck Connection",
    role: "Full Stack Engineer",
    tags: ["React", "Firebase", "Salesforce", "Square"],
    short: "Quotation and workflow platform integrating Salesforce CRM, automated reports and Square payments.",
    bullets: [
      "Contributed to a React + Firebase application, enhancing workflows for quotations.",
      "Worked with technologies like Salesforce CRM & streamlined the opp and quotes related data.",
      "Integrated Puppeteer for automated report generation.",
      "Implemented Firebase Cloud Functions for data synchronization across modules.",
      "Implemented Square ACH direct and card payments using node functions.",
      "Collaborated with end users to refine requirements and deliver highly responsive, production-ready features.",
    ],
  },
  {
    id: "ryanhomes",
    index: "06",
    domain: "Business",
    title: "Ryan Homes Integrations",
    role: "Full Stack Engineer",
    tags: ["React", "Firebase", "Node.js", "Salesforce"],
    short: "Quote management system with Ryan Home API integration and optimized customer dashboards.",
    bullets: [
      "Contributed to a React + Firebase application, enhancing workflows for quotes management.",
      "Made business logic to create Opps using Ryan Home API in Node function for Opp creations.",
      "Optimized UI flow, and ensured data accuracy across dashboards and customer interactions.",
      "Collaborated with team to refine requirements and deliver highly responsive, production-ready features.",
      "Interacted with tools like Salesforce and gained hands-on experience with customer relation models & CRMs.",
    ],
  },
  {
    id: "angiesleads",
    index: "07",
    domain: "AUTOMATION",
    title: "Angie's Lead Integrations",
    role: "Automation Workflow",
    tags: ["Zapier", "Salesforce", "Webhooks", "API"],
    short: "Multi-path lead integration system between Angi and Salesforce with real-time webhook processing.",
    bullets: [
      "Architected and deployed a multi-path lead integration system between Angi (HomeAdvisor) and Salesforce using Zapier, handling real-time Webhook data ingestion.",
      "Engineered data normalization logic using custom lookup tables to ensure compatibility with strict Salesforce picklist constraints.",
      "Implemented security protocols by configuring custom header authentication to secure endpoints and prevent unauthorized data injection.",
    ],
  },
];

export const SKILLS = [
  {
    label: "Frontend",
    items: [
      "JavaScript",
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit / Redux Saga",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    label: "Backend",
    items: [
      "Django",
      "DRF",
      "Firebase (Firestore / Auth / Functions)",
      "RESTful APIs",
      "PostgreSQL",
      "Serverless Architecture",
    ],
  },
  {
    label: "DevOps & Tools",
    items: [
      "Git / GitHub",
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
  role: "Associate Software Engineer",
  period: "Feb 2025 — Present",
  bullets: [
    "Built modular, responsive frontends using React and Next.js.",
    "Implemented role-based routing and scalable state management with Redux Saga & Redux Toolkit.",
    "Developed RESTful APIs and backend logic using Django and DRF.",
    "Integrated third-party APIs — AI tools, Stripe payments, email automation.",
    "Worked with Firebase services including Firestore, Auth and Cloud Functions.",
    "Improved performance by optimising API calls and state handling.",
    "Collaborated in agile sprints — code reviews, sprint planning, cross-functional delivery.",
  ],
};

export const EDUCATION = {
  degree: "BS Software Engineering",
  school: "COMSATS University Lahore",
  period: "2024 - Current"
};

export const NAV_LINKS = ["Skills", "Projects", "Experience", "Contact"];
