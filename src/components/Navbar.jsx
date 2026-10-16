import { useEffect, useState } from 'react';
import { NAV_LINKS, PROFILE } from '../data/content';
import useActiveSection from '../hooks/useActiveSection';
import ThemeToggle from './ThemeToggle';
import { MenuIcon, XIcon } from './Icons';

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  // Close the drawer with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Close the drawer when the viewport grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const linkClass = (id) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      active === id ? 'bg-accent/15 text-accent' : 'text-muted hover:text-ink'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-base/70 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3 font-display font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-sm font-bold text-on-accent">
            OO
          </span>
          <span className="hidden sm:inline">{PROFILE.name}</span>
        </a>

        {/* Desktop links */}
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={linkClass(l.id)}
              aria-current={active === l.id ? 'page' : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows,visibility] duration-300 md:hidden ${
          open ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]'
        }`}
      >
        <nav aria-label="Mobile" className="overflow-hidden">
          <ul className="flex flex-col gap-1 px-6 pb-4">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`block ${linkClass(l.id)} py-3`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
