export interface MenuItem {
  name: string;
  description: string;
  price: string;
  badge?: string;
}

export interface Sauce {
  name: string;
  price: string;
}

export interface ImageFeature {
  badge: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface CardItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  tags?: string[];
  badge?: string;
  extra?: string;
}

export interface Section {
  id: string;
  number: string;
  title: string;
  accentTitle?: string;
  tabLabel: string;
  description: string;
  type: "items" | "cocktails" | "sake" | "desserts";
  rows: MenuItem[][];
  featured?: MenuItem & { badge: string };
  imageFeature?: ImageFeature;
  sauces?: Sauce[];
  quote?: string;
  cardItems?: CardItem[];
}

export const menuSections: Section[] = [
  {
    id: "section-01",
    number: "01",
    title: "Small Plates ",
    accentTitle: "& Starters",
    tabLabel: "Small Plates",
    description:
      "The ritual begins here. Warm edamame, hand-folded gyoza, seared tuna — precision bites that set the tone for everything that follows.",
    type: "items",
    rows: [
      [
        {
          name: "Truffled Edamame",
          description: "Steamed soybeans finished with smoked truffle salt.",
          price: "$9",
        },
        {
          name: "Miso Soup",
          description: "Traditional Japanese miso with wakame, tofu, and scallions.",
          price: "$10",
        },
      ],
      [
        {
          name: "Super Crunch Shrimp",
          description: "Crispy battered shrimp served with house eel sauce.",
          price: "$9",
        },
        {
          name: "Chicken Yakitori",
          description: "Two skewers of grilled chicken glazed with teriyaki, scallions, and sesame seeds.",
          price: "$12",
        },
      ],
      [
        {
          name: "Gyoza",
          description: "Three Japanese dumplings — pork or vegetable — served with sesame peanut ponzu.",
          price: "$11",
        },
        {
          name: "Ebi Shumai",
          description: "Five steamed shrimp dumplings served with ponzu sauce.",
          price: "$12",
        },
      ],
    ],
    featured: {
      name: "Tuna Tataki",
      description:
        "Seared tuna loin coated with sesame seeds, served with yellow chili sauce and pickled onions. The starter South Beach orders twice.",
      price: "$11",
      badge: "Chef's Pick",
    },
  },
  {
    id: "section-02",
    number: "02",
    title: "Bao ",
    accentTitle: "Buns",
    tabLabel: "Bao Buns",
    description:
      "Pillowy steamed bao — two pieces per order — filled with Tokyo Club's most indulgent combinations. Light outside, bold inside.",
    type: "items",
    rows: [
      [
        {
          name: "Tuna Tartare Bao",
          description:
            "Fresh tuna tartare, avocado-edamame guacamole, and crispy shallots, finished with sesame. Two pieces.",
          price: "$18",
        },
        {
          name: "Torched Salmon Bao",
          description:
            "Torched salmon, spicy mayo, and togarashi spice. Two pieces. The heat builds exactly as much as it should.",
          price: "$19",
        },
      ],
    ],
  },
  {
    id: "section-03",
    number: "03",
    title: "Nigiri ",
    accentTitle: "— Two Pieces",
    tabLabel: "NIGIRI",
    description:
      "Clean cuts. Precise seasoning. Fish-forward restraint. The purest expression of the kitchen — each piece hand-formed, each bite complete.",
    type: "items",
    rows: [
      [
        {
          name: "King Salmon",
          description: "Rice, salmon, lemon zest.",
          price: "$10",
        },
        {
          name: "Tuna",
          description: "Rice with premium tuna.",
          price: "$10",
        },
        {
          name: "Yellowtail",
          description: "Rice with hamachi.",
          price: "$10",
        },
      ],
      [
        {
          name: "Spicy Tuna",
          description: "Rice with spicy tuna and chives.",
          price: "$10",
        },
        {
          name: "Unagi",
          description: "Rice with eel and eel sauce.",
          price: "$10",
        },
        {
          name: "Wagyu Beef",
          description: "Rice topped with wagyu tartare and truffle mayo.",
          price: "$10",
        },
      ],
    ],
  },
  {
    id: "section-04",
    number: "04",
    title: "Sashimi ",
    accentTitle: "— Fresh & Clean",
    tabLabel: "SASHIMI",
    description:
      "Elegant slices plated with sharp contrast and fresh texture. Five pieces per order, sourced and cut the day of service. The ocean on a plate.",
    type: "items",
    rows: [
      [
        {
          name: "Salmon Sashimi",
          description: "Five fresh salmon slices served with ponzu and sesame.",
          price: "$18",
        },
        {
          name: "Tuna Sashimi",
          description: "Five fresh tuna slices served with ponzu and pickled ginger.",
          price: "$20",
        },
      ],
      [
        {
          name: "Hamachi Sashimi",
          description: "Five yellowtail slices finished with citrus ponzu and scallions.",
          price: "$22",
        },
        {
          name: "Eel Sashimi",
          description: "Five freshwater eel slices finished with light eel sauce and sesame.",
          price: "$24",
        },
      ],
    ],
    imageFeature: {
      badge: "Chef's Selection",
      title: "Tokyo Sashimi Boat",
      description:
        "Twelve pieces of chef-selected salmon, tuna, hamachi, and eel sashimi served over ice with wakame salad, pickled ginger, wasabi, and ponzu. The definitive shared experience — built for the center of the table.",
      price: "$42",
      image: "/pictures/toky-sashimi-boat.png",
    },
  },
  {
    id: "section-05",
    number: "05",
    title: "Signature ",
    accentTitle: "Rolls",
    tabLabel: "SIGNATURE ROLLS",
    description:
      "Decadent house creations built for the late-night South Beach table. Eight pieces per roll. These are not just rolls — they are the reason you came.",
    type: "items",
    rows: [
      [
        {
          name: "Tokyo Gold Roll",
          description:
            "Shrimp tempura, eel & avocado topped with tuna, ikura, spicy mayo, eel sauce, and 24K gold leaf. Eight pieces of theater. The most photographed roll on Collins Ave.",
          price: "$35",
          badge: "Signature",
        },
        {
          name: "Wagyu Truffle Roll",
          description:
            "Beef tartare with chives, topped with wagyu slices, truffle mayo, and crispy garlic. Eight pieces of pure indulgence.",
          price: "$34",
          badge: "Signature",
        },
      ],
      [
        {
          name: "King Crab Dynasty",
          description:
            "Crispy yellowtail, cream cheese & avocado topped with fried plantain, dynamite crab, and crispy shrimp. Eight pieces.",
          price: "$24",
        },
        {
          name: "Sexy Roll",
          description:
            "Kani, crispy shrimp & cream cheese topped with avocado and spicy salmon. Eight pieces.",
          price: "$34",
        },
      ],
      [
        {
          name: "Miami Roll",
          description:
            "Tempura shrimp, crab & avocado topped with fried plantain and Fuji sauce. A tribute to the city. Eight pieces.",
          price: "$22",
        },
        {
          name: "South Beach Roll",
          description:
            "Salmon, shrimp & avocado topped with crispy crab and caviar. Eight pieces. Consistently our most-ordered roll.",
          price: "$24",
          badge: "popular",
        },
      ],
      [
        {
          name: "Tokyo After Dark",
          description:
            "Salmon, crab, avocado & cream cheese topped with melted brie, pistachio crumble, and Fuji sauce. Eight pieces.",
          price: "$24",
        },
        {
          name: "4 Amigos",
          description:
            "Tuna, crab & chives topped with fresh salmon, hamachi, and spicy mayo. Eight pieces.",
          price: "$24",
        },
      ],
    ],
  },
  {
    id: "section-06",
    number: "06",
    title: "Classic ",
    accentTitle: "Rolls",
    tabLabel: "CLASSIC ROLLS",
    description:
      "Timeless cuts, executed with the same precision as our signatures. Eight pieces per order. The classics never disappoint.",
    type: "items",
    rows: [
      [
        {
          name: "Spicy Tuna",
          description:
            "Tuna & avocado topped with spicy tuna, crispy shallots, and sriracha.",
          price: "$18",
        },
        {
          name: "Alaska",
          description:
            "Salmon, avocado & cream cheese topped with sesame seeds.",
          price: "$20",
        },
      ],
      [
        {
          name: "California",
          description:
            "Crab, cucumber & avocado topped with masago and sesame seeds.",
          price: "$20",
        },
        {
          name: "Dancing Eel",
          description:
            "Salmon, avocado & cucumber topped with grilled eel and masago.",
          price: "$20",
        },
      ],
    ],
  },
  {
    id: "section-07",
    number: "07",
    title: "Hand ",
    accentTitle: "Rolls",
    tabLabel: "HAND ROLLS",
    description:
      "Wrapped to order. Single pieces, meant to be eaten immediately. The most honest expression of fresh sushi — no waiting, no ceremony.",
    type: "items",
    rows: [
      [
        {
          name: "Spicy Tuna",
          description: "Fresh tuna, spicy mayo, scallions.",
          price: "$10",
        },
        {
          name: "Salmon Avocado",
          description: "Fresh salmon and avocado.",
          price: "$10",
        },
        {
          name: "Yellowtail Scallion",
          description: "Hamachi and scallions finished with ponzu.",
          price: "$11",
        },
      ],
      [
        {
          name: "Crispy Shrimp",
          description: "Crispy shrimp with avocado and spicy mayo.",
          price: "$11",
        },
        {
          name: "Wagyu Truffle",
          description: "Seared wagyu beef finished with truffle sauce.",
          price: "$16",
        },
      ],
    ],
    quote: "Eat it immediately. That's the rule.",
    sauces: [
      { name: "Spicy Mayo", price: "$2" },
      { name: "Ponzu", price: "$2" },
      { name: "Eel Sauce", price: "$2" },
      { name: "Fuji Sauce", price: "$2" },
    ],
  },
  {
    id: "section-08",
    number: "08",
    title: "Cocktails — ",
    accentTitle: "Crafted After Dark",
    tabLabel: "COCKTAILS",
    description:
      "Floral, smoky, citrus-led pours engineered for the room after dark. Each cocktail is designed to photograph as well as it tastes — because at Tokyo Club, the table is the stage.",
    type: "cocktails",
    rows: [],
    cardItems: [
      {
        name: "Lychee Orchid",
        tags: ["Flora", "Citrus", "Light"],
        description:
          "Fresh lychee, orchid bitters, yuzu, and premium vodka. Garnished with a live orchid. The signature pour of Tokyo Club.",
        price: "$18",
        image: "/pictures/lychee-orchild.png",
      },
      {
        name: "Japanese Dragon",
        tags: ["Smoky", "Bold", "Spirit-forward"],
        description:
          "Japanese whisky, dragon fruit, house-made ginger syrup, and fresh lime. Served with a smoked dragon fruit garnish.",
        price: "$20",
        image: "/pictures/japanese-dragon.png",
      },
      {
        name: "Yuzu Blossom",
        tags: ["Tart", "Floral", "Refreshing"],
        description:
          "Yuzu juice, elderflower liqueur, gin, and sparkling water. Delicate, bright, and built for a warm Miami night.",
        price: "$17",
        image: "/pictures/yuzu-blossom.png",
      },
    ],
  },
  {
    id: "section-09",
    number: "09",
    title: "Sake — Flights & Bottles",
    tabLabel: "SAKE",
    description:
      "Crisp pours and curated flights to accompany the full experience. Each sake is selected to complement the kitchen's technique — from clean junmai to rich, warming nigori.",
    type: "sake",
    rows: [],
    cardItems: [
      {
        name: "House Dry",
        tags: ["Junmai"],
        description:
          "Clean rice forward, dry finish. The purest expression of junmai craftsmanship.",
        price: "$12 / glass",
        extra: "Best served: chilled or room temp",
      },
      {
        name: "Floral Premium",
        tags: ["Ginjo"],
        description:
          "Delicate, slightly fruity with a floral nose. Pairs exceptionally with nigiri and sashimi.",
        price: "$16 / glass",
        extra: "Best served: chilled",
      },
      {
        name: "Ultra-Premium",
        tags: ["Daiginjo"],
        description:
          "Silky, complex, and refined. Our finest pour — reserved for moments that deserve it.",
        price: "$22 / glass",
        extra: "Best served: cold",
      },
      {
        name: "Cloudy Sweet",
        tags: ["Nigori"],
        description:
          "Unfiltered, rich, and slightly sweet with a creamy texture. The perfect close to the meal.",
        price: "$14 / glass",
        extra: "Best served: cold",
      },
    ],
  },
  {
    id: "section-10",
    number: "10",
    title: "Desserts — ",
    accentTitle: "Sweet Finale",
    tabLabel: "DESERTS",
    description:
      "The last note of the ritual. Warm, Japanese-inspired, and crafted to linger. Designed to end the night as powerfully as it began.",
    type: "desserts",
    rows: [],
    cardItems: [
      {
        name: "Panda Coconut Bun",
        description:
          "Warm steamed panda bun filled with lush coconut cream. Part dessert, part moment — a table conversation starter.",
        price: "$15",
      },
      {
        name: "Japanese Matcha Cheesecake",
        description:
          "Light Japanese cheesecake with ceremonial-grade matcha and mango-yuzu sauce. Delicate, clean, and unforgettable.",
        price: "$15",
      },
    ],
  },
];
