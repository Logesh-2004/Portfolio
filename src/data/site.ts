// All home page content, taken from PORTFOLIO_PLAN.md.
// `null` means the plan doesn't have it yet; the page shows a [TODO: …] placeholder instead.
// Never fill these with invented numbers, dates or results.

export const profile = {
  name: 'Logesh V',
  role: 'AI & Data Analyst',
  valueStatement: 'I turn data and AI outputs into decisions, and automate the busywork around them.',
  links: {
    resume: '/Logesh_V_Resume.pdf',
    linkedin: 'https://www.linkedin.com/in/logeshv-ai',
    github: 'https://github.com/Logesh-2004' as string | null,
    email: 'logeshv44110v@gmail.com' as string | null,
  },
};

export const about = [
  'I started in mechatronics (Diploma, Nachimuthu Polytechnic College, 2023) and moved into AI & Data Science (B.Tech, Kumaraguru College of Technology, 2026).',
  "From June to October 2026 I was a data collector and blind rater for India's first agentic-commerce AI shopping benchmark, where I learned to judge AI output with rubrics and rater agreement.",
  'I lead with analysis and build automation to prove it. I am open to AI Business Analyst, AI Product Analyst, AI Research Analyst, Data Analyst and AI Automation Engineer roles.',
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  result: string | null;
  tags: string[];
  screenshot: string | null;
  caseStudy: string | null;
  status?: string;
};

export const projects: Project[] = [
  {
    slug: 'data-analysis-dashboard',
    title: 'Data analysis + dashboard',
    summary:
      'A public business dataset cleaned with SQL and pandas, 4–5 business questions answered, and a public dashboard with written recommendations.',
    result: null,
    tags: ['SQL', 'Python', 'pandas', 'Dashboard'],
    screenshot: null,
    caseStudy: null,
    status: 'In progress',
  },
  {
    slug: 'llm-evaluation',
    title: 'LLM evaluation case study',
    summary:
      "3–4 AI assistants compared on 30–50 questions, scored on a written rubric (accuracy, helpfulness, sources, safety) by two raters, with agreement measured by Cohen's kappa.",
    result: null,
    tags: ['LLM evaluation', 'Rubric design', "Cohen's kappa"],
    screenshot: null,
    caseStudy: null,
    status: 'In progress',
  },
  {
    slug: 'chat-automation-runner',
    title: 'Multi-assistant chat automation runner',
    summary:
      'Runs the same prompts across several AI chat apps through browser automation with a logged-in profile, saves the chat links, and works in batches.',
    result: null,
    tags: ['Python', 'Browser automation', 'Batching'],
    screenshot: null,
    caseStudy: null,
  },
  {
    slug: 'secure-ehr-qr',
    title: 'Secure EHR sharing with encrypted QR codes',
    summary:
      'Role-based access control with AES-encrypted QR codes for sharing health records across 3 user roles, with biometric consent validation. Demonstrated with dummy patient data only; presented at IconDeepCom 2026.',
    result: null,
    tags: ['Python', 'AES encryption', 'QR codes', 'ReactJS', 'Firebase'],
    screenshot: null,
    caseStudy: null,
  },
];

export type Job = {
  org: string;
  role: string | null;
  dates: string | null;
  points: string[];
  link: { label: string; href: string | null } | null;
};

// Newest first. Details from public/Logesh_V_Resume.pdf.
export const experience: Job[] = [
  {
    org: 'Quelinthos Technologies (Buy Through Words)',
    role: 'AI Data & Research Associate',
    dates: 'Jun–Oct 2026',
    points: [
      "Contributed to India's first agentic-commerce AI shopping benchmark, measuring ChatGPT, Claude, Gemini, Grok and Muse across 11 product verticals.",
      'Data collector and blind rater in the inter-rater reliability (IRR) process used to produce the benchmark’s reliability score.',
      'Manually checked every link the AIs returned: correct product page, a different page, or broken.',
    ],
    link: { label: 'Published benchmark', href: null },
  },
  {
    org: 'Kumaraguru College of Technology',
    role: 'Academic Performance Analytics Intern',
    dates: 'Nov 2025 – Apr 2026',
    points: [
      'Built a Python data pipeline (pandas, matplotlib) processing 500+ student records, automating report generation and cutting manual effort by ~70%.',
      'Built trend-extraction logic to flag at-risk student segments for faculty across 10+ departments.',
    ],
    link: null,
  },
  {
    org: 'Forge Innovations & Ventures',
    role: 'Graduate Innovation Engineer Trainee',
    dates: 'Aug 2024 – Mar 2025',
    points: [
      'Built a ROS2 autonomous tow-truck robot with LiDAR, improving manoeuvring accuracy by 25% with closed-loop PID control.',
      'Designed and validated 3+ rapid prototypes in Fusion 360 with 3D printing, cutting development cycle time by 30%.',
    ],
    link: null,
  },
];

export const research = {
  title: 'Emergency-Aware Secure Electronic Health Record Sharing Using Encrypted QR Codes' as string | null,
  venue: 'IconDeepCom 2026, 5th International Conference on Deep Sciences for Computing and Communications',
  host: 'SRM Institute of Science and Technology with Southern Taiwan University of Science & Technology',
  dates: '15–16 June 2026',
  coAuthors: 'N. Rajathi, Jeevanathithya A and Chandhiraleka M',
  pdf: null as string | null,
  certificate: '/certificate.jpg',
};

// The plan's four skill groups, filled from the resume. Trim to what you can defend in an interview.
export const skillGroups = [
  {
    name: 'Data & analysis',
    items: [
      'Pandas',
      'Matplotlib',
      'Data analysis',
      'Data visualization',
      'Data validation',
      'LLM evaluation',
      'Inter-rater reliability',
    ],
  },
  {
    name: 'Python & automation',
    items: ['Python', 'FastAPI', 'REST APIs', 'C', 'C++'],
  },
  {
    name: 'AI & LLMs',
    items: [
      'Prompt engineering',
      'RAG',
      'LangChain',
      'Ollama',
      'Vector search',
      'BM25',
      'Semantic reranking',
      'Scikit-learn',
      'TensorFlow',
      'NLP',
      'Computer vision',
      'OpenCV',
    ],
  },
  {
    name: 'Tools',
    items: [
      'Git',
      'ReactJS',
      'JavaScript',
      'HTML',
      'CSS',
      'PHP',
      'Firebase',
      'AES encryption',
      'RBAC',
      'ROS2',
      'Fusion 360',
      '3D printing',
    ],
  },
];

export const hackathon = {
  event: "INFINIX'26",
  project: 'AgentGuard',
  description: "Contributed to a friend's team project, shown with a defense-off vs defense-on demo.",
  video: null as string | null,
};

export const education = [
  {
    degree: 'B.Tech, AI & Data Science',
    school: 'Kumaraguru College of Technology',
    year: '2026',
  },
  {
    degree: 'Diploma, Mechatronics',
    school: 'Nachimuthu Polytechnic College',
    year: '2023',
  },
];
