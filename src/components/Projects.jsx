import { useState } from 'react';
import Section from './Section';
import { PROJECTS } from '../data/content';
import { ExternalIcon, GithubIcon } from './Icons';

const INITIAL_COUNT = 3; // change this number to show more or fewer at first

function ProjectCard({ title, description, tags, code, demo, className = '' }) {
  return (
    <article className={`card card-hover flex flex-col overflow-hidden ${className}`}>
      {/* Thumbnail placeholder: replace with an <img> when you have screenshots */}
      <div
        aria-hidden="true"
        className="grid h-40 place-items-center border-b border-line bg-badge font-display text-5xl font-bold text-badge-ink"
      >
        {title.charAt(0)}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold">{title}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-muted">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-3">
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline flex-1 !px-4 !py-2.5"
            >
              <GithubIcon size={16} /> View Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid flex-1 !px-4 !py-2.5"
            >
              <ExternalIcon size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_COUNT);
  const hasMore = PROJECTS.length > INITIAL_COUNT;

  return (
    <Section
      id="projects"
      title="Selected projects"
      intro="A few things I've built. Edit src/data/content.js to swap these placeholders."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <ProjectCard
            key={p.title}
            {...p}
            className={i >= INITIAL_COUNT ? 'reveal' : ''}
          />
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            aria-expanded={showAll}
            className="btn btn-outline"
          >
            {showAll ? 'Show less' : `View more (${PROJECTS.length - INITIAL_COUNT})`}
          </button>
        </div>
      )}
    </Section>
  );
}