// Dimensions par défaut de la galerie éditoriale (ProjectStoryGallery) pour
// les projets qui n'ont pas leurs dimensions réelles renseignées.
export const PSWP_WIDTH = 1600;
export const PSWP_HEIGHT = 1067;

// Un seul filtre par catégorie effectivement représentée dans `projects` —
// pas de bouton menant à une grille vide (restaurant et scénographie n'ont
// plus de projet réel depuis le retrait des placeholders ; retail est de
// retour avec Hineava Jewelry, nov. 2026).
export const categories = [
  { slug: "hotels", label: "Hôtels" },
  { slug: "residentiel", label: "Résidentiels" },
  { slug: "bureaux", label: "Bureaux/Tertiaire" },
  { slug: "retail", label: "Boutiques" },
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

// Nouveau projet "Concept" (Bureaux/Workspaces) — à ne pas confondre avec
// Agence de communication : style visuel proche (bois clair, accent jaune)
// mais bien deux projets distincts d'après le mail de Nathalie du
// 2026-11-08 (catégorisation Hospitality / Residential / Workspaces /
// Retail du dossier d'organisation transmis).
const conceptPhotos = (() => {
  const f = "concept";
  const t = "Concept";
  return [
    photo(f, "01", 2000, 1463, `${t} — bureau cloisonné lumineux, mobilier en bois clair et liseré jaune au sol`),
    photo(f, "02", 2000, 1333, `${t} — open space : grand cadre jaune structurant la circulation entre les postes de travail`),
    photo(f, "03", 1333, 2000, `${t} — mezzanine : garde-corps en métal déployé noir surplombant un bureau cloisonné`),
    photo(f, "04", 1413, 2000, `${t} — cloison à claire-voie en bois clair et latte jaune, vue depuis l'open space`),
    photo(f, "05", 2000, 1359, `${t} — bureau individuel cloisonné, mobilier en bois clair et touche de jaune au sol`),
    photo(f, "06", 2000, 1600, `${t} — table de réunion au piètement jaune graphique`),
    photo(f, "07", 2000, 1989, `${t} — salle de réunion, plafond et mur d'accent jaune plein cadre`),
    photo(f, "08", 2000, 1581, `${t} — kitchenette : tabourets hauts jaunes devant un plan de travail noir`),
  ];
})();

// Projet "HINA" (Retail) — nom officiel donné par Nathalie (mail du
// 2026-11-08), pas "Hineava" (lu sur le rideau de maille de la boutique,
// mais ce n'est que le nom de la marque qui y est présentée). Couverture :
// "la photo des lampes" explicitement demandée par Nathalie comme 1ère
// photo — le détail des suspensions en laiton à travers le rideau de
// maille (seule photo du lot entièrement consacrée aux lampes).
const hinaPhotos = (() => {
  const f = "hina";
  const t = "HINA";
  return [
    photo(f, "01", 2000, 1333, `${t} — détail des suspensions en laiton à travers le rideau de maille sauge`),
    photo(f, "02", 2000, 1333, `${t} — vue d'ensemble à travers le rideau de maille métallique tissé du nom de la marque, vitrines en bois sombre de part et d'autre`),
    photo(f, "03", 2000, 1333, `${t} — plafond : suspensions sculpturales en laiton façon fleurs au-dessus du salon d'accueil`),
    photo(f, "04", 2000, 1333, `${t} — vue d'ensemble depuis l'entrée, bureau d'accueil et vitrines en enfilade`),
    photo(f, "05", 2000, 1306, `${t} — vitrines en bois sombre et verre, écrin pour la bijouterie`),
    photo(f, "06", 2000, 1333, `${t} — salon lounge : banquette courbe en velours sauge et fauteuils bleu canard`),
    photo(f, "07", 2000, 1333, `${t} — salon lounge, autre angle sur la banquette sauge et la table basse ronde`),
  ];
})();

const niuPhotos = (() => {
  const f = "niu-beach-hotel-moorea";
  const t = "Niu Beach Hôtel Moorea";
  return [
    photo(f, "01", 2000, 1333, `${t} — chambre : salon ouvert sur la suite, tête de lit à motif graphique polynésien`),
    photo(f, "02", 2000, 1333, `${t} — réception : banque d'accueil en bois clair rétroéclairée, suspensions en bois tourné`),
    photo(f, "03", 2000, 1333, `${t} — salle de petit-déjeuner : mur à motif graphique « NIU », tables et chaises en rotin tressé`),
    photo(f, "04", 1800, 1200, `${t} — buffet du petit-déjeuner, mur à motif graphique et suspensions en rotin`),
    photo(f, "05", 1024, 768, `${t} — chambre, vue d'ensemble`),
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
const maisonIndividuellePhotos = (() => {
  const f = "maison-individuelle";
  const t = "Maison Individuelle, Punaauia";
  return [photo(f, "cover", 1600, 1200, `${t} — vue d'ensemble`)];
})();

const sofitelPhotos = (() => {
  const f = "sofitel-kia-ora";
  const t = "Sofitel Kia Ora";
  return [
    photo(f, "pool", 2000, 1500, `${t} — le patio : piscine à débordement, parasols orangés sur bois patiné face au lagon`),
    photo(f, "lounge", 1200, 1600, `${t} — le restaurant, sous les fibres tressées : plafond en fibres tressées, mobilier en rotin et bois brut`),
    photo(f, "breakfast", 1200, 1600, `${t} — l'art de la table : fruits de saison, fleurs tropicales et vaisselle épurée`),
    photo(f, "bathroom", 1200, 1600, `${t} — l'espace bien-être : vasques vert sauge sur mosaïque graphique, bois et pierre claire`),
  ];
})();

const atnPhotos = (() => {
  const f = "atn";
  const t = "ATN";
  return [
    photo(f, "01", 2000, 1333, `${t} — accueil : banque en bois clair façon passerelle, hublots lumineux au sol`),
    photo(f, "02", 2000, 1333, `${t} — lounge : banquette bleu canard, fauteuils jaune moutarde et bois clair`),
    photo(f, "03", 2000, 1333, `${t} — salle de réunion : mur végétal graphique monstera, grande table bois`),
    photo(f, "04", 2000, 1333, `${t} — poste de travail technique, mur typographique « modélisation »`),
    photo(f, "05", 2000, 1333, `${t} — openspace : colonnes bois façon troncs d'arbres entre les postes`),
    photo(f, "06", 2000, 1333, `${t} — couloir : portraits de tiki marquisiens sur mur vert sauge`),
    photo(f, "07", 2000, 1333, `${t} — salle de réunion : mur typographique « authentique, moana, passion »`),
    photo(f, "08", 1333, 2000, `${t} — détail du mur « spirit » et fauteuil jaune`),
    // La 9e photo du lot original (lounge, mur à motif de palmiers) a été
    // écartée : une personne en mouvement (floutée) y est visible au premier
    // plan, ce qui tranche avec le reste du site (aucune personne visible
    // dans les autres galeries). À réintégrer sur simple demande.
  ];
})();

const villaBoraBoraPhotos = (() => {
  const f = "villa-bora-bora";
  const t = "Résidence privée, Bora Bora";
  return [
    photo(f, "01", 2000, 1333, `${t} — cuisine : îlot sombre sous un plafond en dentelle de métal noir à motif de feuilles`),
    photo(f, "02", 1379, 2000, `${t} — claustra en métal découpé façon feuillage, séparation salon/cuisine`),
    photo(f, "03", 2000, 1333, `${t} — chambre : tête de lit en bois tressé rétroéclairée, coussin motif tropical`),
    photo(f, "04", 2000, 1333, `${t} — chambre bleu canard : tête de lit tressée, télévision encastrée`),
    photo(f, "05", 1406, 1999, `${t} — salle de bain : douche carrelée anthracite, niche éclairée`),
    photo(f, "06", 2000, 1333, `${t} — niche murale carrelée, ananas décoratif et serviettes roulées`),
    photo(f, "07", 1442, 2000, `${t} — dressing sur mesure, rangements ouverts et penderie`),
    photo(f, "08", 1082, 1454, `${t} — baignoire d'angle, niche murale et fleur tropicale`),
    photo(f, "09", 2000, 1333, `${t} — entrée : bibliothèque murale sur mesure en bois clair`),
  ];
})();

const hotelRevaPhotos = (() => {
  const f = "hotel-reva";
  const t = "Hôtel Le Reva";
  return [
    photo(f, "01", 2000, 1333, `${t} — lobby : colonne habillée de corde tressée, suspensions à cordages`),
    photo(f, "02", 2000, 1333, `${t} — lobby : vue d'ensemble sur les coins salon et la mezzanine à cordages`),
    photo(f, "03", 2000, 1333, `${t} — lobby, vue sur l'entrée et la rue depuis les fauteuils beiges`),
    photo(f, "04", 2000, 1333, `${t} — salon : canapé courbe terracotta bouclé, tables basses en travertin`),
    photo(f, "05", 2000, 1333, `${t} — lobby : coin salon sous la mezzanine, lumière tamisée`),
    photo(f, "06", 2000, 1333, `${t} — salle du petit-déjeuner : verrière et fresque végétale, tables dressées`),
    photo(f, "07", 2000, 1333, `${t} — salle du petit-déjeuner, autre angle sous la verrière`),
    // Les 3 photos suivantes étaient créditées à @marine_sja (compte
    // Instagram) dans le lot original — droits confirmés par Nathalie
    // (mail du 2026-11-12), réintégrées.
    photo(f, "08", 1333, 2000, `${t} — salle du petit-déjeuner : table dressée, mur à motif floral tropical`),
    photo(f, "09", 1333, 2000, `${t} — salle du petit-déjeuner, vue sur les tables et le comptoir buffet`),
    photo(f, "10", 1333, 2000, `${t} — buffet du petit-déjeuner, photographies encadrées au mur`),
  ];
})();

const sagePhotos = (() => {
  const f = "sage";
  const t = "Résidence privée, Moorea";
  // Photos reçues en 640px seulement (bien plus bas que les 2000px standard du
  // site) : passées en sur-échantillonnage IA (ESPCN x4) + léger renforcement
  // de netteté pour revenir au gabarit habituel. Dimensions ci-dessous =
  // celles des fichiers réellement livrés après ce traitement.
  return [
    photo(f, "01", 1334, 2000, `${t} — patio : tiki sculpté cadré par une baie vitrée, jardin tropical`),
    photo(f, "02", 2000, 1334, `${t} — bibliothèque sur mesure en bois clair, salon et fauteuil cuir`),
    photo(f, "03", 2000, 1334, `${t} — salon : verrière acier noir ouverte sur le jardin, fauteuil et ottoman Eames`),
    photo(f, "04", 2000, 1334, `${t} — cuisine : îlot central anthracite, niche jaune et suspensions circulaires`),
    photo(f, "05", 1334, 2000, `${t} — bibliothèque, détail de la niche vitrée jaune`),
    photo(f, "06", 2000, 1334, `${t} — cuisine, vue vers la baie vitrée et le jardin`),
    photo(f, "07", 1334, 2000, `${t} — patio : bassin et mur végétal entre claustras de bois`),
    photo(f, "08", 2000, 1334, `${t} — salle de bain : double vasque et miroir rond rétroéclairé`),
    photo(f, "09", 1334, 2000, `${t} — dressing sur mesure tout en hauteur`),
    photo(f, "10", 1334, 2000, `${t} — douche à l'italienne, claustras de bois brut`),
    photo(f, "11", 1334, 2000, `${t} — couloir des chambres, portes en bois massif`),
  ];
})();

const salleDeBainsClaudiaPhotos = (() => {
  const f = "salle-de-bains-claudia";
  const t = "Salle de bains Claudia";
  return [
    photo(f, "01", 2000, 1500, `${t} — WC : papier peint feuillage dessiné à la main, fenêtre persienne bois`),
    photo(f, "02", 1500, 2000, `${t} — WC, vue sur le claustra de bois vertical`),
    photo(f, "03", 1500, 2000, `${t} — douche à l'italienne derrière des claustras de bois brut`),
    photo(f, "04", 2000, 1500, `${t} — double vasque sous miroirs ronds rétroéclairés, claustra bois`),
    photo(f, "05", 1500, 2000, `${t} — double vasque, plan bois et rangements ouverts`),
    photo(f, "06", 1500, 2000, `${t} — double vasque, vue sur les miroirs ronds et la fenêtre persienne`),
    photo(f, "07", 1500, 2000, `${t} — double vasque, autre angle sur le papier peint feuillage`),
    photo(f, "08", 1500, 2000, `${t} — détail du claustra de bois séparant la douche`),
  ];
})();

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
    // Vraies photos fournies par la cliente. Galerie en séquence pure façon
    // lauragonzalez.fr (plus de légende par photo depuis le 2026-11-09) —
    // le texte immersif qui était ici vit maintenant dans `description`
    // ci-dessus, affichée une seule fois en intro de fiche.
    cover: sofitelPhotos[0].src,
    images: sofitelPhotos.map((p) => p.src),
    photos: sofitelPhotos,
  },
  {
    // Vrai projet, texte repris du site officiel de la cliente
    // (interieurdesigntahiti.com/projet-niu-beach-hotel-moorea). 5 photos
    // fournies par la cliente début nov. 2026 (toujours web, mais bien
    // meilleures que le placeholder initial) — en attendant d'éventuels
    // fichiers HD originaux.
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
    cover: niuPhotos[0].src,
    images: niuPhotos.map((p) => p.src),
    photos: niuPhotos,

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
    cover: maisonIndividuellePhotos[0].src,
    images: maisonIndividuellePhotos.map((p) => p.src),
    photos: maisonIndividuellePhotos,
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
  {
    // Nouveau projet "Concept" (Bureaux/Workspaces), photos reçues de la
    // cliente le 2026-11-08. Lieu, année, surface et mission non
    // communiqués : champs volontairement absents (même convention
    // qu'InterContinental Bora Bora ci-dessus) — à confirmer avec Nathalie.
    id: "concept",
    nom: "Concept",
    title: "Concept",
    subtitle: "Bureaux, noir et jaune.",
    category: "bureaux",
    description:
      "Un espace de bureaux où le bois clair et le jaune graphique structurent la circulation, du mobilier sur mesure jusqu'à la kitchenette.",
    cover: conceptPhotos[0].src,
    images: conceptPhotos.map((p) => p.src),
    photos: conceptPhotos,

  },
  {
    // Projet "HINA" (Retail), nom officiel donné par Nathalie (mail du
    // 2026-11-08) — catégorisation Hospitality / Residential / Workspaces
    // / Retail du dossier d'organisation transmis par la cliente. Lieu,
    // année, surface et mission non communiqués : champs volontairement
    // absents (même convention qu'InterContinental Bora Bora ci-dessus) —
    // à confirmer avec Nathalie.
    id: "hina",
    nom: "HINA",
    title: "HINA",
    subtitle: "Un écrin pour la haute joaillerie.",
    category: "retail",
    description:
      "Un rideau de maille métallique tissé du nom de la marque accueille les clients dans un univers sauge et laiton, entre vitrines en bois sombre et salon lounge en velours.",
    cover: hinaPhotos[0].src,
    images: hinaPhotos.map((p) => p.src),
    photos: hinaPhotos,

  },
  {
    // ATN = Air Tahiti Nui (confirmé par Quentin, 2026-11-12).
    id: "atn",
    nom: "ATN",
    title: "Air Tahiti Nui",
    subtitle: "Siège social, bureaux d'entreprise.",
    category: "bureaux",
    description:
      "Le siège de la compagnie aérienne nationale, pensé comme un territoire polynésien : cloisons à motifs graphiques et portraits marquisiens, alcôves en bois pour les échanges informels et mobilier modulable pour le travail collaboratif.",
    cover: atnPhotos[0].src,
    images: atnPhotos.map((p) => p.src),
    photos: atnPhotos,
  },
  {
    // "BORA" = libellé exact de Nathalie ("Residentiel - BORA", mail du
    // 2026-11-12). Projet résidentiel distinct de la fiche hôtelière
    // "InterContinental Bora Bora" déjà en ligne.
    id: "villa-bora-bora",
    nom: "BORA",
    title: "Résidence privée",
    subtitle: "Villa, Bora Bora.",
    category: "residentiel",
    location: "Bora Bora",
    description:
      "Une villa où le végétal se découpe en dentelle de métal noir — claustras à motif de feuilles tropicales entre cuisine et salon, têtes de lit en bois tressé rétroéclairées, salle de bain minérale ouverte sur un patio de pierre.",
    cover: villaBoraBoraPhotos[0].src,
    images: villaBoraBoraPhotos.map((p) => p.src),
    photos: villaBoraBoraPhotos,
  },
  {
    // "LE REVA" = libellé exact de Nathalie. 3 photos du lot original
    // ("Hotel Reva Tahiti - @marine_sja...") créditées à un compte
    // Instagram tiers ont été écartées par prudence (droits d'auteur
    // incertains) — à confirmer avec elle si on veut les réintégrer.
    id: "hotel-reva",
    nom: "LE REVA",
    title: "Hôtel Le Reva",
    subtitle: "Lobby & restaurant.",
    category: "hotels",
    description:
      "Un lobby suspendu de cordages tressés autour d'une colonne habillée de corde, canapé courbe terracotta et fauteuils en bouclé — une parenthèse tropicale feutrée avant la salle du petit-déjeuner, sous sa verrière et sa fresque végétale.",
    cover: hotelRevaPhotos[0].src,
    images: hotelRevaPhotos.map((p) => p.src),
    photos: hotelRevaPhotos,
  },
  {
    // "SAGE" = libellé exact de Nathalie ("Résidentiel - SAGE"). Le
    // document fourni avec les photos ("maison Nicolas.docx") révèle qu'il
    // s'agit en réalité de « la maison de Manon et Louis », Moorea,
    // rénovée avec l'atelier paysager Nature d'Art — texte volontairement
    // anonymisé ici (pas de prénoms de clients) en attendant confirmation
    // de Nathalie sur l'usage de ce document pour le site public. Dims
    // photos volontairement petites (640px) : résolution d'origine fournie,
    // plus basse que les autres projets — à signaler.
    id: "sage",
    nom: "SAGE",
    title: "Résidence privée",
    subtitle: "Rénovation, Moorea.",
    category: "residentiel",
    location: "Moorea",
    surface: "200 m² habitables (terrain de 2100 m²)",
    mission: "Rénovation complète et aménagement intérieur, en collaboration avec l'atelier paysager Nature d'Art pour les extérieurs",
    description:
      "Une rénovation complète qui rouvre les volumes et renoue avec les restanques en pierre de Moorea déjà en place — trois poumons de verdure, pensés avec l'atelier paysager Nature d'Art, infusent la maison jusque dans la bibliothèque et la salle de bain.",
    cover: sagePhotos[0].src,
    images: sagePhotos.map((p) => p.src),
    photos: sagePhotos,
  },
  {
    // "SDB Zen" (mail de Nathalie) = Salle de bains Claudia-Zen, citée dans
    // le point projet précédent. Pas de nom de marque/bannière ici (nom:
    // null), "Claudia" est le prénom déjà utilisé en interne par Nathalie.
    id: "salle-de-bains-claudia",
    nom: null,
    title: "Salle de bains Claudia",
    subtitle: "Rénovation, ambiance zen.",
    category: "residentiel",
    description:
      "Un vestiaire habillé d'un papier peint feuillage dessiné à la main, une double vasque sous miroirs ronds rétroéclairés et une douche à l'italienne derrière des claustras de bois brut — une rénovation complète pensée comme une parenthèse zen.",
    cover: salleDeBainsClaudiaPhotos[0].src,
    images: salleDeBainsClaudiaPhotos.map((p) => p.src),
    photos: salleDeBainsClaudiaPhotos,
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
