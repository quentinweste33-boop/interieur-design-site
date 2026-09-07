import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Cascade dédiée à la grille de projets : contrairement au fade générique
// (data-reveal), chaque carte de [data-stagger-grid] apparaît l'une après
// l'autre au lieu d'un fondu uniforme de toutes les cartes en même temps.
function initGridStagger() {
  document.querySelectorAll("[data-stagger-grid]").forEach((grid) => {
    const items = grid.querySelectorAll("[data-stagger-item]");
    if (!items.length) return;

    ScrollTrigger.create({
      trigger: grid,
      start: "top 85%",
      once: true,
      onEnter: () =>
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: { each: 0.09, from: "start" },
        }),
    });
  });
}

document.addEventListener("astro:page-load", initGridStagger);
