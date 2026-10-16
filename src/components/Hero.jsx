import { PROFILE } from '../data/content';
import Avatar from './Avatar';

const delay = (ms) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
    >
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 text-center lg:grid-cols-[1.3fr_1fr] lg:text-left">
        <div className="mx-auto animate-slide-top lg:order-2" style={delay(0)}>
          <Avatar className="h-36 w-36 lg:h-72 lg:w-72" />
        </div>

        <div>
          <p className="text-xl font-semibold text-white">
            <span className="fade-step inline-block" style={delay(0)}>Hi,</span>{' '}
            <span className="fade-step inline-block" style={delay(1000)}>I'm</span>{' '}
            <span className="fade-step inline-block text-yellow-400" style={delay(2000)}>
              {PROFILE.name}
            </span>
          </p>

          {/* Two halves slowly slide in from opposite sides and meet */}
                    {/* Upper line from the top-left, lower line from the bottom-right */}
                    <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
            <span className="block headline-top" style={delay(2000)}>
              AI &amp; Fullstack
            </span>
            <span className="block headline-bottom text-yellow-400" style={delay(2000)}>
              Engineer
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-xl font-semibold leading-relaxed text-blue-100 lg:mx-0">
            Architecting robust backend systems with elegant frontend experiences.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a href="#projects" className="btn animate-pulse bg-yellow-500 text-black hover:bg-white">
              View Projects
            </a>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-white/30 text-white hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
            >
              Read My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}