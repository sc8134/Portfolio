import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ScrollProgress from './components/ScrollProgress';

// Lazy load below-the-fold sections — reduces initial JS parse time
const Experience = lazy(() => import('./components/Experience'));
const Terminal = lazy(() => import('./components/Terminal'));
const VideoShowcase = lazy(() => import('./components/VideoShowcase'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Minimal fallback — matches background so there's no flash
function SectionFallback() {
  return <div className="py-24 bg-[#F5F0EB]" aria-hidden="true" />;
}

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#F5F0EB] text-[#1E3A5F] transition-colors duration-300"
      style={{ fontFamily: '"DM Sans", ui-sans-serif, system-ui, sans-serif' }}
    >
      <ScrollProgress />
      <Navbar />
      <main>
        {/* Above the fold — loaded immediately */}
        <Hero />
        <About />
        <Skills />
        <Projects />

        {/* Below the fold — lazy loaded */}
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Terminal />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <VideoShowcase />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<div className="bg-[#1E3A5F] h-20" aria-hidden="true" />}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}
