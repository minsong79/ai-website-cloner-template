import { Fragment } from "react";
import type { Menu } from "@/data/menus";
import styles from "./menu-showcase.module.css";

type MenuShowcaseProps = {
  menu: Menu;
  className?: string;
};

/** Wix Restaurant Menus widget ("Our Crafted Menu"): title, description and sections in columns. */
export function MenuShowcase({ menu, className }: MenuShowcaseProps) {
  return (
    <div className={`${styles.root} ${className ?? ""}`}>
      <h1 className={styles.title}>{menu.name}</h1>
      <p className={styles.description}>{menu.description}</p>
      <div className={styles.sections}>
        {menu.sections.map((section) => (
          <section key={section.name} className={styles.section} aria-label={section.name}>
            <h2 className={styles.sectionTitle}>{section.name}</h2>
            <hr className={styles.divider} />
            <ul className={styles.items}>
              {section.items.map((item, index) => (
                <Fragment key={item.name}>
                  {index > 0 ? <li aria-hidden="true" className={styles.dividerItem} /> : null}
                  <li className={styles.item}>
                    <span className={styles.itemName}>{item.name}</span>
                    <p className={styles.itemPrice}>{item.price}</p>
                  </li>
                </Fragment>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
