import useTheme from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a
        href="#expertise"
        className="sr-only z-[60] rounded bg-accent px-4 py-2 text-on-accent focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  );
}
