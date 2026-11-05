import type { Metadata } from "next";
import { formatPrice } from "@/lib/cart-store";
import { MENU_SECTIONS } from "@/lib/menu";
import s from "./menu.module.css";

export const metadata: Metadata = { title: "Menu" };

export default function MenuPage() {
  return (
    <div className={s.page}>
      <div className={s.box}>
        <h1 className={s.title}>Menu</h1>
        {MENU_SECTIONS.map((section) => (
          <section key={section.id} className={s.section}>
            <h2 className={s.sectionTitle}>{section.title}</h2>
            <p className={s.sectionText}>{section.description}</p>
            <div className={s.items}>
              {section.items.map((item) => (
                <div key={item.id} className={s.item}>
                  <p className={s.name}>{item.name}</p>
                  <p className={s.desc}>{item.description}</p>
                  {item.variants ? (
                    <div className={s.variants}>
                      {item.variants.map((v) => (
                        <p key={v.id} className={s.variant}>
                          <span>{v.name}</span>
                          <span>{formatPrice(v.price)}</span>
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className={s.price}>{formatPrice(item.price)}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
