import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function initRevealAnimations() {
  const targets = gsap.utils.toArray("[data-reveal]");
  if (targets.length) {
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

  // Révélation "premium" dédiée aux photos de la galerie projet (effet
  // recherché par la cliente) : en plus du fondu/translation ci-dessus, un
  // léger flou se dissipe et l'image se redimensionne très légèrement
  // (scale 1.04 → 1), comme une mise au point qui se fait à l'approche du
  // visiteur — volontairement distinct de l'animation de texte ci-dessus.
  const photoTargets = gsap.utils.toArray("[data-reveal-photo]");
  if (photoTargets.length) {
    ScrollTrigger.batch(photoTargets, {
      start: "top 90%",
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.3,
          ease: "power2.out",
          stagger: 0.1,
        }),
    });
  }
}

// astro:page-load se déclenche au chargement initial ET après chaque
// transition de page (View Transitions), contrairement à un script de module
// classique qui ne s'exécute qu'une seule fois par contenu identique.
document.addEventListener("astro:page-load", initRevealAnimations);
