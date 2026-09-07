// Assets placeholder (Unsplash) — a remplacer par les vraies photos des projets
// une fois recues.
export const PSWP_WIDTH = 1600;
export const PSWP_HEIGHT = 1067;

const u = (id, w = PSWP_WIDTH, h = PSWP_HEIGHT) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&q=80&auto=format&fit=crop`;

export const categories = [
  { slug: "hotels", label: "Hôtels" },
  { slug: "residentiel", label: "Résidentiels" },
  { slug: "retail", label: "Retail" },
  { slug: "restaurant", label: "Restaurant" },
  { slug: "scenographie", label: "Scénographie" },
];

export const projects = [
  {
    id: "hotel-le-corail",
    title: "Hôtel Le Corail",
    category: "hotels",
    location: "Bora Bora",
    year: "2024",
    cover: u("1758193783649-13371d7fb8dd"),
    images: [
      u("1758193783649-13371d7fb8dd"),
      u("1646991761123-d83ce47c30c9"),
      u("1742844552700-3926862c5311"),
    ],
  },
  {
    id: "hotel-manava",
    title: "Hôtel Manava",
    category: "hotels",
    location: "Moorea",
    year: "2023",
    cover: u("1758714919725-d2740fc99f14"),
    images: [
      u("1758714919725-d2740fc99f14"),
      u("1775866914943-ba1415a35afc"),
      u("1781962479780-b910226837a3"),
    ],
  },
  {
    id: "villa-tefana",
    title: "Villa Tefana",
    category: "residentiel",
    location: "Punaauia",
    year: "2024",
    cover: u("1611048267451-e6ed903d4a38"),
    images: [
      u("1611048267451-e6ed903d4a38"),
      u("1598928506311-c55ded91a20c"),
      u("1704040686510-b747ff423ebb"),
    ],
  },
  {
    id: "residence-vaima",
    title: "Résidence Vaima",
    category: "residentiel",
    location: "Papeete",
    year: "2023",
    cover: u("1757924461488-ef9ad0670978"),
    images: [
      u("1757924461488-ef9ad0670978"),
      u("1704040686413-2c607dbd2f06"),
      u("1634822929277-0c51ca0e8846"),
    ],
  },
  {
    id: "boutique-heiva",
    title: "Boutique Heiva",
    category: "retail",
    location: "Papeete",
    year: "2024",
    cover: u("1441986300917-64674bd600d8"),
    images: [
      u("1441986300917-64674bd600d8"),
      u("1441984904996-e0b6ba687e04"),
      u("1570857502809-08184874388e"),
    ],
  },
  {
    id: "concept-store-marara",
    title: "Concept Store Marara",
    category: "retail",
    location: "Fare Ute",
    year: "2023",
    cover: u("1660599197052-c610e8a15c9e"),
    images: [
      u("1660599197052-c610e8a15c9e"),
      u("1630905119003-329447458f85"),
      u("1621261027519-a71ac66d5a68"),
    ],
  },
  {
    id: "restaurant-la-perle",
    title: "Restaurant La Perle",
    category: "restaurant",
    location: "Papeete",
    year: "2024",
    cover: u("1643101570532-88c8ecc07c1f"),
    images: [
      u("1643101570532-88c8ecc07c1f"),
      u("1788180622439-0856a986fac5"),
      u("1776993298576-dd8a9205926f"),
    ],
  },
  {
    id: "table-de-nath",
    title: "La Table de Nath",
    category: "restaurant",
    location: "Punaauia",
    year: "2022",
    cover: u("1583354608715-177553a4035e"),
    images: [
      u("1583354608715-177553a4035e"),
      u("1602232037779-30b01ac3c457"),
      u("1776993298445-08f2737de35f"),
    ],
  },
  {
    id: "scenographie-heiva-i-tahiti",
    title: "Heiva i Tahiti — Scénographie",
    category: "scenographie",
    location: "Place Toata",
    year: "2024",
    cover: u("1558970439-add78fc68990"),
    images: [
      u("1558970439-add78fc68990"),
      u("1562329265-95a6d7a83440"),
      u("1565798828737-01777ecbcd33"),
    ],
  },
  {
    id: "scenographie-gala-annuel",
    title: "Gala Annuel — Scénographie",
    category: "scenographie",
    location: "Papeete",
    year: "2023",
    cover: u("1576544403918-c47d52572a9a"),
    images: [
      u("1576544403918-c47d52572a9a"),
      u("1580796789419-ac5a49fabc9b"),
      u("1494435619026-9e21da76be75"),
    ],
  },
];

export const heroPoster = u("1711873316332-acb6930211e1", 2400, 1350);
export const founderPortrait = u("1581065178047-8ee15951ede6", 1200, 1500);
