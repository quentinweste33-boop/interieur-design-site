import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function initRevealAnimations() {
  const targets = gsap.utils.toArray("[data-reveal]");

  ScrollTrigger.batch(targets, {
    start: "top 88%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
      }),
  });
}

initRevealAnimations();
