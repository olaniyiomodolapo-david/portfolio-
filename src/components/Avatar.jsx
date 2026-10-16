import { PROFILE } from '../data/content';

/** Round picture with a soft blue ring and glow. Shows "OO" until you add a photo. */
export default function Avatar({ className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-full border-8 border-blue-400/40 bg-blue-950 shadow-[0_0_50px_rgb(96_165_250/0.35)] lg:border-[12px] ${className}`}
    >
      {PROFILE.photo ? (
        <img
  src={PROFILE.photo}
  alt={PROFILE.name}
  width="600"
  height="600"
  fetchPriority="high"
  decoding="async"
  className="h-full w-full object-cover"
/>
      ) : (
        <span
          aria-hidden="true"
          className="grid h-full w-full place-items-center font-display text-4xl font-bold text-yellow-400 lg:text-6xl"
        >
          OO
        </span>
      )}
    </div>
  );
}