import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

/**
 * Custom hook for cinematic scroll-triggered anime.js animations.
 * Returns a ref to attach to the container element.
 * 
 * @param {Function} callback - receives (element, anime) when element enters viewport
 * @param {Object} options - { threshold, rootMargin, repeat }
 */
export default function useScrollReveal(callback, options = {}) {
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          callback(el, anime);
          if (!options.repeat) observer.disconnect();
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
