import type { Menu } from "@/lib/site-data";

import styles from "./MenuShowcase.module.css";

type MenuShowcaseProps = {
  menu: Menu;
};

// Wix Restaurants "Menus" widget: sections with a ruled title and a grid of
// items (name, description, price). The template has a single menu, so the
// widget shows no menu tabs.
export function MenuShowcase({ menu }: MenuShowcaseProps) {
  return (
    <div className={styles.widget} aria-label={menu.name} role="region">
      {menu.sections.map((section) => (
        <section key={section.name} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.name}</h2>
          <ul className={styles.items}>
            {section.items.map((item) => (
              <li key={item.name} className={styles.item}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.price}>{item.price}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
