import Section from './Section';
import { EXPERTISE } from '../data/content';
import { ApiIcon, LayersIcon, SparkIcon } from './Icons';

const ICONS = { layers: LayersIcon, api: ApiIcon, spark: SparkIcon };

export default function Expertise() {
  return (
    <Section
      id="expertise"
      title="Core focus"
      intro="The areas where I do my most reliable work."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {EXPERTISE.map(({ icon, title, description }) => {
          const Glyph = ICONS[icon];
          return (
            <article key={title} className="card card-hover p-8">
              <span className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent">
                <Glyph size={24} />
              </span>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{description}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
