import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Reveal a group of elements as they scroll into view (staggered).
function reveal(selector, { y = 40, stagger = 0.1, duration = 0.8 } = {}) {
  const els = gsap.utils.toArray(selector);
  if (!els.length) return;

  gsap.set(els, { opacity: 0, y });
  ScrollTrigger.batch(els, {
    start: "top 88%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: "power3.out",
        overwrite: true,
        clearProps: "transform",
      }),
  });
}

export default function useGsapAnimations() {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    // Only animate for people who haven't asked for reduced motion
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Scroll progress bar
      gsap.set("#scroll-progress", { scaleX: 0, transformOrigin: "left center" });
      gsap.to("#scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
      });

      // Section headings
      reveal("#about h2, #projects h2, #skills h2, #contact h2, #contact h2 + p", {
        y: 30,
        stagger: 0.12,
      });

      // About cards
      reveal("#about .grid > div", { stagger: 0.15 });

      // Skill group titles and cards
      reveal("#skills h3", { y: 20 });
      reveal("#skills li", { y: 30, stagger: 0.05, duration: 0.6 });

      // Project cards
      reveal("#projects article", { y: 50, stagger: 0.15, duration: 0.9 });

      // Contact blocks
      reveal("#contact ul li, #contact form", { stagger: 0.12 });

      // Layout shifts (images loading) can move trigger positions
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);

      return () => window.removeEventListener("load", refresh);
    });

    return () => mm.revert();
  }, []);
}