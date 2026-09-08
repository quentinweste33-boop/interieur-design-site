// En dessous de 768px : pas de vidéo, seul le poster (déjà affiché en <img>)
// est servi, pour ne pas plomber le temps de chargement mobile.
const ELIGIBLE_QUERY = "(min-width: 768px)";
// Entre 768px et 1280px (tablettes, petits laptops, connexions souvent plus
// contraintes) : version 720p plus légère plutôt que la 1080p desktop.
const HIGH_QUALITY_QUERY = "(min-width: 1280px)";

let mediaQueryListenerAttached = false;

function loadHeroVideo() {
  const video = document.querySelector("[data-hero-video]");
  if (!video || video.dataset.loaded === "true") return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const eligible = window.matchMedia(ELIGIBLE_QUERY).matches;
  if (reduceMotion || !eligible) return;

  const isHighQuality = window.matchMedia(HIGH_QUALITY_QUERY).matches;
  const src = isHighQuality ? video.dataset.src : video.dataset.srcLite;

  const source = document.createElement("source");
  source.src = src;
  source.type = "video/mp4";
  video.appendChild(source);
  video.load();
  video.dataset.loaded = "true";

  // Le poster (image séparée sous la vidéo) reste visible jusqu'à ce que la
  // lecture démarre réellement : la vidéo apparaît alors en fondu (transition
  // CSS déjà posée sur l'élément), sans flash ni saut de contenu.
  video.addEventListener(
    "playing",
    () => {
      video.classList.remove("opacity-0");
    },
    { once: true },
  );

  video.play().catch(() => {
    // autoplay peut être refusé par le navigateur ; le poster reste affiché.
  });
}

function initHeroVideo() {
  loadHeroVideo();

  if (!mediaQueryListenerAttached) {
    const mql = window.matchMedia(ELIGIBLE_QUERY);
    const handler = () => loadHeroVideo();
    if (mql.addEventListener) mql.addEventListener("change", handler);
    else mql.addListener(handler);
    mediaQueryListenerAttached = true;
  }
}

document.addEventListener("astro:page-load", initHeroVideo);
