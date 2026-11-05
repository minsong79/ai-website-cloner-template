// Restaurant menu content from the source (Wix Restaurants Menus / Online Orders).

export type MenuLabel = "vegan" | "hot";

export type MenuVariant = { id: string; name: string; price: number };

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  labels: MenuLabel[];
  variants?: MenuVariant[];
};

export type MenuSection = {
  id: string;
  title: string;
  description: string;
  items: MenuItem[];
};

const DISH = "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.";
export const SECTION_DESCRIPTION =
  "I’m a description for a section of your menu. Click me and then “Edit Menu” to open the Restaurant Menu editor and change my text.";
export const MENU_DESCRIPTION =
  "I’m a menu description. Click me and then “Edit Menu” to open the Restaurant Menu editor and change my text.";

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: "starters",
    title: "Starters",
    description: SECTION_DESCRIPTION,
    items: [
      { id: "bacon-rolls", name: "Bacon Rolls", description: DISH, price: 9.99, image: "/assets/images/item-bacon-rolls.jpg", labels: [] },
      { id: "onion-rings", name: "Onion Rings", description: DISH, price: 9.99, image: "/assets/images/item-onion-rings.jpg", labels: ["vegan"] },
      {
        id: "roasted-brussels-sprouts",
        name: "Roasted Brussels Sprouts",
        description: DISH,
        price: 9.99,
        image: "/assets/images/item-brussels-sprouts.jpg",
        labels: ["vegan"],
      },
    ],
  },
  {
    id: "sides-snacks",
    title: "Sides & Snacks",
    description: SECTION_DESCRIPTION,
    items: [
      { id: "home-fries", name: "Home Fries", description: DISH, price: 9.99, image: "/assets/images/item-home-fries.jpg", labels: ["vegan"] },
      { id: "roasted-chickpeas", name: "Roasted Chickpeas", description: DISH, price: 9.99, image: "/assets/images/item-chickpeas.jpg", labels: [] },
      { id: "nachos", name: "Nachos", description: DISH, price: 9.99, image: "/assets/images/item-nachos.jpg", labels: ["vegan"] },
    ],
  },
  {
    id: "main-dishes",
    title: "Main Dishes",
    description: SECTION_DESCRIPTION,
    items: [
      { id: "lamb-burger", name: "★ Lamb Burger", description: DISH, price: 9.99, image: "/assets/images/item-lamb-burger.jpg", labels: [] },
      {
        id: "hot-wings",
        name: "Hot Wings",
        description: DISH,
        price: 12.99,
        image: "/assets/images/item-hot-wings.jpg",
        labels: ["hot"],
        variants: [
          { id: "300", name: "300 gr", price: 12.99 },
          { id: "400", name: "400 gr", price: 14.99 },
        ],
      },
      { id: "taco-triple", name: "Taco Triple", description: DISH, price: 9.99, image: "/assets/images/item-taco-triple.jpg", labels: [] },
    ],
  },
];

export const LABEL_NAMES: Record<MenuLabel, string> = { vegan: "Vegan", hot: "Hot" };

export function findItem(id: string) {
  for (const section of MENU_SECTIONS) {
    const item = section.items.find((i) => i.id === id);
    if (item) return item;
  }
  return undefined;
}
