import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';

const VIDEO_ID = 'wgcTCBLrpjo';
const THUMBNAIL = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

export default function VideoShowcase() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activated, setActivated] = useState(false);

  return (
    <section
      id="demo"
      ref={ref}
      className="py-24 bg-[#F5F0EB]"
      aria-labelledby="demo-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold tracking-widest text-[#E8654A] uppercase">
            Walkthrough
          </span>
          <h2
            id="demo-heading"
            className="mt-2 text-3xl sm:text-4xl font-bold text-[#1E3A5F]"
          >
            Want to see it{' '}
            <span
              className="text-[#E8654A] italic"
              style={{ fontFamily: '"DM Serif Display", ui-serif, Georgia, serif' }}
            >
              in action?
            </span>
          </h2>
          <p className="mt-3 text-[#4A6080] max-w-xl mx-auto text-sm">
            A 2-minute walkthrough — the design, the projects, and SARA live in action.
            Or scroll up and try SARA yourself.
          </p>
        </motion.div>

        {/* Video facade / embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          {/* Ambient glow */}
          <div
            className="absolute -inset-2 rounded-3xl blur-2xl opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, #E8654A 0%, #1E3A5F 70%)' }}
            aria-hidden="true"
          />

          {/* Video container */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#D9CFC5] shadow-2xl bg-[#1E3A5F]">
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#1E3A5F] border-b border-[#2B4D7A]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#E8654A]" />
                  <div className="w-3 h-3 rounded-full bg-[#F5C842]" />
                  <div className="w-3 h-3 rounded-full bg-[#4CAF50]" />
                </div>
                <div className="flex items-center gap-1.5 ml-2">
                  <Play size={12} className="text-[#E8654A]" />
                  <span className="text-xs text-[#A8BDD0] font-mono">
                    Portfolio Walkthrough — 2:02
                  </span>
                </div>
              </div>
              <a
                href={`https://youtu.be/${VIDEO_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#7A9AB5] hover:text-[#E8654A] transition-colors"
                aria-label="Watch on YouTube"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
            </div>

            {/* 16:9 container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              {!activated ? (
                /* Facade — thumbnail + play button, no YouTube JS loaded */
                <button
                  onClick={() => setActivated(true)}
                  className="absolute inset-0 w-full h-full group focus:outline-none focus:ring-2 focus:ring-[#E8654A] focus:ring-offset-2"
                  aria-label="Play portfolio walkthrough video"
                >
                  {/* Thumbnail */}
                  <img
                    src={THUMBNAIL}
                    alt="Portfolio walkthrough thumbnail"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="1280"
                    height="720"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-[#1E3A5F]/40 group-hover:bg-[#1E3A5F]/20 transition-colors" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#E8654A] flex items-center justify-center shadow-2xl shadow-[#E8654A]/40 group-hover:scale-110 transition-transform">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-mono px-2 py-0.5 rounded">
                    2:02
                  </div>
                </button>
              ) : (
                /* Real iframe — only loaded after user clicks */
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&color=white&autoplay=1`}
                  title="Sagar RC — Portfolio Walkthrough | SARA AI + Projects Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <a
            href={`https://youtu.be/${VIDEO_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-[#E8654A] text-[#E8654A] text-sm font-semibold hover:bg-[#E8654A] hover:text-white transition-all hover:-translate-y-0.5"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch on YouTube
          </a>
          <a
            href="#terminal"
            onClick={(e) => { e.preventDefault(); document.querySelector('#terminal')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-[#1E3A5F] text-[#1E3A5F] text-sm font-semibold hover:bg-[#1E3A5F] hover:text-white transition-all hover:-translate-y-0.5"
          >
            Try SARA →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
