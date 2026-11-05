import type { Metadata } from "next";

import { Img } from "@/components/site/Img";

import styles from "./our-story.module.css";

export const metadata: Metadata = {
  title: "Our Story",
};

export default function OurStoryPage() {
  return (
    <div className={styles.page}>
      <section className={`tex ${styles.story}`}>
        <Img
          className={styles.image}
          src="/assets/images/our-story-storefront.jpg"
          alt="The Asphalt Bloom Cafe storefront at dusk"
          width={1520}
          height={1065}
          loading="eager"
          data-enter="fade-slow"
        />
        <p className={`t-lead tight c-gray center ${styles.subtitle}`} data-enter="fade-slow" data-delay="200">
          The story of a cafe that chose grit over glamour
        </p>
        <h2 className={`t-display c-gray center ${styles.title}`} data-enter="fade-slow">
          Brewed From The Concrete
        </h2>
        <div className={`t-body tight c-light center ${styles.body}`} data-enter="fade-slow" data-delay="200">
          <p>
            We started Asphalt Bloom in a forgotten corner of the city, armed with a secondhand espresso
            machine and a belief that a coffee shop should be more than just a transaction.
          </p>
          <p aria-hidden="true">&nbsp;</p>
          <p>
            It should be an experience—a raw, honest reflection of the neighborhood it serves. We source
            our beans ethically, bake our goods daily, and pour our hearts into every single cup. We&apos;re
            not here to be perfect; we&apos;re here to be real.
          </p>
        </div>
      </section>
    </div>
  );
}
