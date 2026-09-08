// Carrousel horizontal léger (scroll-snap natif + boutons précédent/suivant),
// sans dépendance externe. Chaque conteneur [data-carousel] gère sa propre
// piste défilante et ses flèches ; les cartes hors-champ restent scrollables
// au doigt/trackpad, les flèches avancent d'une carte à la fois.
function initCarousel(carousel) {
  const track = carousel.querySelector("[data-carousel-track]");
  const prev = carousel.querySelector("[data-carousel-prev]");
  const next = carousel.querySelector("[data-carousel-next]");
  if (!track || !prev || !next) return;

  const step = (direction) => {
    const card = track.querySelector("[data-carousel-card]");
    const gap = parseFloat(getComputedStyle(track).columnGap || "0");
    const amount = card ? card.getBoundingClientRect().width + gap : track.clientWidth;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  const updateDisabled = () => {
    const maxScroll = track.scrollWidth - track.clientWidth - 1;
    prev.disabled = track.scrollLeft <= 0;
    next.disabled = track.scrollLeft >= maxScroll;
  };

  prev.addEventListener("click", () => step(-1));
  next.addEventListener("click", () => step(1));
  track.addEventListener("scroll", updateDisabled, { passive: true });
  new ResizeObserver(updateDisabled).observe(track);

  updateDisabled();
}

function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach(initCarousel);
}

document.addEventListener("astro:page-load", initCarousels);
