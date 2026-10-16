import { MoonIcon, SunIcon } from './Icons';

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-line text-ink transition hover:border-accent hover:text-accent"
    >
      <SunIcon
        className={`absolute transition-all duration-300 ${
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'
        }`}
      />
      <MoonIcon
        className={`absolute transition-all duration-300 ${
          isDark ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
    </button>
  );
}
