import Section from './Section';
import { PROFILE, TECH_STACK } from '../data/content';

const VALUES = ['Scalable', 'Reliable', 'User-centric'];

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="card grid gap-10 p-8 md:grid-cols-[1.3fr_1fr] md:p-12">
        <div>
          <p className="text-lg leading-relaxed">
            I'm {PROFILE.name.split(' ')[0]}, a {PROFILE.role.toLowerCase()}.{' '}
            {PROFILE.bio}
          </p>
          <p className="mt-4 leading-relaxed text-muted">{PROFILE.tagline}</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {VALUES.map((v) => (
              <li
                key={v}
                className="rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Core tech stack</h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {TECH_STACK.map((t) => (
              <li
                key={t}
                className="rounded-lg border border-line bg-base px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
