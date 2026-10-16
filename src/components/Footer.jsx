
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
//       <div className="mx-auto max-w-6xl px-6 py-24">
//         <div className="mx-auto max-w-2xl rounded-xl hero-bg px-6 py-12 text-center shadow-lg">
//           <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
//             Start a Project
//           </h2>
//           <p className="mt-3 text-white">
//             Looking for a fullstack expert to bring your ideas to life?
//           </p>
//           <a
//             href={`mailto:${PROFILE.email}`}
//             className="btn mt-8 bg-white text-blue-900 hover:bg-yellow-500 hover:text-black"
//           >
//             Get In Touch
//           </a>
//         </div>

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
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from './Icons';

const SOCIALS = [
  { label: 'WhatsApp', href: `https://wa.me/${PROFILE.whatsapp}`, Glyph: WhatsAppIcon },
  { label: 'Call', href: `tel:${PROFILE.phone}`, Glyph: PhoneIcon },
  { label: 'Email', href: `mailto:${PROFILE.email}`, Glyph: MailIcon },
  { label: 'LinkedIn', href: PROFILE.linkedin, Glyph: LinkedinIcon },
  { label: 'GitHub', href: PROFILE.github, Glyph: GithubIcon },
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

        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {SOCIALS.map(({ label, href, Glyph }) => {
            const external = href.startsWith('http');
            return (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors duration-500 hover:border-yellow-500 hover:text-yellow-500"
                >
                  <Glyph />
                </a>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-center text-sm text-muted">
          {PROFILE.email} · {PROFILE.phone}
        </p>
      </div>

      <p className="border-t border-line py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
      </p>
    </footer>
  );
}