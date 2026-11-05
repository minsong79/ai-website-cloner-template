// Content copied from the source template (https://www.wix.com/demone2/steakhouse).

export type NavItem = {
  label: string;
  href: string;
  /** In-page anchor on the home page (OUR PLACE / CONTACT). */
  anchor?: "our-place" | "contact";
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Place", href: "/", anchor: "our-place" },
  { label: "Menu", href: "/menu" },
  { label: "Order Online", href: "/order-online" },
  { label: "Reservations", href: "/reservations" },
  { label: "Contact", href: "/", anchor: "contact" },
];

export const ADDRESS_LINE = "500 Terry Francine st.  San Francine, CA 94158.  Tel.";
export const PHONE = "123-456-7890";

export const PARAGRAPH_SHORT =
  "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.";

export const PARAGRAPH_LONG =
  "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.";

export const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://www.twitter.com/wix", icon: "/assets/images/social-twitter.png" },
  { label: "Instagram", href: "https://www.instagram.com/wix", icon: "/assets/images/social-instagram.png" },
];

export const GALLERY_CAPTION = "#wix, #website, #freewebsite, #websitetemplate, #wix.com";
export const GALLERY_ACCOUNT = "steak.house.template";
export const GALLERY_IMAGES = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `/assets/images/gallery-0${n}.jpg`);

export const WIX_URL = "https://wix.com/?utm_campaign=vir_created_with";
export const MAP_QUERY = "500 Terry Francine St, San Francisco, CA 94158";

// Restaurant Menus / Online Orders — one menu ("Dinner Menu") with two sections.
export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export type MenuSection = {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
};

const DISH_DESCRIPTION =
  "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text. I’m a great place to say how delicious I am so your customers will want to eat me.";
const SECTION_DESCRIPTION =
  "I’m a description for a section of your menu. Click me and then “Manage Menus” to open the Restaurant Menu editor and change my text.";

export const MENU_NAME = "Dinner Menu";

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: "steak",
    name: "Steak",
    description: SECTION_DESCRIPTION,
    items: [
      { id: "center-cut-filet-mignon", name: "Center-Cut Filet Mignon", description: DISH_DESCRIPTION, price: 9 },
      { id: "porterhouse-steak", name: "Porterhouse Steak", description: DISH_DESCRIPTION, price: 9 },
      { id: "center-cut-prime-ribeye", name: "Center-Cut Prime Ribeye", description: DISH_DESCRIPTION, price: 9 },
      { id: "double-cut-rib-lamb-chops", name: "★ Double-Cut Rib Lamb Chops", description: DISH_DESCRIPTION, price: 9 },
    ],
  },
  {
    id: "side-dishes",
    name: "Side Dishes",
    description: SECTION_DESCRIPTION,
    items: [
      { id: "caesar-salad", name: "Caesar Salad", description: DISH_DESCRIPTION, price: 9 },
      { id: "cobb-salad", name: "Cobb Salad", description: DISH_DESCRIPTION, price: 9 },
      { id: "potato-wedges", name: "Potato Wedges", description: DISH_DESCRIPTION, price: 9 },
      { id: "crab-cakes", name: "Crab Cakes", description: DISH_DESCRIPTION, price: 9 },
    ],
  },
];

export const ALL_MENU_ITEMS: MenuItem[] = MENU_SECTIONS.flatMap((s) => s.items);

export function formatPrice(value: number): string {
  return `$${value.toFixed(2)}`;
}

// Table Reservations
export const PARTY_SIZES = [1, 2, 3, 4, 5, 6];

/** 8:00 AM – 10:00 PM in 15 minute steps (57 options), as in the source dropdown. */
export const TIME_OPTIONS: string[] = Array.from({ length: 57 }, (_, i) => {
  const minutes = 8 * 60 + i * 15;
  const h24 = Math.floor(minutes / 60);
  const m = minutes % 60;
  const suffix = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${m.toString().padStart(2, "0")} ${suffix}`;
});

export function partyLabel(n: number): string {
  return n === 1 ? "1 guest" : `${n} guests`;
}
