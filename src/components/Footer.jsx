// import { PROFILE } from '../data/content';
// import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

// const SOCIALS = [
//   { label: 'GitHub', href: PROFILE.github, Glyph: GithubIcon },
//   { label: 'LinkedIn', href: PROFILE.linkedin, Glyph: LinkedinIcon },
//   { label: 'Email', href: `mailto:${PROFILE.email}`, Glyph: MailIcon },
// ];

// export default function Footer() {
//   return (
//     <footer id="contact" className="scroll-mt-20 border-t border-line">
//       <div className="mx-auto max-w-6xl px-6 py-24 text-center">
//         <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
//           Have a project in mind?
//         </h2>
//         <p className="mx-auto mt-4 max-w-xl text-muted">
//           I'm open to new work. Send a message and I'll reply as soon as I can.
//         </p>
//         <a href={`mailto:${PROFILE.email}`} className="btn btn-solid mt-8">
//           Send an email
//         </a>

//         <ul className="mt-10 flex justify-center gap-3">
//           {SOCIALS.map(({ label, href, Glyph }) => (
//             <li key={label}>
//               <a
//                 href={href}
//                 aria-label={label}
//                 target={label === 'Email' ? undefined : '_blank'}
//                 rel="noopener noreferrer"
//                 className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
//               >
//                 <Glyph />
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <p className="border-t border-line py-6 text-center text-sm text-muted">
//         © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
//       </p>
//     </footer>
//   );
// }
import { PROFILE } from '../data/content';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

const SOCIALS = [
  { label: 'GitHub', href: PROFILE.github, Glyph: GithubIcon },
  { label: 'LinkedIn', href: PROFILE.linkedin, Glyph: LinkedinIcon },
  { label: 'Email', href: `mailto:${PROFILE.email}`, Glyph: MailIcon },
];

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl rounded-xl hero-bg px-6 py-12 text-center shadow-lg">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Start a Project
          </h2>
          <p className="mt-3 text-white">
            Looking for a fullstack expert to bring your ideas to life?
          </p>
          <a
            href={`mailto:${PROFILE.email}`}
            className="btn mt-8 bg-white text-blue-900 hover:bg-yellow-500 hover:text-black"
          >
            Get In Touch
          </a>
        </div>

        <ul className="mt-10 flex justify-center gap-3">
          {SOCIALS.map(({ label, href, Glyph }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target={label === 'Email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Glyph />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="border-t border-line py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
      </p>
    </footer>
  );
}