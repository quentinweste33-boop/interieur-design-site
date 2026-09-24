// Texte réel repris du site officiel de la cliente
// (interieurdesigntahiti.com). Image de l'item 02 : placeholder Unsplash
// générique (stock, en attendant une vraie photo de Nathalie). Images des
// items 04-09 : visuels stock eux aussi, mais repris de la maquette de
// référence du précédent prestataire plutôt que des placeholders Unsplash
// choisis au hasard — au moins cohérents avec l'action de chaque service.
const u = (id) =>
  `https://images.unsplash.com/photo-${id}?w=1200&h=900&q=80&auto=format&fit=crop`;

export const services = [
  {
    number: "01",
    title: "Consultation projet",
    description: "Consultation pour définir votre projet & prise de côtes sur site.",
    // Vraie photo fournie par la cliente.
    image: "/images/services/consultation-projet.jpg",
  },
  {
    number: "02",
    title: "Conseils à domicile",
    description:
      "Service de conseils à domicile, environ 2 heures, pour vous accompagner dans la transformation de vos espaces.",
    image: u("1704040686510-b747ff423ebb"),
  },
  {
    number: "03",
    title: "Optimisation en plan",
    description: "Optimisation de vos espaces : propositions en plan 2D détaillées et précises.",
    // Vrai plan 2D fourni par la cliente (document technique, cotations) —
    // affiché en entier (object-contain) plutôt que recadré, pour ne pas
    // couper les cotations.
    image: "/images/services/optimisation-en-plan.png",
    imageFit: "contain",
  },
  {
    number: "04",
    title: "Projection 3D",
    description:
      "Projection dans vos futurs espaces : book photo ou vidéo 3D en visuels photoréalistes.",
    image: "/images/services/projection-3d.jpg",
  },
  {
    number: "05",
    title: "Budgétisation",
    description: "Budgétisation détaillée de votre projet par lot & sélection des artisans.",
    image: "/images/services/budgetisation.jpg",
  },
  {
    number: "06",
    title: "Mobiliers sur mesure",
    description: "Fabrication de mobiliers sur mesure & plans techniques.",
    image: "/images/services/mobiliers-sur-mesure.png",
  },
  {
    number: "07",
    title: "Sourcing décoration",
    description: "Sourcing de mobiliers & décoration, gestion des commandes.",
    image: "/images/services/sourcing-decoration.jpg",
  },
  {
    number: "08",
    title: "Gestion des permis",
    description: "Gestion administrative des permis nécessaires à votre projet.",
    image: "/images/services/gestion-des-permis.jpg",
  },
  {
    number: "09",
    title: "Pilotage de chantier",
    description: "Supervision & pilotage de chantier de A à Z.",
    image: "/images/services/pilotage-de-chantier.jpg",
  },
];
