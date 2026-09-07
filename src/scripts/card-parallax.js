import gsap from "gsap";

// Léger parallax de l'image au survol des cartes de la grille de projets.
// Le zoom (scale) reste géré en CSS (transition-transform) sur l'<img>
// elle-même ; ce script anime en plus, via GSAP, la translation du wrapper
// parent — deux éléments distincts pour que les deux transformations se
// composent sans se réécrire l'une l'autre (jank évité, mouvement fluide).
function initCardParallax() {
  const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!supportsHover || reduceMotion) return;

  document.querySelectorAll(".pswp-gallery").forEach((card) => {
    const target = card.querySelector("[data-parallax-card]");
    if (!target) return;

    const moveX = gsap.quickTo(target, "x", { duration: 0.6, ease: "power3.out" });
    const moveY = gsap.quickTo(target, "y", { duration: 0.6, ease: "power3.out" });

    const handleMove = (event) => {
      const rect = card.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      moveX(relX * 18);
      moveY(relY * 18);
    };

    const reset = () => {
      moveX(0);
      moveY(0);
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", reset);
  });
}

document.addEventListener("astro:page-load", initCardParallax);
