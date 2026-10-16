# Olaniyi Omodolapo — Portfolio

React 18 + Vite + Tailwind CSS 3. Dark (default) and light themes with localStorage persistence.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in /dist
npm run preview
```

## Structure

```
olaniyi-portfolio/
├── index.html                 # fonts + no-flash theme script
├── tailwind.config.js         # theme tokens, slide/pulse keyframes
├── public/                    # put resume.pdf here
└── src/
    ├── main.jsx               # entry
    ├── App.jsx                # page composition
    ├── index.css              # theme CSS variables + shared classes
    ├── data/content.js        # ALL editable copy: profile, links, stack, projects
    ├── hooks/
    │   ├── useTheme.js        # dark/light + localStorage
    │   └── useActiveSection.js# highlights current nav link on scroll
    └── components/
        ├── Navbar.jsx  ThemeToggle.jsx  Hero.jsx  Expertise.jsx
        ├── Projects.jsx  About.jsx  Footer.jsx  Section.jsx  Icons.jsx
```

## Customize

1. Edit `src/data/content.js` (email, GitHub, LinkedIn, projects).
2. Add `public/resume.pdf` for the "Read My Resume" button.
3. Change colors in the two blocks at the top of `src/index.css`.
