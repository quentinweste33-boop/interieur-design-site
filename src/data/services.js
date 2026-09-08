// Placeholders Unsplash — la référence (tahiti-design-haven.lovable.app)
// réutilise les mêmes visuels génériques d'une carte à l'autre (stock du
// précédent prestataire, pas de vraies photos de projets). On ne les
// récupère donc pas : ces images restent à remplacer par les vraies photos
// une fois reçues de la cliente.
const u = (id) =>
  `https://images.unsplash.com/photo-${id}?w=1200&h=900&q=80&auto=format&fit=crop`;

export const services = [
  {
    number: "01",
    title: "Consultation projet",
    description:
      "Une consultation à l'agence pour définir votre projet, suivie d'une visite de terrain pour garantir une réalisation conforme à vos attentes.",
    image: u("1611048267451-e6ed903d4a38"),
  },
  {
    number: "02",
    title: "Conseils à domicile",
    description:
      "Un service personnalisé d'environ 2 heures chez vous pour vous conseiller dans la transformation de vos espaces selon vos goûts et besoins.",
    image: u("1704040686510-b747ff423ebb"),
  },
  {
    number: "03",
    title: "Optimisation en plan",
    description:
      "Une réflexion approfondie en plans 2D détaillés et précis, dans une approche personnalisée pour optimiser l'aménagement de vos espaces.",
    image: u("1598928506311-c55ded91a20c"),
  },
  {
    number: "04",
    title: "Projection 3D",
    description:
      "Création de vos espaces en 3D avec visuels photoréalistes sous forme de book ou vidéo immersive pour vous projeter dans vos futurs lieux.",
    image: u("1704040686413-2c607dbd2f06"),
  },
  {
    number: "05",
    title: "Budgétisation",
    description:
      "Budgétisation détaillée de votre projet par lot et sélection des artisans pour une gestion efficace et une réalisation de qualité.",
    image: u("1634822929277-0c51ca0e8846"),
  },
  {
    number: "06",
    title: "Mobiliers sur mesure",
    description:
      "Conception et fabrication de mobiliers sur mesure, solutions uniques adaptées à vos espaces. Fabrication locale ou internationale.",
    image: u("1621261027519-a71ac66d5a68"),
  },
  {
    number: "07",
    title: "Sourcing décoration",
    description:
      "Sélection de mobiliers et objets de décoration uniques auprès de fournisseurs variés, pour une finition harmonieuse de vos intérieurs.",
    image: u("1630905119003-329447458f85"),
  },
  {
    number: "08",
    title: "Gestion des permis",
    description:
      "Prise en charge des démarches administratives nécessaires à l'obtention des autorisations requises pour votre projet.",
    image: u("1757924461488-ef9ad0670978"),
  },
  {
    number: "09",
    title: "Pilotage de chantier",
    description:
      "Suivi professionnel tout au long du chantier, dans le respect des délais et budgets convenus ensemble.",
    image: u("1660599197052-c610e8a15c9e"),
  },
];
