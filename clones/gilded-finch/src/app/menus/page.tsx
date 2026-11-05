import type { Metadata } from "next";
import { MenuShowcase } from "@/components/site/MenuShowcase";
import { CRAFTED_MENU } from "@/data/menus";
import styles from "./menus.module.css";

export const metadata: Metadata = {
  title: "Our Crafted Menu",
  description: "Sips, bites, and everything nice. Curated for your enjoyment",
};

export default function MenusPage() {
  return (
    <section className={`wx-section ${styles.page}`}>
      <div className={`wx-stage ${styles.stage}`}>
        <MenuShowcase menu={CRAFTED_MENU} className={styles.widget} />
      </div>
    </section>
  );
}
