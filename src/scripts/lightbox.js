import PhotoSwipeLightbox from "photoswipe/lightbox";

let activeLightboxes = [];

function initLightbox() {
  // Détruit les instances de la page précédente : PhotoSwipeLightbox
  // attache des écouteurs au document, qui doivent être nettoyés avant de
  // ré-instancier sur la nouvelle page (View Transitions ne rechargent pas
  // le document).
  activeLightboxes.forEach((lightbox) => lightbox.destroy());
  activeLightboxes = [];

  document.querySelectorAll(".pswp-gallery").forEach((galleryEl) => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: galleryEl,
      children: "a",
      pswpModule: () => import("photoswipe"),
      showHideAnimationType: "fade",
      bgOpacity: 0.95,
    });
    lightbox.init();
    activeLightboxes.push(lightbox);
  });
}

document.addEventListener("astro:page-load", initLightbox);
