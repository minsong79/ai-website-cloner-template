// Real copy from the Wix template "Asphalt Bloom Cafe" (wh-1378).

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Menu", href: "/menus" },
  { label: "Contact", href: "/contact" },
];

export const contact = {
  email: "info@mysite.com",
  phone: "123-456-7890",
  streetLong: "500 Terry Francine Street,",
  street: "500 Terry Francine St",
  city: "San Francisco, CA 94158",
  facebook: "https://www.facebook.com/wix",
  instagram: "https://www.instagram.com/wix",
  wix: "https://www.wix.com",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=500+Terry+Francine+St%2C+San+Francisco%2C+CA+94158",
  hours: ["Mon - Fri: 7am - 8pm", "Sat - Sun: 8am - 6pm"],
} as const;

export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuSection = {
  name: string;
  items: MenuItem[];
};

export type Menu = {
  name: string;
  slug: string;
  sections: MenuSection[];
};

// Wix Restaurants Menus app data. The template has a single menu
// ("ARTISANAL BEVERAGES", ?menu=artisanal-beverages) with three sections.
export const menus: Menu[] = [
  {
    name: "ARTISANAL BEVERAGES",
    slug: "artisanal-beverages",
    sections: [
      {
        name: "Crafted Beverages",
        items: [
          {
            name: "Espresso Con Panna",
            description: "Rich espresso topped with a dollop of whipped cream for a creamy finish.",
            price: "$4.50",
          },
          {
            name: "Nitro Cold Brew",
            description: "Smooth cold brew infused with nitrogen for a creamy, frothy texture.",
            price: "$5.00",
          },
          {
            name: "Matcha Latte",
            description: "Ceremonial grade matcha whisked with steamed milk for a vibrant green drink.",
            price: "$4.75",
          },
        ],
      },
      {
        name: "Artisanal Bites",
        items: [
          {
            name: "Savory Scone",
            description: "Flaky scone infused with sharp cheddar and fresh chives, perfect for snacking.",
            price: "$3.50",
          },
          {
            name: "Avocado Toast",
            description: "Toasted sourdough topped with smashed avocado, chili flakes, and a drizzle of olive oil.",
            price: "$6.00",
          },
          {
            name: "Quinoa Salad",
            description: "Nutty quinoa mixed with seasonal vegetables and a zesty lemon vinaigrette.",
            price: "$7.00",
          },
        ],
      },
      {
        name: "Sweet Indulgences",
        items: [
          {
            name: "Chocolate Chip Cookie",
            description: "Warm, gooey cookie loaded with rich chocolate chips and a hint of sea salt.",
            price: "$2.50",
          },
          {
            name: "Lemon Tart",
            description: "Zesty lemon curd nestled in a buttery crust, topped with a light meringue.",
            price: "$4.00",
          },
          {
            name: "Carrot Cake Slice",
            description: "Moist carrot cake layered with cream cheese frosting and topped with walnuts.",
            price: "$5.50",
          },
        ],
      },
    ],
  },
];
