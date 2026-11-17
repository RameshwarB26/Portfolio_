export const profile = {
  name: 'Rameshwar Bhumbar',
  fullName: 'Rameshwar Balaji Bhumbar',
  github: 'https://github.com/RameshwarB26',
  linkedin: 'https://www.linkedin.com/in/rameshwarbhumbar/',
  email: 'ram26.bhumbar@gmail.com',
  resume: 'https://drive.google.com/file/d/1S4ZrVjo1rRhM_Wvvc_YcIKVNjeslV-hw/view?usp=drive_link',
}
export const navigation = [['projects', 'Work'], ['about', 'About'], ['experience', 'Experience']]
// Project details supplied by the owner. Add authorized assets to media; no fabricated previews.
export const projects = [
  {
    id: 'plugo', number: '01', presentation: 'mobile', title: 'Plugo',
    category: 'Mobile / Full-stack', type: 'Final-year engineering project',
    role: 'Full-Stack Flutter Developer',
    description: 'An EV charging companion for finding nearby stations, planning journeys, and booking a charging slot.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Razorpay (test)'],
    features: ['Discover nearby stations', 'Plan a charging route', 'Reserve a charging slot', 'Manage stations in the owner app'],
    problem: 'Bring station discovery, trip planning, booking, and payment demonstrations into one mobile workflow for EV drivers.',
    contribution: 'Developed Flutter applications for user and owner workflows, integrated map-based station discovery, and implemented authentication, bookings, and test payments.',
    decision: 'Used the Haversine formula for geographic distance calculations and a first-come, first-served booking workflow. Razorpay runs as a test-payment demonstration.',
    architecture: 'Flutter and Dart interfaces connect to Firebase Authentication, Cloud Firestore, and Firebase Cloud Functions. Google Maps supports discovery and location-based functionality.',
    disclosure: 'Academic project · Razorpay test integration',
    media: { src: null, alt: 'Plugo station discovery map', width: 390, height: 844, secondary: { src: null, alt: 'Plugo booking workflow', width: 390, height: 844 } },
  },
  {
    id: 'offbit', number: '02', presentation: 'browser', title: 'Offbit',
    category: 'Web platform / Team project', type: 'Selected contributions to an existing platform',
    role: 'Full-Stack Development Contributor',
    description: 'Role-aware creator dashboards, business insights, and management workflows for a platform connecting creators, instructors, and businesses.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'REST APIs'],
    features: ['Account-specific creator dashboards', 'Business summaries & expandable insights', 'Activity tracking & admin event logs', 'Batch editing & management navigation'],
    problem: 'Make creator operations easier to navigate across classes, events, jobs, studios, and account-specific business workflows.',
    contribution: 'Enhanced dashboard sections for Individual, Academy, Venue Provider, and Hybrid accounts. Improved operational summaries, class and batch deep links, and enrollment, attendance, and payment visibility through existing APIs.',
    decision: 'Integrated frontend and backend activity events using device and session identifiers. Added a feature-flagged Studio Revenue Tracker demonstration with mock data, separate from live financial analytics.',
    architecture: 'React and Next.js components written in TypeScript integrate with Node.js and Express REST APIs backed by MySQL. Work included API debugging, batch editing, and feature-branch collaboration within a multi-developer codebase.',
    disclosure: 'Team contributions · Revenue tracker is a mock-data demo. Deployment of these changes is not verified.',
    media: { src: null, alt: 'Offbit creator dashboard overview', width: 1440, height: 900 },
  },
  {
    id: 'portfolio', number: '03', presentation: 'artwork', title: 'Personal portfolio',
    category: 'Frontend / Personal project', type: 'Design & implementation',
    role: 'Design & frontend development',
    description: 'A responsive home for my work and background, built with React and a focus on accessible, considered interactions.',
    tech: ['React', 'JavaScript', 'CSS', 'Vite'],
    problem: 'Make a developer’s background easy to explore on any screen, without hiding the details behind visual effects.',
    contribution: 'Reusable React sections, a shared content model, responsive layouts, accessible navigation, and motion preferences.',
    decision: 'CSS handles visual transitions. Native links and disclosure elements keep navigation and project details lightweight.',
    live: 'https://rameshwarbhumbar-portfolio.netlify.app/',
    liveNote: 'The live site reflects the existing deployment. This case study describes the local implementation.',
  },
]
export const expertise = [
  ['01', 'Frontend engineering', 'Interfaces with clear structure, reusable components, and responsive layouts.', ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML / CSS']],
  ['02', 'Backend & APIs', 'Server-side workflows, REST integrations, and relational data access.', ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'PHP', 'REST APIs']],
  ['03', 'Mobile development', 'Cross-platform applications and connected mobile workflows.', ['Flutter', 'Firebase']],
  ['04', 'Data & developer tools', 'Database interactions, source control, and API development tools.', ['MySQL', 'MongoDB', 'SQL', 'Git', 'GitHub', 'Postman', 'Python']],
]
export const experiences = [
  { role: 'Full-Stack Developer (Freelance)', company: 'Offbit', location: 'Remote', period: 'Jun — Present', description: 'Contributed to role-aware creator dashboards, business insights, activity tracking, and management workflows. Integrated React and Next.js components with existing REST APIs in a team codebase.', tech: 'Next.js / TypeScript / Node.js / Express.js / MySQL' },
  { role: 'Backend Engineer Intern', company: 'Sinovax Pvt. Ltd.', location: 'Remote', period: 'Feb — Apr 2026', description: 'Built CapitalFlow, a financial backend (Node.js, Express.js, MongoDB) exposing RESTful APIs, using a modular Controller–Service architecture.', tech: 'Node/ MySQL/ Express ' },
  { role: 'Java Web Developer', company: 'R3 System Software Solutions Pvt. Ltd.', location: 'Nashik', period: 'Jun — Sep 2023', description: 'Built backend features with Java, JDBC, MySQL, and REST APIs. Worked on SQL query optimization, debugging, and refactoring to improve data flow.', tech: 'Java / JDBC / MySQL / REST APIs' },

]
export const education = [
  ['2023 — 2026', 'BE · Computer Engineering', 'PVG’s COE & SSDIOM, Nashik · SPPU', 'CGPA 7.54 / 10'],
  ['2019 — 2022', 'Diploma · Information Technology', 'Matoshri Aasarabai Institute of Technology and Research Centre, Nashik', '80.56%'],
]
export const certifications = ['GitHub Foundations · 2025', 'Java Foundations · 2024', 'API Fundamentals — Postman · 2024', 'Git & GitHub · 2024']
export const achievements = ['Finalist — Avishkaar Season 2 · 2024', 'Bharatiya Antariksh Hackathon participant · 2024', 'State-level finalist — MSBTE Project Competition · 2023', 'Open-source contributor — CodePVG']



