import { useEffect, useRef, useState } from 'react';

/**
 * Lightweight alternative to Framer Motion's useInView + motion.div.
 * Uses IntersectionObserver — zero extra JS bundle cost.
 * Returns [ref, isVisible] — apply ref to the element, toggle classes on isVisible.
 */
export function useScrollReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.1, rootMargin: '-60px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible] as const;
}
