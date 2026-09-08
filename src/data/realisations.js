// Placeholders Unsplash (voir note dans services.js) — à remplacer par de
// vraies photos de réalisations une fois reçues de la cliente.
const u = (id) =>
  `https://images.unsplash.com/photo-${id}?w=1600&h=1200&q=80&auto=format&fit=crop`;

export const realisations = [
  {
    title: "Séjour contemporain",
    category: "Résidentiel",
    image: u("1758193783649-13371d7fb8dd"),
  },
  {
    title: "Rénovation complète",
    category: "Maison",
    image: u("1758714919725-d2740fc99f14"),
  },
  {
    title: "Mobilier sur mesure",
    category: "Conception",
    image: u("1775866914943-ba1415a35afc"),
  },
  {
    title: "Décoration d'intérieur",
    category: "Sourcing",
    image: u("1781962479780-b910226837a3"),
  },
  {
    title: "Aménagement de pièces",
    category: "Particulier",
    image: u("1441986300917-64674bd600d8"),
  },
  {
    title: "Consultation studio",
    category: "Agence",
    image: u("1441984904996-e0b6ba687e04"),
  },
];
