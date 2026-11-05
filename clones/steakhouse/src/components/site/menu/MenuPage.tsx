import { MENU_NAME, MENU_SECTIONS, formatPrice } from "@/lib/site-data";
import styles from "./MenuPage.module.css";

/** Restaurant Menus widget: "Dinner Menu" with its sections, dishes, and prices. */
export function MenuPage() {
  return (
    <section className={styles.page}>
      <div className={styles.stage}>
        <h1 className={`${styles.title} lulo`}>{MENU_NAME}</h1>
        <div className={styles.menu}>
          {MENU_SECTIONS.map((section) => (
            <div key={section.id} className={styles.section}>
              <h2 className={`${styles.sectionName} lulo`}>{section.name}</h2>
              <p className={styles.sectionDesc}>{section.description}</p>
              <ul className={styles.items}>
                {section.items.map((item) => (
                  <li key={item.id} className={styles.item}>
                    <hr className={styles.divider} />
                    <div className={styles.itemBody}>
                      <p className={styles.itemName}>{item.name}</p>
                      <p className={styles.itemDesc}>{item.description}</p>
                      <p className={styles.itemPrice}>{formatPrice(item.price)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
