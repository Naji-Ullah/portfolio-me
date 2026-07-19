import { useEffect } from "react";

// Progressive reveal: elements marked [data-reveal] fade in as they enter
// the viewport. The hidden state only applies once <html> is "reveal-armed",
// so crawlers, no-JS readers and the prerendered HTML always see everything.
export default function useReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!els.length) return;

    // Anything already on screen stays visible — no flash on hydration.
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("is-in");
    });
    document.documentElement.classList.add("reveal-armed");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      document.documentElement.classList.remove("reveal-armed");
    };
  }, []);
}
