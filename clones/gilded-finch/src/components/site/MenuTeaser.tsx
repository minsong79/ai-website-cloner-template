import type { Menu } from "@/data/menus";
import styles from "./menu-teaser.module.css";

type MenuTeaserProps = {
  menu: Menu;
  className?: string;
};

/** Wix Restaurant Menus widget in its centered "showcase" layout (home page). */
export function MenuTeaser({ menu, className }: MenuTeaserProps) {
  const items = menu.sections.flatMap((section) => section.items);
  return (
    <div className={`${styles.root} ${className ?? ""}`}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.name} className={styles.item}>
            <span className={styles.name}>{item.name}</span>
            {item.description ? <span className={styles.description}>{item.description}</span> : null}
            <span className={styles.price}>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
