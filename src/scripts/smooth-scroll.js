import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.1,
  smoothWheel: true,
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Avec les View Transitions d'Astro, le document n'est pas rechargé entre les
// pages : les ScrollTrigger de la page précédente doivent être détruits avant
// que la nouvelle page n'installe les siens (reveal-animations, grid-stagger),
// puis on rafraîchit une fois que tous les nouveaux triggers sont en place.
document.addEventListener("astro:before-swap", () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});

document.addEventListener("astro:page-load", () => {
  requestAnimationFrame(() => ScrollTrigger.refresh());
});

export default lenis;
