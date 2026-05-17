import { useEffect, useRef, useState } from "react";

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// A quiet entrance: fade and a small lift the first time an element scrolls
// into view. Once revealed it stays revealed — no flicker on the way back up.
// If the visitor asked for reduced motion, everything is just shown at once.
export default function useReveal(options = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(() => prefersReduced());

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px", ...options }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [ref, shown];
}
