import type { Metadata } from "next";

import { MenuShowcase } from "@/components/site/MenuShowcase";
import { menus } from "@/lib/site-data";

import styles from "./menus.module.css";

// Wix titles this page after the selected menu. `?menu=artisanal-beverages`
// selects the same (only) menu, so the query string renders the same state.
export const metadata: Metadata = {
  title: "ARTISANAL BEVERAGES",
};

export default function MenusPage() {
  return (
    <section className={`tex ${styles.menus}`}>
      <h2 className={`t-display c-light center ${styles.title}`}>The Full Grind</h2>
      <p className={`t-lead c-gray center ${styles.subtitle}`}>
        From dawn &apos;til dusk, our kitchen and bar are serving up honest, flavorful fuel. Dive in.
      </p>
      <div className={styles.widget}>
        <MenuShowcase menu={menus[0]} />
      </div>
    </section>
  );
}
