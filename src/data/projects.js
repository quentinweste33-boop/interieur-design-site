// Dimensions par défaut de la galerie éditoriale (ProjectStoryGallery) pour
// les projets qui n'ont pas leurs dimensions réelles renseignées.
export const PSWP_WIDTH = 1600;
export const PSWP_HEIGHT = 1067;

// Un seul filtre par catégorie effectivement représentée dans `projects` —
// pas de bouton menant à une grille vide (retail, restaurant et
// scénographie n'ont plus de projet réel depuis le retrait des placeholders).
export const categories = [
  { slug: "hotels", label: "Hôtels" },
  { slug: "residentiel", label: "Résidentiels" },
  { slug: "bureaux", label: "Bureaux/Tertiaire" },
];

// Vrais projets à galerie de photos libre (un seul texte de présentation,
// pas de texte par photo) : chaque photo porte son propre alt et ses
// dimensions réelles. Les fichiers sont rangés dans public/images/<id>/NN.jpg
// dans l'ordre d'affichage. Voir ProjectPhotoGallery.astro.
const photo = (folder, file, width, height, alt) => ({
  src: `/images/${folder}/${file}.jpg`,
  width,
  height,
  alt,
});

const tahitiPhotos = (() => {
  const f = "hotel-le-tahiti-arue";
  const t = "Hôtel Le Tahiti, Arue";
  return [
    photo(f, "01", 2000, 1333, `${t} — suite : baignoire spa face à un panneau mural de grandes feuilles tropicales`),
    photo(f, "02", 2000, 1333, `${t} — suite : lit à tête de lit en bois arrondie devant la tapisserie murale graphique sur mesure`),
    photo(f, "03", 2000, 1333, `${t} — suite : coin salon, canapé gris et fauteuils en bois devant la tapisserie murale sur mesure`),
    photo(f, "04", 2000, 1333, `${t} — suite : porte coulissante sur la salle de bain, armoire habillée de tissu et suspensions noires`),
    photo(f, "05", 2000, 1333, `${t} — suite : chambre ouverte sur la terrasse et l'océan, banc en pierre au pied du lit`),
    photo(f, "06", 2000, 1333, `${t} — suite : baignoire spa en terrasse face à l'océan au coucher du soleil`),
    photo(f, "07", 2000, 1333, `${t} — suite : tête de lit en bois à chevrons, fauteuils en teck et lampadaires à globes`),
    photo(f, "08", 2000, 1333, `${t} — suite : baignoire spa devant le mur de feuilles, terrasse ouverte sur le lagon`),
    photo(f, "09", 2000, 1333, `${t} — suite : salon vu depuis la terrasse, fauteuils en corde tressée et guéridon jaune`),
  ];
})();

const boraPhotos = (() => {
  const f = "intercontinental-bora-bora-lobby";
  const t = "InterContinental Bora Bora, lobby";
  return [
    photo(f, "01", 1500, 2000, `${t} — suspensions en fleurs de fibres tressées sous la charpente et la toiture traditionnelle`),
    photo(f, "02", 1500, 2000, `${t} — salon lounge : fauteuils en rotin blanc et velours terracotta sur un tapis à motifs végétaux, banque d'accueil au fond`),
    photo(f, "03", 1500, 2000, `${t} — pavillon d'entrée : bancs en bois, colonnes de bambou et jardin tropical`),
    photo(f, "04", 1500, 2000, `${t} — salon lounge : fauteuils terracotta et rotin blanc sous les suspensions en fleurs`),
    photo(f, "05", 1500, 2000, `${t} — détail des suspensions en fleurs de fibres tressées et des luminaires en osier`),
    photo(f, "06", 2000, 1500, `${t} — deux fauteuils en rotin blanc autour d'une table basse à piètement doré, devant les fenêtres sur le jardin`),
    photo(f, "07", 1500, 2000, `${t} — détail du tapis tissé aux motifs organiques vert sauge et vert foncé`),
    photo(f, "08", 1500, 2000, `${t} — fauteuils terracotta et rotin devant les portes-fenêtres en bois et bambou`),
  ];
})();

const agencePhotos = (() => {
  const f = "agence-communication-bureaux";
  const t = "Agence de communication, bureaux";
  return [
    photo(f, "01", 2000, 1600, `${t} — open space : table de travail en chêne clair à pieds jaunes, chaises noires et mur gris anthracite`),
    photo(f, "02", 1413, 2000, `${t} — cloison à claire-voie en bois clair et latte jaune séparant l'accueil de l'open space`),
    photo(f, "03", 1333, 2000, `${t} — open space : suspensions à câbles colorés, garde-corps en métal déployé noir et grande baie vitrée`),
    photo(f, "04", 2000, 1333, `${t} — open space en longueur le long des baies vitrées, cadre jaune et tabouret jaune au premier plan`),
    photo(f, "05", 2000, 1581, `${t} — espace détente : plan de travail en bois et tabourets jaunes devant un mur noir`),
    photo(f, "06", 1333, 2000, `${t} — détail des pieds de table jaunes et des filets jaunes incrustés dans le plateau`),
  ];
})();

const maisonPhotos = (() => {
  const f = "maison-particuliere";
  const t = "Maison particulière";
  return [
    photo(f, "01", 427, 640, `${t} — cuisine : îlot sombre à plateau en bois brut et suspensions circulaires`),
    photo(f, "02", 640, 427, `${t} — salon : grande verrière en acier noir sur le jardin, fauteuil et ottoman Eames`),
    photo(f, "03", 427, 640, `${t} — salle à manger : suspensions sculpturales en rotin tressé au-dessus d'une table sombre`),
    photo(f, "04", 640, 427, `${t} — jardin d'eau intérieur : bassin, cascade et mur végétal sous un brise-soleil en bois`),
    photo(f, "05", 427, 640, `${t} — baie vitrée cadrant un tiki sculpté au cœur du jardin tropical`),
    photo(f, "06", 640, 427, `${t} — chambre ouverte sur la terrasse et les bananiers, vue sur l'océan`),
    photo(f, "07", 640, 427, `${t} — piscine à débordement et terrasse en bois face à l'océan et à l'île`),
    photo(f, "08", 640, 427, `${t} — chambre : tête de lit graphique à liserés cuivrés`),
    photo(f, "09", 640, 427, `${t} — cuisine : îlot en pierre sombre, plan de travail en bois brut et suspension circulaire`),
    photo(f, "10", 640, 427, `${t} — salon bibliothèque sur mesure en bois, canapé gris et enceinte bleue`),
  ];
})();

// `nom` : le nom propre donné par Nathalie à chaque projet (ex. "SAGE"),
// affiché en grand sur le bandeau d'ouverture plein écran de la fiche
// projet — à la place du titre descriptif, qui reste utilisé partout
// ailleurs (cartes, accueil) et sert de repli tant que `nom` est absent
// (voir bannerName dans pages/projets/[id].astro). En attente des 7 noms
// côté cliente : ne pas en inventer.
export const projects = [
  {
    id: "maison-particuliere",
    nom: null,
    title: "Maison particulière",
    subtitle: "Créer un écrin entre architecture et nature.",
    category: "residentiel",
    body: [
      "À partir d'une maison aux volumes relativement classiques, nous avons imaginé un univers authentique, généreux et profondément connecté à son environnement.",
      "L'objectif était de transformer les espaces sans les dénaturer, en leur apportant davantage de caractère, de profondeur et de respiration. Les matières naturelles, les lignes graphiques et les détails sur mesure viennent structurer les pièces tout en conservant une sensation de simplicité.",
      "Mais le véritable fil conducteur du projet est la végétation.",
      "Les jardins deviennent de véritables éléments d'architecture. Ils s'invitent dans les espaces de vie, accompagnent les circulations et créent des perspectives depuis l'intérieur. Dans la salle de bains, le jardin tropical devient même une pièce à part entière : la douche s'ouvre sur un écrin végétal et minéral, offrant une expérience presque extérieure.",
      "Dans la chambre, un mur graphique habillé de matière et souligné de détails métalliques donne une nouvelle identité à l'espace, tandis que les ouvertures et les perspectives maintiennent un lien permanent avec les extérieurs.",
      "Nous avons ainsi transformé une maison assez ordinaire en un lieu singulier, spacieux et vivant, où l'architecture intérieure dialogue en permanence avec la nature.",
    ],
    // Couverture : la piscine à débordement (07), la vue « effet wow » du brief.
    cover: maisonPhotos[6].src,
    images: maisonPhotos.map((p) => p.src),
    photos: maisonPhotos,
  },
  {
    id: "hotel-le-tahiti-arue",
    nom: null,
    title: "Hôtel Le Tahiti",
    subtitle: "L'élégance du sur mesure.",
    category: "hotels",
    location: "Arue, Tahiti",
    mission: "Aménagement sur-mesure d'une suite, mobilier et tapisserie murale",
    body: [
      "L'Hôtel Le Tahiti à Arue a été une aventure particulièrement enrichissante, qui nous a permis d'exprimer pleinement notre créativité et d'apporter notre signature à travers un travail de sur mesure jusque dans les moindres détails.",
      "Nous avons imaginé et développé des éléments spécifiques pour l'hôtel, tout en assurant directement au sein de l'agence le sourcing, la sélection et la commande du mobilier, afin de garantir la cohérence et la qualité de l'ensemble.",
      "La tapisserie, elle aussi signée Interieur Design Tahiti, vient compléter cet univers et renforcer l'identité propre du lieu.",
      "Un projet où nous avons privilégié le maximum de pièces sur mesure, pour créer un hôtel à la fois élégant, singulier et profondément ancré dans son identité.",
      "Un hôtel de renom auquel nous sommes particulièrement attachés, et une réalisation qui illustre parfaitement notre goût pour le détail, la culture polynésienne, la création et le sur mesure.",
      "Les chambres signature signées Interieur Design Tahiti",
    ],
    // Couverture : la vue d'ensemble de la chambre (02), pas la salle de bain (01).
    cover: tahitiPhotos[1].src,
    images: tahitiPhotos.map((p) => p.src),
    photos: tahitiPhotos,
  },
  {
    id: "hotel-manava",
    nom: null,
    title: "Sofitel Kia Ora",
    subtitle: "Moorea Beach Resort.",
    category: "hotels",
    // Libellé de secteur + note pour le bloc infos (distinct du libellé de
    // filtre "Hôtels" utilisé ailleurs sur le site).
    sector: "Hôtellerie",
    rating: "5★",
    location: "Moorea",
    year: "2023",
    surface: "980 m²",
    mission: "Architecture intérieure & aménagement",
    description:
      "Une réinterprétation contemporaine de l'art de recevoir à la polynésienne. Espaces de vie ouverts sur le jardin, mobilier sur-mesure et palette de matières naturelles pour un accueil sobre et chaleureux.",
    // Vraies photos fournies par la cliente (les autres projets restent en
    // placeholder Unsplash pour l'instant).
    cover: "/images/sofitel-kia-ora/pool.jpg",
    images: [
      "/images/sofitel-kia-ora/pool.jpg",
      "/images/sofitel-kia-ora/lounge.jpg",
      "/images/sofitel-kia-ora/breakfast.jpg",
    ],
    // Dimensions réelles (photos non recadrées au format PSWP_WIDTH/HEIGHT
    // standard) — nécessaires pour un rendu correctement cadré.
    imageDims: [
      [2000, 1500],
      [1200, 1600],
      [1200, 1600],
    ],
    // Galerie éditoriale grand format (page de détail) — les 4 vraies photos,
    // chacune avec son texte immersif.
    gallerySections: [
      {
        image: "/images/sofitel-kia-ora/pool.jpg",
        width: 2000,
        height: 1500,
        eyebrow: "Le patio",
        title: "Face au lagon",
        description:
          "Ici, la piscine à débordement se fond dans la ligne d'horizon du lagon. Les parasols orangés ponctuent le bois patiné de la terrasse, entre ombre et lumière, dans un dialogue permanent avec le végétal environnant.",
      },
      {
        image: "/images/sofitel-kia-ora/lounge.jpg",
        width: 1200,
        height: 1600,
        eyebrow: "Le restaurant",
        title: "Sous les fibres tressées",
        description:
          "Le plafond en fibres tressées suspend une pluie de lumière dorée sur la salle. Mobilier en rotin et bois brut composent une atmosphère à la fois raffinée et profondément ancrée dans l'artisanat polynésien.",
      },
      {
        image: "/images/sofitel-kia-ora/breakfast.jpg",
        width: 1200,
        height: 1600,
        eyebrow: "L'art de la table",
        title: "Le rituel du matin",
        description:
          "Fruits de saison, fleurs tropicales fraîchement coupées et vaisselle épurée composent une nature morte quotidienne — un moment suspendu avant que la journée ne commence.",
      },
      {
        image: "/images/sofitel-kia-ora/bathroom.jpg",
        width: 1200,
        height: 1600,
        eyebrow: "L'espace bien-être",
        title: "Le rituel de l'eau",
        description:
          "Les vasques vert sauge se détachent sur la mosaïque graphique, entre bois et pierre claire. Un espace pensé comme une parenthèse sensorielle, loin de l'agitation du monde extérieur.",
      },
    ],
  },
  {
    // Vrai projet, texte et photo repris du site officiel de la cliente
    // (interieurdesigntahiti.com/projet-niu-beach-hotel-moorea) — photo web
    // en attendant les fichiers HD originaux.
    id: "niu-beach-hotel-moorea",
    nom: null,
    title: "Niu Beach Hôtel Moorea",
    subtitle: "Réception d'hôtel, Moorea.",
    category: "hotels",
    location: "Moorea",
    year: "2023",
    surface: "100 m²",
    mission: "Aménagement intérieur et décoration d'une réception d'hôtel",
    description:
      "Un style tropical minimaliste et épuré, reflétant une ambiance naturelle par le jeu des textures, des fibres, des couleurs chaudes et de la pureté du blanc. Le concept s'inspire du « NIU » (cocotier), avec des graphismes polynésiens symbolisant la paix et l'accueil — modernité et éléments naturels combinés pour un environnement élégant et relaxant, adapté au cadre paradisiaque de Moorea.",
    cover: "/images/niu-beach-hotel-moorea/cover.jpg",
    images: ["/images/niu-beach-hotel-moorea/cover.jpg"],
    imageDims: [[1024, 768]],
  },
  {
    // Vrai projet — texte fourni par la cliente, photos HD (galerie libre).
    // Année, surface et mission non communiquées : champs volontairement
    // absents (la fiche projet masque les métadonnées manquantes).
    id: "intercontinental-bora-bora-lobby",
    nom: null,
    title: "InterContinental Bora Bora",
    subtitle: "Réinventer le lobby sans perdre son âme.",
    category: "hotels",
    location: "Bora Bora",
    body: [
      "Pour le lobby de l'InterContinental Bora Bora, le défi était de moderniser les espaces tout en préservant l'authenticité et l'identité polynésienne du lieu.",
      "Nous avons travaillé sur un équilibre subtil entre design contemporain, matières naturelles et références culturelles locales, afin de créer un lobby plus actuel, tout en restant profondément ancré dans son environnement.",
      "Pièce maîtresse du projet, un tapis en tifaifai entièrement réalisé sur mesure vient donner une identité forte à l'espace et inscrire le design dans une véritable démarche artisanale.",
      "Un projet particulièrement stimulant en termes de création, où chaque détail devait trouver sa place entre modernité, élégance et authenticité.",
    ],
    cover: boraPhotos[0].src,
    images: boraPhotos.map((p) => p.src),
    photos: boraPhotos,
  },
  {
    // Vrai projet, texte et photo repris du site officiel de la cliente
    // (interieurdesigntahiti.com/projet-maison-individuelle) — une photo
    // représentative choisie dans la galerie de 19, en attendant les
    // fichiers HD originaux.
    id: "maison-individuelle",
    nom: null,
    title: "Maison Individuelle",
    subtitle: "Résidence contemporaine, Punaauia.",
    category: "residentiel",
    location: "Punaauia",
    year: "2020",
    surface: "250 m²",
    mission: "Aménagement intérieur et décoration d'une maison individuelle",
    description:
      "Une oasis de modernité et de fraîcheur tropicale, où chaque détail est pensé pour évoquer un sentiment de sérénité et d'évasion — l'harmonie parfaite entre design contemporain et influences tropicales.",
    cover: "/images/maison-individuelle/cover.jpg",
    images: ["/images/maison-individuelle/cover.jpg"],
    imageDims: [[1600, 1200]],
  },
  {
    id: "agence-communication-bureaux",
    nom: null,
    title: "Agence de communication",
    subtitle: "Bureaux, 15 postes sur 80 m².",
    category: "bureaux",
    surface: "80 m² (15 postes)",
    body: [
      "Le noir et le jaune ont été le fil conducteur de ce projet, affirmant dès l'entrée l'identité dynamique et créative de cette agence de communication.",
      "Dans un espace de seulement 80 m² destiné à accueillir 15 personnes, notre savoir-faire a été essentiel pour optimiser chaque mètre carré, travailler les volumes et créer une organisation fluide, fonctionnelle et agréable au quotidien.",
      "L'enjeu était de donner de l'ampleur à l'espace tout en créant différents univers de travail, sans perdre la cohérence d'ensemble. Le mobilier, les circulations, les matériaux et les éléments graphiques ont ainsi été pensés comme un véritable prolongement de l'identité de l'agence.",
      "Transformer une surface contrainte en un espace de travail vivant, fonctionnel et singulier : c'est là que notre expertise prend tout son sens.",
    ],
    cover: agencePhotos[0].src,
    images: agencePhotos.map((p) => p.src),
    photos: agencePhotos,
  },
];

// Les projets à texte multi-paragraphes (body) exposent leur 1er paragraphe
// comme description courte (meta description, aperçu Open Graph).
for (const project of projects) {
  if (project.body && !project.description) project.description = project.body[0];
}

export const featuredProject =projects.find((p) => p.id === "hotel-manava");

export const heroPoster = "/images/hero-poster.jpg";
// Vraie photo de Nathalie Weste fournie par la cliente.
export const founderPortrait = "/images/nathalie-weste.jpg";

// Gabarit de secours pour la galerie éditoriale (ProjectStoryGallery) : les
// projets sans gallerySections dédiée (tous sauf Sofitel Kia Ora pour
// l'instant) réutilisent leurs 3 images + leur description existante,
// avec des intitulés de zone génériques.
const DEFAULT_ZONE_LABELS = ["Vue d'ensemble", "Ambiance", "Détail"];

export function getGallerySections(project) {
  if (project.gallerySections) return project.gallerySections;

  return project.images.map((image, i) => {
    const [width, height] = project.imageDims?.[i] ?? [PSWP_WIDTH, PSWP_HEIGHT];
    return {
      image,
      width,
      height,
      eyebrow: DEFAULT_ZONE_LABELS[i] ?? `Vue ${i + 1}`,
      title: project.title,
      description: project.description,
    };
  });
}
