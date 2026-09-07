const SCROLL_THRESHOLD = 40;

const OVERLAY_SCROLLED_CLASSES = ["bg-ivoire/95", "backdrop-blur-sm", "text-anthracite", "border-pierre/40"];
const OVERLAY_TRANSPARENT_CLASSES = ["bg-transparent", "text-ivoire", "border-transparent"];
const SHADOW_CLASSES = ["shadow-[0_1px_20px_rgba(0,0,0,0.06)]"];

let scrollListenerAttached = false;

function update() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const isOverlay = header.dataset.overlay === "true";
  const scrolled = window.scrollY > SCROLL_THRESHOLD;

  header.classList.toggle("is-scrolled", scrolled);

  if (isOverlay) {
    OVERLAY_SCROLLED_CLASSES.forEach((c) => header.classList.toggle(c, scrolled));
    OVERLAY_TRANSPARENT_CLASSES.forEach((c) => header.classList.toggle(c, !scrolled));
  }

  SHADOW_CLASSES.forEach((c) => header.classList.toggle(c, scrolled));
}

// Le header est fixed sur les 4 pages : cette fonction lui donne un fond
// (et une ombre) dès que l'on scrolle, qu'il démarre transparent
// (Accueil, superposé à la vidéo) ou déjà clair (pages intérieures).
function initHeaderScroll() {
  update();

  // Un seul listener "window" persistant : le header étant recréé à chaque
  // transition de page, on relit son état à chaque scroll plutôt que de
  // réattacher un listener par navigation (ce qui les empilerait).
  if (!scrollListenerAttached) {
    window.addEventListener(
      "scroll",
      () => requestAnimationFrame(update),
      { passive: true },
    );
    scrollListenerAttached = true;
  }
}

document.addEventListener("astro:page-load", initHeaderScroll);
