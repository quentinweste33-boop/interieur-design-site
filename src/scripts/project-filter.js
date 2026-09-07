import gsap from "gsap";

function initProjectFilter() {
  const buttons = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-category]");
  if (!buttons.length) return;

  function applyFilter(filter) {
    buttons.forEach((btn) => {
      const active = btn.dataset.filter === filter;
      btn.classList.toggle("text-anthracite", active);
      btn.classList.toggle("text-anthracite/40", !active);
    });

    const toShow = [];
    const toHide = [];

    cards.forEach((card) => {
      const matches = filter === "tous" || card.dataset.category === filter;
      if (matches) toShow.push(card);
      else toHide.push(card);
    });

    gsap.to(toHide, {
      opacity: 0,
      duration: 0.25,
      onComplete: () => toHide.forEach((c) => c.classList.add("hidden")),
    });

    toShow.forEach((c) => c.classList.remove("hidden"));
    gsap.fromTo(
      toShow,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, stagger: 0.04, delay: toHide.length ? 0.25 : 0 },
    );
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.filter));
  });
}

// Element-scoped: re-queried and re-bound on every astro:page-load since the
// buttons/cards are fresh DOM nodes after each View Transition navigation.
document.addEventListener("astro:page-load", initProjectFilter);
