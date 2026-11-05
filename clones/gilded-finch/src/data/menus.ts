/** Wix Restaurant Menus data, as published by the template (populatedMenus). */
export type MenuItem = {
  name: string;
  description?: string;
  price: string;
};

export type MenuSection = {
  name: string;
  items: MenuItem[];
};

export type Menu = {
  name: string;
  description: string;
  slug: string;
  sections: MenuSection[];
};

export const CRAFTED_MENU: Menu = {
  name: "Our Crafted Menu",
  description: "Sips, bites, and everything nice. Curated for your enjoyment",
  slug: "dinner-menu",
  sections: [
    {
      name: "Starters",
      items: [
        { name: "Truffle Parmesan Fries", price: "$4.50" },
        { name: "Spicy Tuna Crispy Rice", price: "$16" },
        { name: "Whipped Feta Dip with Pita", price: "$14" },
        { name: "Short Rib Sliders (2 pcs)", price: "$15" },
        { name: "Crispy Brussels Sprouts with Balsamic Glaze", price: "$13" },
      ],
    },
    {
      name: "Signature Cocktails",
      items: [
        { name: "The Gilded Finch", price: "$17" },
        { name: "Midnight Orchard", price: "$16" },
        { name: "Spiced Pear Margarita", price: "$17" },
        { name: "Rosemary Gin Fizz", price: "$16" },
        { name: "Fig & Thyme Old Fashioned", price: "$18" },
        { name: "Lavender Haze Sour", price: "$17" },
        { name: "The Golden Hour Negroni", price: "$16" },
        { name: "Espresso Martini Deluxe", price: "$18" },
        { name: "Smoky Paloma", price: "$17" },
        { name: "Velvet Underground", price: "$18" },
      ],
    },
    {
      name: "Classic Cocktails",
      items: [
        { name: "Old Fashioned", price: "$15" },
        { name: "Manhattan", price: "$15" },
        { name: "Margarita", price: "$14" },
        { name: "Whiskey Sour", price: "$14" },
        { name: "Dry Martini", price: "$15" },
        { name: "Negroni", price: "$15" },
        { name: "Daiquiri", price: "$14" },
        { name: "Mojito", price: "$14" },
        { name: "Aperol Spritz", price: "$13" },
        { name: "French 75", price: "$14" },
      ],
    },
  ],
};

export const TASTE_MENU: Menu = {
  name: "A Taste of What's Shaking",
  description: "A sneak peek at our most-loved creations",
  slug: "a-taste-of-whats-shaking",
  sections: [
    {
      name: "A Taste of What's Shaking",
      items: [
        {
          name: "The Finch's Song",
          description: "Gin, elderflower, fresh lime, prosecco splash",
          price: "$17",
        },
        {
          name: "Ember Old Fashioned",
          description: "Smoked bourbon, demerara, aromatic bitters",
          price: "$18",
        },
        {
          name: "Truffle Parmesan Fries",
          description: "Crispy fries, truffle oil, grated parmesan, fresh parsley",
          price: "$12",
        },
      ],
    },
  ],
};
