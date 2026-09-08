// Texte réel repris du site officiel de la cliente
// (interieurdesigntahiti.com). Images en placeholders Unsplash — la
// référence de mise en page réutilise elle-même des visuels génériques
// d'une carte à l'autre (stock du précédent prestataire, pas de vraies
// photos de projets), à remplacer par les vraies photos une fois reçues.
const u = (id) =>
  `https://images.unsplash.com/photo-${id}?w=1200&h=900&q=80&auto=format&fit=crop`;

export const services = [
  {
    number: "01",
    title: "Consultation projet",
    description: "Consultation pour définir votre projet & prise de côtes sur site.",
    image: u("1611048267451-e6ed903d4a38"),
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
    image: u("1598928506311-c55ded91a20c"),
  },
  {
    number: "04",
    title: "Projection 3D",
    description:
      "Projection dans vos futurs espaces : book photo ou vidéo 3D en visuels photoréalistes.",
    image: u("1704040686413-2c607dbd2f06"),
  },
  {
    number: "05",
    title: "Budgétisation",
    description: "Budgétisation détaillée de votre projet par lot & sélection des artisans.",
    image: u("1634822929277-0c51ca0e8846"),
  },
  {
    number: "06",
    title: "Mobiliers sur mesure",
    description: "Fabrication de mobiliers sur mesure & plans techniques.",
    image: u("1621261027519-a71ac66d5a68"),
  },
  {
    number: "07",
    title: "Sourcing décoration",
    description: "Sourcing de mobiliers & décoration, gestion des commandes.",
    image: u("1630905119003-329447458f85"),
  },
  {
    number: "08",
    title: "Gestion des permis",
    description: "Gestion administrative des permis nécessaires à votre projet.",
    image: u("1757924461488-ef9ad0670978"),
  },
  {
    number: "09",
    title: "Pilotage de chantier",
    description: "Supervision & pilotage de chantier de A à Z.",
    image: u("1660599197052-c610e8a15c9e"),
  },
];
