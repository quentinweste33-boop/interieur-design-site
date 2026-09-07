import PhotoSwipeLightbox from "photoswipe/lightbox";

document.querySelectorAll(".pswp-gallery").forEach((galleryEl) => {
  const lightbox = new PhotoSwipeLightbox({
    gallery: galleryEl,
    children: "a",
    pswpModule: () => import("photoswipe"),
    showHideAnimationType: "fade",
    bgOpacity: 0.95,
  });
  lightbox.init();
});
