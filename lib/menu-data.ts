export type MenuItem = {
  name: string;
  description: string;
  price: string;
  badge?: string;
};

export type MenuSection = {
  title: string;
  accent: string;
  items: MenuItem[];
};

export type FeaturedItem = {
  name: string;
  price: string;
  image: string;
  alt: string;
  width: number;
  height: number;
};

export const featuredItems: FeaturedItem[] = [
  {
    name: "Tokyo Gold Roll",
    price: "$35",
    image: "/pictures/Gold Roll - correct photo.jpg",
    alt: "Tokyo Gold Roll topped with tuna, ikura, and 24K gold leaf.",
    width: 1365,
    height: 2048,
  },
  {
    name: "Wagyu Truffle Roll",
    price: "$34",
    image: "/pictures/12-wagyu-beef-sushi-roll-closeup.jpg",
    alt: "Wagyu beef sushi roll with truffle mayo and crispy garlic.",
    width: 1365,
    height: 2048,
  },
  {
    name: "Torched Salmon Bao",
    price: "$19",
    image: "/pictures/10-salmon-bao-bun-with-edible-flowers.jpg",
    alt: "Torched salmon bao bun styled with edible flowers.",
    width: 1365,
    height: 2048,
  },
  {
    name: "Tuna Tataki",
    price: "$20",
    image: "/pictures/02-seared-tuna-tataki-with-microgreens.jpg",
    alt: "Seared tuna tataki plated with microgreens and sesame seeds.",
    width: 1365,
    height: 2048,
  },
  {
    name: "Matcha Cheesecake",
    price: "$15",
    image: "/pictures/13-matcha-cake-with-mango-and-pansy.jpg",
    alt: "Japanese matcha cheesecake with mango-yuzu sauce and edible flowers.",
    width: 2048,
    height: 1365,
  },
  {
    name: "Gyoza",
    price: "$11",
    image: "/pictures/03-green-tea-gyoza-with-sesame-glaze.jpg",
    alt: "Japanese gyoza dumplings with sesame peanut ponzu sauce.",
    width: 1365,
    height: 2048,
  },
];

export const menuSections: MenuSection[] = [
  {
    title: "Small Plates",
    accent: "Start the night",
    items: [
      {
        name: "Truffled Edamame",
        description: "Steamed soybeans finished with smoked truffle salt.",
        price: "$9",
      },
      {
        name: "Miso Soup",
        description:
          "Traditional Japanese miso soup with wakame, tofu, and scallions.",
        price: "$10",
      },
      {
        name: "Super Crunch Shrimp",
        description: "Crispy battered shrimp served with eel sauce.",
        price: "$12",
      },
      {
        name: "Chicken Yakitori",
        description:
          "Two skewers of grilled chicken glazed with teriyaki sauce, scallions, and sesame seeds.",
        price: "$12",
      },
      {
        name: "Gyoza",
        description:
          "Three Japanese dumplings filled with pork or vegetables, served with sesame peanut ponzu sauce.",
        price: "$11",
      },
      {
        name: "Ebi Shumai",
        description: "Five steamed shrimp dumplings served with ponzu sauce.",
        price: "$13",
      },
      {
        name: "Tuna Tataki",
        description:
          "Seared tuna loin coated with sesame seeds, served with yellow chili sauce and pickled onions.",
        price: "$20",
      },
    ],
  },
  {
    title: "Bao Buns",
    accent: "Steamed & filled",
    items: [
      {
        name: "Tuna Tartar Bao",
        description:
          "Two steamed bao buns filled with fresh tuna tartare, avocado-edamame guacamole, and crispy shallots, finished with sesame.",
        price: "$18",
      },
      {
        name: "Torched Salmon Bao",
        description:
          "Two steamed bao buns with torched salmon, spicy mayo, and togarashi spice.",
        price: "$19",
      },
    ],
  },
  {
    title: "Nigiri",
    accent: "Two pieces per order",
    items: [
      {
        name: "Nigiri King Salmon",
        description: "Two pieces of rice with salmon and lemon zest.",
        price: "$10",
      },
      {
        name: "Nigiri Tuna",
        description: "Two pieces of rice with tuna.",
        price: "$10",
      },
      {
        name: "Nigiri Yellowtail",
        description: "Two pieces of rice with yellowtail.",
        price: "$10",
      },
      {
        name: "Nigiri Spicy Tuna",
        description: "Two pieces of rice with spicy tuna and chives.",
        price: "$10",
      },
      {
        name: "Nigiri Unagi",
        description: "Two pieces of rice with eel and eel sauce.",
        price: "$10",
      },
      {
        name: "Nigiri Wagyu Beef",
        description:
          "Two pieces of rice topped with wagyu tartare and truffle mayo.",
        price: "$10",
      },
    ],
  },
  {
    title: "Sashimi",
    accent: "Fresh & clean",
    items: [
      {
        name: "Salmon Sashimi",
        description:
          "Five fresh salmon slices served with ponzu and sesame.",
        price: "$18",
      },
      {
        name: "Tuna Sashimi",
        description:
          "Five fresh tuna slices served with ponzu and pickled ginger.",
        price: "$20",
      },
      {
        name: "Hamachi Sashimi",
        description:
          "Five yellowtail slices finished with citrus ponzu and scallions.",
        price: "$22",
      },
      {
        name: "Eel Sashimi",
        description:
          "Five freshwater eel slices finished with light eel sauce & sesame.",
        price: "$24",
      },
      {
        name: "Tokyo Sashimi Boat",
        description:
          "Twelve-piece chef selection of salmon, tuna, hamachi, and eel sashimi served over ice with wakame salad, pickled ginger, wasabi, and ponzu.",
        price: "$42",
        badge: "Chef's Selection",
      },
    ],
  },
  {
    title: "Signature Rolls",
    accent: "House favorites",
    items: [
      {
        name: "Tokyo Gold Roll",
        description:
          "Shrimp tempura, eel, and avocado roll topped with tuna, ikura, spicy mayo, eel sauce, and 24K gold leaf, cut into 8 pieces.",
        price: "$35",
        badge: "Signature",
      },
      {
        name: "Wagyu Truffle Roll",
        description:
          "Beef tartare mixed with chives, topped with wagyu slices, truffle mayo, and crispy garlic, cut into 8 pieces.",
        price: "$34",
        badge: "Signature",
      },
      {
        name: "King Crab Dynasty",
        description:
          "Crispy yellowtail, cream cheese, and avocado topped with fried plantain, dynamite crab, and crispy shrimp, cut into 8 pieces.",
        price: "$24",
      },
      {
        name: "Sexy Roll",
        description:
          "Kani, crispy shrimp, & cream cheese topped with avocado and spicy salmon, cut into 8 pieces.",
        price: "$24",
      },
      {
        name: "Miami Roll",
        description:
          "Tempura shrimp, crab, and avocado topped with fried plantain and Fuji sauce, cut into 8 pieces.",
        price: "$22",
      },
      {
        name: "South Beach Roll",
        description:
          "Salmon, shrimp, and avocado topped with crispy crab and caviar, cut into 8 pieces.",
        price: "$24",
        badge: "Popular",
      },
      {
        name: "Tokyo After Dark",
        description:
          "Salmon, crab, avocado, and cream cheese topped with melted brie, pistachio crumble, and Fuji sauce, cut into 8 pieces.",
        price: "$24",
      },
      {
        name: "4 Amigos",
        description:
          "Tuna, crab, and chives topped with fresh salmon, hamachi, and spicy mayo, cut into 8 pieces.",
        price: "$24",
      },
    ],
  },
  {
    title: "Classic Rolls",
    accent: "Timeless cuts",
    items: [
      {
        name: "Spicy Tuna",
        description:
          "Tuna and avocado topped with spicy tuna, crispy shallots, and sriracha, cut into 8 pieces.",
        price: "$18",
      },
      {
        name: "Alaska",
        description:
          "Salmon, avocado, & cream cheese topped with sesame seeds, cut into 8 pieces.",
        price: "$20",
      },
      {
        name: "California",
        description:
          "Crab, cucumber, and avocado topped with masago & sesame seeds, cut into 8 pieces.",
        price: "$20",
      },
      {
        name: "Dancing Eel",
        description:
          "Salmon, avocado, and cucumber topped with grilled eel and masago, cut into 8 pieces.",
        price: "$20",
      },
    ],
  },
  {
    title: "Hand Rolls",
    accent: "Wrapped to order",
    items: [
      {
        name: "Spicy Tuna Hand Roll",
        description: "Fresh tuna mixed with spicy mayo and scallions.",
        price: "$10",
      },
      {
        name: "Salmon Avocado Hand Roll",
        description: "Fresh salmon and avocado.",
        price: "$10",
      },
      {
        name: "Yellowtail Scallion Hand Roll",
        description: "Hamachi and scallions finished with ponzu.",
        price: "$11",
      },
      {
        name: "Crispy Shrimp Hand Roll",
        description: "Crispy shrimp with avocado and spicy mayo.",
        price: "$11",
      },
      {
        name: "Wagyu Truffle Hand Roll",
        description: "Seared wagyu beef finished with truffle sauce.",
        price: "$16",
        badge: "Premium",
      },
    ],
  },
  {
    title: "Sauces",
    accent: "On the side",
    items: [
      { name: "Spicy Mayo", description: "", price: "$2" },
      { name: "Ponzu", description: "", price: "$2" },
      { name: "Eel Sauce", description: "", price: "$2" },
      { name: "Fuji Sauce", description: "", price: "$2" },
    ],
  },
  {
    title: "Desserts",
    accent: "Sweet finish",
    items: [
      {
        name: "Panda Coconut Bun",
        description:
          "Warm steamed panda bun filled with coconut cream.",
        price: "$15",
      },
      {
        name: "Japanese Matcha Cheesecake",
        description:
          "Light Japanese cheesecake with matcha & mango-yuzu sauce.",
        price: "$15",
      },
    ],
  },
];

export const featuredDrinks: FeaturedItem[] = [
  {
    name: "Lychee Martini",
    price: "$19",
    image: "/pictures/06-lychee-orchid-cocktail-closeup.jpg",
    alt: "A lychee orchid martini in dramatic closeup with orchid and lychee garnish.",
    width: 1365,
    height: 2048,
  },
  {
    name: "Kyoto Matcha Martini",
    price: "$21",
    image: "/pictures/08-citrus-cocktail-with-dried-lime-and-flowers.jpg",
    alt: "Kyoto matcha martini from above with dried lime wheel and flower petals.",
    width: 1365,
    height: 2048,
  },
  {
    name: "Smoked Kyoto Old Fashioned",
    price: "$22",
    image: "/pictures/16-DSC07892.jpg",
    alt: "Smoked Kyoto old fashioned with smoke dome and orange peel garnish.",
    width: 1365,
    height: 2048,
  },
  {
    name: "Japanese Mule",
    price: "$19",
    image: "/pictures/14-tropical-cocktail-with-mint-and-flower.jpg",
    alt: "Japanese mule cocktail with mint and flower garnish.",
    width: 1365,
    height: 2048,
  },
  {
    name: "Matcha Yuzu Spritz",
    price: "$21",
    image: "/pictures/04-lychee-orchid-and-citrus-cocktails.jpg",
    alt: "Signature cocktails with orchid and citrus garnishes against dark speakeasy backdrop.",
    width: 2048,
    height: 1365,
  },
  {
    name: "Yuzu Margarita",
    price: "$19",
    image: "/pictures/17-DSC07903.jpg",
    alt: "Yuzu margarita with whisky tones and orange peel twist.",
    width: 1365,
    height: 2048,
  },
];

export const drinkMenuSections: MenuSection[] = [
  {
    title: "Signature Cocktails",
    accent: "Crafted after dark",
    items: [
      {
        name: "Lychee Martini",
        description:
          "Vodka, lychee sake, lychee juice, and fresh lime. Served in a chilled martini glass.",
        price: "$19",
        badge: "Signature",
      },
      {
        name: "Kyoto Matcha Martini",
        description:
          "Vodka, sake liqueur, matcha syrup, and light coconut cream. Smooth, creamy, and sophisticated.",
        price: "$21",
        badge: "Signature",
      },
      {
        name: "Japanese Mule",
        description:
          "Haku vodka, triple sec, fresh lime, and ginger beer.",
        price: "$19",
      },
      {
        name: "Tokyo Highball",
        description: "Toki Japanese whisky, yuzu, and club soda.",
        price: "$18",
      },
      {
        name: "Matcha Yuzu Spritz",
        description:
          "Roku gin, matcha syrup, lemon, yuzu, prosecco, and soda.",
        price: "$21",
      },
      {
        name: "Smoked Kyoto Old Fashioned",
        description:
          "Japanese whisky, bitters, and smoked citrus aroma. Finished tableside under a smoke dome.",
        price: "$22",
        badge: "Tableside",
      },
      {
        name: "Yuzu Margarita",
        description:
          "Blanco tequila, triple sec, fresh lime, and yuzu.",
        price: "$19",
      },
    ],
  },
  {
    title: "Specials",
    accent: "One of a kind",
    items: [
      {
        name: "Tokyo Sake Bomb",
        description: "House sake dropped into Japanese lager.",
        price: "$17",
      },
    ],
  },
  {
    title: "Japanese Beer",
    accent: "Ice cold",
    items: [
      { name: "Kirin Ichiban", description: "", price: "$9" },
      { name: "Asahi Super Dry", description: "", price: "$9" },
      { name: "Sapporo", description: "", price: "$9" },
    ],
  },
  {
    title: "Wine",
    accent: "By the glass or bottle",
    items: [
      {
        name: "Cabernet Sauvignon",
        description: "Murphy Goode",
        price: "$16 / $66",
      },
      {
        name: "Merlot",
        description: "Murphy Goode",
        price: "$16 / $62",
      },
      {
        name: "Pinot Noir",
        description: "Murphy Goode",
        price: "$17 / $67",
      },
      {
        name: "Malbec",
        description: "Altos",
        price: "$16 / $66",
      },
      {
        name: "Pinot Grigio",
        description: "Barone Fini",
        price: "$17 / $68",
      },
      {
        name: "Sauvignon Blanc",
        description: "Oyster Bay",
        price: "$18 / $70",
      },
      {
        name: "Chardonnay",
        description: "Murphy Goode",
        price: "$18 / $62",
      },
      {
        name: "Rosé",
        description: "Josh Cellars",
        price: "$17 / $62",
      },
    ],
  },
  {
    title: "Sake Menu",
    accent: "Rice, water, yeast & koji",
    items: [
      {
        name: "Yoshinogawa Winter Warrior",
        description:
          "Junmai Ginjo from Chubu, Japan, featuring tropical melon and light floral aromas, with honeydew and lychee on the palate.",
        price: "$27",
      },
      {
        name: "Heavensake Baby Junmai Ginjo",
        description:
          "Kansai, Japan. Smooth and crisp with notes of lemon peel, sweet rice, and crème brûlée.",
        price: "$33",
      },
      {
        name: "Hana Lychee Sake",
        description:
          "Lychee flavored sake made with rice from the Sacramento Valley and Sierra Nevada snowmelt.",
        price: "$32",
      },
      {
        name: "Yuki Nigori Lychee Sake",
        description:
          "Creamy nigori sake with tropical fruit flavor and rich texture.",
        price: "$32",
      },
    ],
  },
  {
    title: "Bottle Service",
    accent: "For the table",
    items: [
      { name: "Patron Cristalino", description: "", price: "$398" },
      { name: "Patron Reposado", description: "", price: "$289" },
      {
        name: "Patron Añejo",
        description: "",
        price: "$318",
      },
      { name: "Don Julio Blanco", description: "", price: "$298" },
      { name: "Don Julio Reposado", description: "", price: "$308" },
      { name: "Casamigos Blanco", description: "", price: "$298" },
      { name: "Casamigos Reposado", description: "", price: "$318" },
      {
        name: "Tito\u2019s Vodka",
        description: "",
        price: "$198",
      },
      { name: "Grey Goose", description: "", price: "$238" },
      { name: "Hennessy", description: "", price: "$268" },
      {
        name: "Moët Brut Champagne",
        description: "",
        price: "$248",
      },
      { name: "Mionetto Prosecco", description: "", price: "$178" },
    ],
  },
  {
    title: "Signature Lemonades",
    accent: "Non-alcoholic",
    items: [
      { name: "Coconut Lemonade", description: "", price: "$9" },
      { name: "Strawberry Lemonade", description: "", price: "$9" },
      { name: "Peppermint Lemonade", description: "", price: "$9" },
    ],
  },
  {
    title: "Beverages",
    accent: "Non-alcoholic",
    items: [
      { name: "Green Tea, Sencha", description: "", price: "$10" },
      {
        name: "Soft Drinks",
        description: "Coke, Diet Coke, Sprite.",
        price: "$5",
      },
      {
        name: "Juices",
        description: "Orange, Lemonade, Cranberry.",
        price: "$6",
      },
      { name: "Red Bull", description: "", price: "$7" },
    ],
  },
];

export const pairings = [
  {
    dish: "Signature rolls",
    drink: "Japanese Dragon",
    note: "Bright botanicals cut through richer textures and keep the table feeling lively.",
  },
  {
    dish: "Nigiri tasting",
    drink: "Curated sake pour",
    note: "A crisp, balanced pairing that keeps the fish at the center of the experience.",
  },
  {
    dish: "Dessert finale",
    drink: "Lychee martini",
    note: "Floral sweetness and chilled citrus carry the night into a more playful finish.",
  },
];
