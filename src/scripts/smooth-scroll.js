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

// Astro remet nativement le scroll à 0 (ou restaure la position mémorisée en
// navigation arrière) juste avant de déclencher "astro:after-swap" — mais
// Lenis ignore ce changement : sa propre position animée reste celle de la
// page précédente, et le prochain tick de son rAF (gsap.ticker, indépendant
// du swap) la réapplique, ramenant visuellement le scroll à l'endroit où il
// était avant le clic. Effet observé : cliquer sur un projet en ayant déjà
// scrollé loin (grille /projets, tuile home, bouton "voir d'autres projets")
// ouvre parfois la nouvelle page au milieu ou en bas au lieu du haut. On
// resynchronise donc Lenis sur la position native — déjà correcte à ce
// stade, qu'elle soit 0 (nouvelle page) ou restaurée (navigation arrière) —
// immédiatement après le swap, avant que son rAF n'ait la main.
document.addEventListener("astro:after-swap", () => {
  lenis.scrollTo(window.scrollY, { immediate: true, force: true });
});

document.addEventListener("astro:page-load", () => {
  requestAnimationFrame(() => ScrollTrigger.refresh());
});

export default lenis;
