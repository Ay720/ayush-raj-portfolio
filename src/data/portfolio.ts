/**
 * Central portfolio data — based on Ayush Raj's resume.
 * Keep portfolio claims grounded in the resume and update them here.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Ayush Raj',
  displayName: 'Ayush Raj',
  firstName: 'AYUSH',
  seriesTag: 'THE SERIES',
  originalLabel: 'AN AYUSH RAJ ORIGINAL',
  role: 'Backend Developer & AI Engineer',
  tagline: ['Backend Developer', 'Generative AI', 'Full-Stack'],
  intro:
    'Computer Science and Engineering student at ABES Engineering College, building backend services and AI-powered applications with Node.js, Python, LangChain, LangGraph, MongoDB and vector databases.',
  location: 'Ghaziabad, UP',
  email: 'ayushcoder22@gmail.com',
  phone: '+91 7209768984',
  links: {
    linkedin: 'https://www.linkedin.com/in/-backenddeveloper-ayush-raj/',
    github: 'https://github.com/Ay720',
  },
  resumePdf: '/assets/Ayush_Raj_Resume.pdf',
  resumeFilename: 'Ayush_Raj_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Ayush Raj',
  },
  interests: ['Backend Development', 'Generative AI', 'Multi-Agent Systems'],
};

export const education = [
  {
    school: 'ABES Engineering College',
    place: 'Ghaziabad',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    period: '2023 – 2027',
    score: 'CGPA 8.0/10',
    coursework: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
];

export const experience = [
  {
    company: 'RoomGi',
    role: 'Backend Developer Intern',
    place: '',
    period: 'March 2026 – April 2026',
    points: [
      'Developed backend services using Node.js, Express.js, MongoDB, and Cloudinary for a PG Management platform.',
      'Designed REST APIs for authentication, property listings, bookings, and profile management using JWT.',
      'Optimized MongoDB queries, implemented error handling, and improved backend performance.',
      'Collaborated with frontend developers to integrate APIs and deliver scalable features.',
    ],
  },
  {
    company: 'Ricoz Innovation',
    role: 'Full Stack Developer Intern',
    place: '',
    period: 'Currently Working',
    points: [
      'Currently working as a Full Stack Developer Intern.',
      'Developing and maintaining full-stack web applications.',
      'Working on frontend and backend integration.',
      'Building REST APIs and handling database operations.',
      'Improving application functionality, performance, and user experience.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'multi-agent-research',
    title: 'Multi-Agent AI Research System',
    year: 'Project',
    genre: 'Generative AI • Agents • Research',
    logline: 'An agentic research workflow that automates complex, multi-step web research.',
    stack: ['Python', 'LangGraph', 'LangChain', 'Mistral AI', 'Tavily', 'BeautifulSoup'],
    build: [
      'Built a multi-agent research system using LangGraph, LangChain, Mistral AI, Tavily, and Python to automate complex multi-step web research.',
      'Designed specialized agents for planning, web search, web scraping, information extraction, analysis, and response generation.',
      'Integrated Tavily for real-time web search and BeautifulSoup for extracting relevant information from webpages.',
      'Used LangGraph to orchestrate agent workflows, maintain state, and pass structured information between specialized agents.',
    ],
    features: [
      'Research planning',
      'Real-time web search',
      'Web scraping and information extraction',
      'Analysis and response generation',
      'Stateful LangGraph workflows',
    ],
    metrics: [{ value: '6', label: 'specialized agent roles' }],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'rag-knowledge-assistant',
    title: 'RAG-Based AI Knowledge Assistant',
    year: 'Project',
    genre: 'Generative AI • RAG • Search',
    logline: 'A knowledge assistant that grounds answers in relevant information retrieved from external documents.',
    stack: ['LangChain', 'HuggingFace', 'ChromaDB', 'Embeddings', 'Vector Search'],
    build: [
      'Developed a Retrieval-Augmented Generation system that answers user queries using knowledge retrieved from external documents.',
      'Implemented document loading, text chunking, embeddings, vector storage, similarity search, retrieval, and generation.',
      'Used LangChain, HuggingFace embeddings, and ChromaDB to build a semantic retrieval pipeline.',
      'Grounded LLM responses in retrieved context to improve relevance and reduce unsupported or hallucinated responses.',
    ],
    features: [
      'Document loading and chunking',
      'Embedding generation and vector storage',
      'Similarity search and retrieval',
      'Context-grounded answer generation',
    ],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'ai-virtual-assistant',
    title: 'AI Virtual Assistant',
    year: 'Project',
    genre: 'MERN • Generative AI • Voice',
    logline: 'A personalized AI assistant with secure accounts, voice features, and persistent conversations.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Google Gemini API', 'Cloudinary'],
    build: [
      'Developed a MERN-based AI Virtual Assistant with JWT authentication, personalized user accounts, and Google Gemini API integration.',
      'Implemented Speech-to-Text, Text-to-Speech, conversation history, assistant customization, and Cloudinary image uploads.',
      'Built REST APIs using Node.js, Express.js, and MongoDB for authentication, user management, and persistent conversations.',
      'Developed responsive React.js interfaces with protected routes and optimized frontend-backend API communication.',
    ],
    features: [
      'JWT authentication and protected routes',
      'Google Gemini API integration',
      'Speech-to-Text and Text-to-Speech',
      'Conversation history and assistant customization',
      'Cloudinary image uploads',
    ],
    metrics: [],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'tenants',
  },
  {
    id: 'e-learning-platform',
    title: 'E-Learning Platform',
    year: 'Project',
    genre: 'MERN • Education • Full-Stack',
    logline: 'A learning platform for course management, enrollment, and learner progress tracking.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
    build: [
      'Developed a MERN-based E-Learning platform with JWT authentication, course management, enrollment, and progress tracking.',
      'Built REST APIs for course creation, enrollment, user management, and progress tracking using Node.js and Express.js.',
      'Developed responsive React.js interfaces with reusable components, course search, filtering, and modular architecture.',
      'Optimized MongoDB queries and API communication to improve application performance and scalability.',
    ],
    features: [
      'JWT authentication',
      'Course creation and management',
      'Enrollment and progress tracking',
      'Course search and filtering',
      'Reusable, modular React components',
    ],
    metrics: [],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'github-profile-analyzer',
    title: 'GitHub Profile Analyzer',
    year: 'Project',
    genre: 'Full-Stack • Analytics • Data Visualization',
    logline: 'A GitHub analytics platform that turns profile and repository data into interactive visual insights.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'GitHub REST API', 'Recharts'],
    build: [
      'Developed a full-stack GitHub analytics platform that analyzes GitHub profiles and transforms repository data into interactive visual insights.',
      'Integrated the GitHub REST API to retrieve user profiles and repository information, and built RESTful APIs using Node.js and Express.js.',
      'Implemented analytics for followers, repositories, stars, forks, and programming languages.',
      'Created interactive dashboards using Recharts and integrated MySQL to store and manage previously analyzed profiles.',
      'Implemented profile search, history management, and deletion functionality.',
    ],
    features: [
      'GitHub profile and repository lookup',
      'Followers, repositories, stars, forks, and language analytics',
      'Interactive Recharts dashboards',
      'MySQL storage for analyzed profiles',
      'Profile search, history management, and deletion',
    ],
    metrics: [],
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'dsa-problems',
    title: '800+ Questions Solved',
    org: 'LeetCode • CodeChef • GeeksforGeeks',
    detail: 'Solved 800+ data structures and algorithms questions across LeetCode, CodeChef, and GeeksforGeeks.',
    laurel: 'Problem Solving',
  },
  {
    id: 'hackerrank-c',
    title: '5-Star in C',
    org: 'HackerRank',
    detail: 'Achieved a 5-star rating in C programming.',
    laurel: 'HackerRank',
  },
  {
    id: 'problem-solving-cert',
    title: 'Intermediate Problem Solving',
    org: 'HackerRank',
    detail: 'HackerRank Intermediate Problem Solving certified.',
    laurel: 'Certification',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'HackerRank', name: 'Intermediate Problem Solving' },
  { issuer: 'NASSCOM', name: 'Exploratory Data Analyst' },
  { issuer: 'NASSCOM', name: 'AWS Cloud Practitioner' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Programming languages',
    skills: [
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
      { name: 'Java', mono: 'Jv' },
      { name: 'Python', mono: 'Py' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    subtitle: 'Frontend, backend & APIs',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'JWT', mono: 'Jw' },
    ],
  },
  {
    id: 'databases-tools',
    title: 'Databases & Tools',
    subtitle: 'Data, collaboration & integrations',
    skills: [
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'Cloudinary', mono: 'Cl' },
      { name: 'MySQL', mono: 'My' },
      { name: 'Recharts', mono: 'Rc' },
      { name: 'GitHub REST API', mono: 'Gh' },
    ],
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    subtitle: 'Retrieval & agentic systems',
    skills: [
      { name: 'RAG', mono: 'Rg' },
      { name: 'LangChain', mono: 'Lc' },
      { name: 'LangGraph', mono: 'Lg' },
      { name: 'Mistral AI', mono: 'Mi' },
      { name: 'ChromaDB', mono: 'Ch' },
      { name: 'HuggingFace', mono: 'Hf' },
      { name: 'Embeddings', mono: 'Em' },
      { name: 'Vector Databases', mono: 'Vd' },
      { name: 'Agentic AI', mono: 'Ag' },
      { name: 'Multi-Agent Systems', mono: 'Ma' },
    ],
  },
  {
    id: 'ai-tools-apis',
    title: 'AI Tools & APIs',
    subtitle: 'Search, scraping & model APIs',
    skills: [
      { name: 'Tavily', mono: 'Tv' },
      { name: 'BeautifulSoup', mono: 'Bs' },
      { name: 'Google Gemini API', mono: 'Ge' },
      { name: 'Web Search', mono: 'Ws' },
      { name: 'Web Scraping', mono: 'Sc' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'Core computer science',
    skills: [{ name: 'DSA', mono: 'Ds' }],
  },
];

export const skillEvidence: Record<string, string[]> = {
  C: ['5-star in C — HackerRank'],
  DSA: ['800+ questions across LeetCode, CodeChef, and GeeksforGeeks'],
  Python: ['Multi-Agent AI Research System'],
  JavaScript: ['AI Virtual Assistant', 'E-Learning Platform'],
  'React.js': ['AI Virtual Assistant', 'E-Learning Platform'],
  'Node.js': ['RoomGi internship', 'AI Virtual Assistant', 'E-Learning Platform'],
  'Express.js': ['RoomGi internship', 'AI Virtual Assistant', 'E-Learning Platform'],
  'REST APIs': ['RoomGi internship', 'AI Virtual Assistant', 'E-Learning Platform'],
  JWT: ['RoomGi internship', 'AI Virtual Assistant', 'E-Learning Platform'],
  MongoDB: ['RoomGi internship', 'AI Virtual Assistant', 'E-Learning Platform'],
  Cloudinary: ['RoomGi internship', 'AI Virtual Assistant'],
  RAG: ['RAG-Based AI Knowledge Assistant'],
  LangChain: ['Multi-Agent AI Research System', 'RAG-Based AI Knowledge Assistant'],
  LangGraph: ['Multi-Agent AI Research System'],
  'Mistral AI': ['Multi-Agent AI Research System'],
  ChromaDB: ['RAG-Based AI Knowledge Assistant'],
  HuggingFace: ['RAG-Based AI Knowledge Assistant'],
  Tavily: ['Multi-Agent AI Research System'],
  BeautifulSoup: ['Multi-Agent AI Research System'],
  'Google Gemini API': ['AI Virtual Assistant'],
  MySQL: ['GitHub Profile Analyzer'],
  Recharts: ['GitHub Profile Analyzer'],
  'GitHub REST API': ['GitHub Profile Analyzer'],
  GitHub: ['GitHub Profile Analyzer'],
  'Vector Databases': ['RAG-Based AI Knowledge Assistant'],
  Embeddings: ['RAG-Based AI Knowledge Assistant'],
  'Multi-Agent Systems': ['Multi-Agent AI Research System'],
  'Agentic AI': ['Multi-Agent AI Research System'],
  'Web Search': ['Multi-Agent AI Research System'],
  'Web Scraping': ['Multi-Agent AI Research System'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: education[0].period,
    synopsis: 'Computer Science and Engineering at ABES Engineering College, Ghaziabad.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description: `${education[0].degree} at ${education[0].school} — ${education[0].score}.`,
        tags: ['B.Tech', 'Computer Science', education[0].score],
        runtime: education[0].period,
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Fundamentals',
        description: `Coursework includes ${education[0].coursework.join(', ')}.`,
        tags: education[0].coursework,
        runtime: 'Coursework',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'Backend Engineering',
    period: 'March – April 2026',
    synopsis: 'Backend Developer Intern at RoomGi followed by a current Full Stack Developer Internship at Ricoz Innovation.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Backend Intern',
        description: 'Developed backend services and REST APIs with Node.js, Express.js, MongoDB, Cloudinary, and JWT.',
        tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
        runtime: 'March – April 2026',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Collaborator',
        description: 'Optimized MongoDB queries, improved error handling and performance, and collaborated on API integration.',
        tags: ['MongoDB', 'REST APIs', 'Teamwork'],
        runtime: 'RoomGi',
        palette: jade,
      },
      {
        code: 'S02 E03',
        title: 'The Full-Stack Intern',
        description: 'Currently developing full-stack applications, integrating frontend and backend systems, building REST APIs, and working with databases at Ricoz Innovation.',
        tags: ['React.js', 'Node.js', 'REST APIs', 'Databases'],
        runtime: 'Currently Working',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Building with AI',
    period: 'Selected projects',
    synopsis: `${projects.length} full-stack and AI projects spanning multi-agent research, RAG, voice assistance, online learning, and GitHub analytics.`,
    episodes: projects.map((project, index) => ({
      code: `S03 E${String(index + 1).padStart(2, '0')}`,
      title: project.title,
      description: project.logline,
      tags: project.stack.slice(0, 4),
      runtime: 'Selected project',
      palette: [crimson, ocean, violet, jade, amber][index % 5],
    })),
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Internship', title: 'RoomGi', detail: 'Backend Developer Intern', palette: amber },
  { label: 'Current internship', title: 'Ricoz Innovation', detail: 'Full Stack Developer Intern', palette: crimson },
  { label: 'Grounded answers', title: 'RAG Assistant', detail: 'HuggingFace • ChromaDB', palette: ocean },
  { label: 'Generative AI', title: 'Virtual Assistant', detail: 'Google Gemini API • voice features', palette: violet },
  { label: 'GitHub analytics', title: 'Profile Analyzer', detail: 'GitHub REST API • MySQL • Recharts', palette: jade },
  { label: 'Learning', title: 'E-Learning', detail: 'Course management • progress tracking', palette: amber },
  { label: 'Problem solving', title: '800+', detail: 'Questions across LeetCode • CodeChef • GeeksforGeeks', palette: crimson },
  { label: 'HackerRank', title: '5-Star in C', detail: 'Programming achievement', palette: ocean },
  { label: 'Education', title: 'B.Tech CSE', detail: 'ABES Engineering College', palette: violet },
  { label: 'Academic score', title: '8.0 / 10', detail: 'Current CGPA', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Computer Science',
    lines: ['ABES Engineering College, Ghaziabad', education[0].period],
    chips: [education[0].score],
  },
  {
    kicker: 'Experience',
    title: 'Backend Development',
    lines: ['Full Stack Developer Intern · Ricoz Innovation', 'Currently Working', 'Frontend · Backend · REST APIs · Databases'],
  },
  {
    kicker: 'AI Research',
    title: 'Multi-Agent System',
    lines: ['LangGraph workflows for multi-step web research', 'Planning · Search · Scraping · Extraction · Analysis · Responses'],
    chips: ['Python', 'LangGraph', 'Tavily'],
  },
  {
    kicker: 'Projects',
    title: `${projects.length} Projects`,
    lines: projects.map((project) => project.title),
  },
  {
    kicker: 'Achievements',
    title: 'Problem Solver',
    lines: ['800+ DSA questions across LeetCode, CodeChef, and GeeksforGeeks', 'HackerRank Intermediate Problem Solving certified', '5-star in C on HackerRank'],
  },
];

export type ProfileId = 'ayush' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'ayush',
    name: 'Ayush',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Education • Experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Projects`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Highlights from my resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Highlights • ${certifications.length} Certification`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
