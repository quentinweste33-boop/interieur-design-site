import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function initRevealAnimations() {
  const targets = gsap.utils.toArray("[data-reveal]");
  if (!targets.length) return;

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

// astro:page-load se déclenche au chargement initial ET après chaque
// transition de page (View Transitions), contrairement à un script de module
// classique qui ne s'exécute qu'une seule fois par contenu identique.
document.addEventListener("astro:page-load", initRevealAnimations);
