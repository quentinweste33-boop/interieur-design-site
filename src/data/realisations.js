// Les 6 emplacements du carrousel "Réalisations" pointent tous vers un vrai
// projet — voir data/projects.js — via projectId. L'ordre alterne
// résidentiel / hôtellerie / bureaux pour que chaque paire visible sur
// desktop (2 cartes à la fois) soit variée.
export const realisations = [
  {
    title: "Maison Individuelle",
    category: "Résidentiels",
    image: "/images/maison-individuelle/cover.jpg",
    projectId: "maison-individuelle",
  },
  {
    title: "Niu Beach Hôtel Moorea",
    category: "Hôtels",
    image: "/images/niu-beach-hotel-moorea/cover.jpg",
    projectId: "niu-beach-hotel-moorea",
  },
  {
    title: "InterContinental Bora Bora",
    category: "Hôtels",
    image: "/images/intercontinental-bora-bora-lobby/01.jpg",
    projectId: "intercontinental-bora-bora-lobby",
  },
  {
    title: "Maison particulière",
    category: "Résidentiels",
    image: "/images/maison-particuliere/07.jpg",
    projectId: "maison-particuliere",
  },
  {
    title: "Hôtel Le Tahiti",
    category: "Hôtels",
    image: "/images/hotel-le-tahiti-arue/02.jpg",
    projectId: "hotel-le-tahiti-arue",
  },
  {
    title: "Agence de communication",
    category: "Bureaux/Tertiaire",
    image: "/images/agence-communication-bureaux/01.jpg",
    projectId: "agence-communication-bureaux",
  },
];
