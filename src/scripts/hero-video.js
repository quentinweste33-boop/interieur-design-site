const MIN_WIDTH_QUERY = "(min-width: 768px)";

let mediaQueryListenerAttached = false;

function loadHeroVideo() {
  const video = document.querySelector("[data-hero-video]");
  if (!video || video.dataset.loaded === "true") return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wideEnough = window.matchMedia(MIN_WIDTH_QUERY).matches;
  if (reduceMotion || !wideEnough) return;

  const source = document.createElement("source");
  source.src = video.dataset.src;
  source.type = "video/mp4";
  video.appendChild(source);
  video.load();
  video.dataset.loaded = "true";
  video.play().catch(() => {
    // autoplay peut être refusé par le navigateur ; le poster reste affiché.
  });
}

// Sur mobile, seule l'image poster (déjà chargée en <img> de fond via
// l'attribut poster) doit être servie : le fichier vidéo n'est demandé que
// si l'écran est assez large, pour ne pas plomber le temps de chargement.
function initHeroVideo() {
  loadHeroVideo();

  if (!mediaQueryListenerAttached) {
    const mql = window.matchMedia(MIN_WIDTH_QUERY);
    const handler = () => loadHeroVideo();
    if (mql.addEventListener) mql.addEventListener("change", handler);
    else mql.addListener(handler);
    mediaQueryListenerAttached = true;
  }
}

document.addEventListener("astro:page-load", initHeroVideo);
