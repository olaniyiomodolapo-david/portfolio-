// All editable copy lives here. Swap values without touching components.

export const PROFILE = {
  name: 'Olaniyi Omodolapo',
  role: 'Fullstack Engineer',
  tagline:
    'Specializing in scalable backend architecture and polished AI/web frontends.',
  bio: 'Bridging the gap between frontend polish and backend stability. Building high-performance applications that are scalable, reliable, and user-centric.',
  resumeUrl: '/resume.pdf', // put resume.pdf inside /public
  photo: '/profile1.jpg',
  email: 'hello@example.com', // TODO: replace
  github: 'https://github.com/your-username', // TODO: replace
  linkedin: 'https://linkedin.com/in/your-username', // TODO: replace
};

// Order here = order in the navbar. `id` must match the section id on the page.
export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const TECH_STACK = [
  'TypeScript',
  'Node.js',
  'React',
  'PostgreSQL',
  'AWS',
  'JavaScript',
];

export const EXPERTISE = [
  {
    icon: 'layers',
    title: 'Clean Architecture',
    description:
      'Layered, testable services with clear boundaries, so a codebase stays easy to change as the product grows.',
  },
  {
    icon: 'api',
    title: 'API Design',
    description:
      'Consistent, well-documented REST endpoints with sensible validation, error handling and versioning.',
  },
  {
    icon: 'spark',
    title: 'Web Apps & AI Integration',
    description:
      'Fast, accessible React interfaces that put AI features in front of users without sacrificing polish.',
  },
];

// TODO: replace each placeholder. Leave `code` / `demo` empty ('') to hide that button.
export const PROJECTS = [
  {
    title: 'Project One',
    description:
      'A short description of what this project does, who it is for, and the problem it solves.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    code: 'https://github.com/your-username/project-one',
    demo: 'https://example.com',
  },
  {
    title: 'Project Two',
    description:
      'Describe the architecture or the most interesting technical decision you made in this project.',
    tags: ['TypeScript', 'AWS', 'REST API'],
    code: 'https://github.com/your-username/project-two',
    demo: 'https://example.com',
  },
  {
    title: 'Project Three',
    description:
      'Highlight a measurable result here, such as performance gains, users served, or time saved.',
    tags: ['React', 'AI', 'Tailwind CSS'],
    code: 'https://github.com/your-username/project-three',
    demo: 'https://example.com',
  },
  {
    title: 'Project Four',
    description:
      'Explain the role you played and the main feature users like most about this project.',
    tags: ['Node.js', 'GraphQL', 'PostgreSQL'],
    code: 'https://github.com/your-username/project-four',
    demo: 'https://example.com',
  },
  {
    title: 'Project Five',
    description:
      'Mention the tools or services you integrated and why they were the right choice.',
    tags: ['TypeScript', 'React', 'AI'],
    code: 'https://github.com/your-username/project-five',
    demo: 'https://example.com',
  },
  {
    title: 'Project Six',
    description:
      'Share what you learned or how you solved a hard problem while building this one.',
    tags: ['AWS', 'Node.js', 'Docker'],
    code: 'https://github.com/your-username/project-six',
    demo: 'https://example.com',
  },
];
