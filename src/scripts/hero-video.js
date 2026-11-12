// La vidéo joue désormais sur tous les écrans, y compris mobile : seule la
// qualité varie pour rester légère sur les petits écrans/connexions.
// En dessous de 1280px (mobile, tablette, petits laptops) : version 720p
// plus légère (hero-lite.mp4) ; au-dessus, la 1080p desktop.
const HIGH_QUALITY_QUERY = "(min-width: 1280px)";

function loadHeroVideo() {
  const video = document.querySelector("[data-hero-video]");
  if (!video || video.dataset.loaded === "true") return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  const isHighQuality = window.matchMedia(HIGH_QUALITY_QUERY).matches;
  const src = isHighQuality ? video.dataset.src : video.dataset.srcLite;

  const source = document.createElement("source");
  source.src = src;
  source.type = "video/mp4";
  video.appendChild(source);
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

  // load() réinitialise l'élément : un play() appelé dans la foulée est
  // souvent rejeté (AbortError) car la source n'a pas encore de données
  // exploitables — sans retry, la vidéo restait alors en pause indéfiniment
  // (le poster ne disparaissait jamais). On retente donc dès que le
  // navigateur signale qu'il peut démarrer la lecture ("canplay"), en plus
  // d'une tentative immédiate pour les navigateurs qui n'en ont pas besoin.
  const attemptPlay = () => {
    video.play()?.catch((error) => {
      // Autoplay réellement refusé par le navigateur (rare pour une vidéo
      // muted, mais possible) : rien à tenter de plus, le poster reste
      // affiché. Toute autre erreur (typiquement AbortError juste après
      // load()) est déjà couverte par le retry sur "canplay" ci-dessous.
      if (error?.name === "NotAllowedError") return;
    });
  };

  video.addEventListener("canplay", attemptPlay, { once: true });
  video.load();
  attemptPlay();
}

function initHeroVideo() {
  loadHeroVideo();
}

document.addEventListener("astro:page-load", initHeroVideo);
