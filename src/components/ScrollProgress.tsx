import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setPct(total > 0 ? Math.round((scrolled / total) * 1000) / 10 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none"
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page reading progress"
    >
      <div
        className="h-full rounded-r-full transition-[width] duration-100 ease-out"
        style={{
          width: `${pct}%`,
          background: 'linear-gradient(90deg, #1E3A5F 0%, #E8654A 55%, #FF8A6A 100%)',
          boxShadow: '0 0 10px rgba(232,101,74,0.5)',
        }}
      />
    </div>
  );
}
