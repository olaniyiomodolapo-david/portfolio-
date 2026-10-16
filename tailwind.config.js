// // Colors read CSS variables (see src/index.css) so every component themes itself
// // automatically. The "<alpha-value>" placeholder keeps opacity utilities working (e.g. bg-accent/15).
// const token = (name) => `rgb(var(${name}) / <alpha-value>)`;

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,jsx}'],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         base: token('--bg'),
//         surface: token('--surface'),
//         line: token('--border'),
//         ink: token('--text'),
//         muted: token('--muted'),
//         accent: token('--accent'),
//         'on-accent': token('--on-accent'),
//       },
//       fontFamily: {
//         display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
//         sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
//       },
//       keyframes: {
//         slideTop: {
//           from: { opacity: '0', transform: 'translateY(-40px)' },
//           to: { opacity: '1', transform: 'translateY(0)' },
//         },
//         slideLeft: {
//           from: { opacity: '0', transform: 'translateX(-64px)' },
//           to: { opacity: '1', transform: 'translateX(0)' },
//         },
//         slideBottom: {
//           from: { opacity: '0', transform: 'translateY(40px)' },
//           to: { opacity: '1', transform: 'translateY(0)' },
//         },
//         pulseRing: {
//           '0%': { boxShadow: '0 0 0 0 rgb(var(--accent) / 0.55)' },
//           '70%': { boxShadow: '0 0 0 14px rgb(var(--accent) / 0)' },
//           '100%': { boxShadow: '0 0 0 0 rgb(var(--accent) / 0)' },
//         },
//       },
//       animation: {
//         'slide-top': 'slideTop .8s cubic-bezier(.22,1,.36,1) both',
//         'slide-left': 'slideLeft .8s cubic-bezier(.22,1,.36,1) both',
//         'slide-bottom': 'slideBottom .8s cubic-bezier(.22,1,.36,1) both',
//         'pulse-ring': 'pulseRing 2.2s ease-out infinite',
//       },
//     },
//   },
//   plugins: [],
// };
const token = (name) => `rgb(var(${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: token('--bg'),
        surface: token('--surface'),
        line: token('--border'),
        ink: token('--text'),
        muted: token('--muted'),
        accent: token('--accent'),
        'on-accent': token('--on-accent'),
        hero: token('--hero'),
        badge: token('--badge'),
        'badge-ink': token('--badge-ink'),
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        slideTop: {
          '0%': { opacity: '0', transform: 'translateY(-100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
                slideRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideBottom: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
                slideTopLeft: {
          '0%': { opacity: '0', transform: 'translate(-120px, -90px)' },
          '100%': { opacity: '1', transform: 'translate(0, 0)' },
        },
        slideBottomRight: {
          '0%': { opacity: '0', transform: 'translate(120px, 90px)' },
          '100%': { opacity: '1', transform: 'translate(0, 0)' },
        },
      },
      animation: {
        'slide-top': 'slideTop 2.5s ease-out both',
        'slide-left': 'slideLeft 2.5s ease-out both',
        'slide-right': 'slideRight 2.5s ease-out both',
        'slide-bottom': 'slideBottom 2s ease-out both',
        'slide-top-left': 'slideTopLeft 2.5s ease-out both',
        'slide-bottom-right': 'slideBottomRight 2.5s ease-out both',
      },
    },
  },
  plugins: [],
};