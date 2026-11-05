import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BackgroundVideo } from "@/components/site/BackgroundVideo";
import { Gallery, type GalleryImage } from "@/components/site/Gallery";
import { MenuTeaser } from "@/components/site/MenuTeaser";
import { Motion } from "@/components/site/Motion";
import { TestimonialSlideshow, type Testimonial } from "@/components/site/TestimonialSlideshow";
import { TASTE_MENU } from "@/data/menus";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: { absolute: "Home | The Gilded Finch 1" },
};

const GALLERY: GalleryImage[] = [
  { src: "/assets/images/gallery-bar-counter.jpg", width: 1920, height: 1920, alt: "" },
  { src: "/assets/images/gallery-chalkboard.jpg", width: 1280, height: 1920, alt: "" },
  { src: "/assets/images/gallery-beanie.jpg", width: 1920, height: 1920, alt: "" },
  { src: "/assets/images/gallery-pasta.jpg", width: 1920, height: 1920, alt: "" },
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '"The absolute best cocktails in the city. The atmosphere is so welcoming, it feels like coming home."',
    name: "Kaelen Moreau",
  },
  {
    quote:
      '"My go-to spot for a relaxed Friday night. The staff are incredible and always have a great recommendation."',
    name: "Mateo",
  },
  {
    quote:
      '"A true gem! The food is surprisingly delicious for a bar, and the drinks are a work of art."',
    name: "Léonie Dubois",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero: background video with headline */}
      <section className={`wx-section ${styles.hero}`}>
        <BackgroundVideo
          poster="/assets/images/hero-pour-poster.jpg"
          desktopSrc="/assets/video/hero-pour-1080p.mp4"
          mobileSrc="/assets/video/hero-pour-480p.mp4"
          title="Bar_Kling 3_2026-07-16_08-44-17 1.mp4"
          videoClassName={styles.heroVideo}
        />
        <div className={`wx-stage ${styles.stage}`}>
          <h1 className={`wx-abs ${styles.heroTitle}`}>Where Good Times And Great Drinks Meet</h1>
          <p className={`wx-abs ${styles.heroText}`}>
            Step into The Gilded Finch, your favorite local spot for expertly mixed cocktails and
            heartwarming company
          </p>
          <Link href="/menus" className={`wx-abs wx-btn wx-btn--primary ${styles.heroButton}`}>
            <span className="wx-btn-label">See Our Menu</span>
          </Link>
        </div>
      </section>

      {/* About: collage with scroll and pointer motion */}
      <section className={`wx-section ${styles.about}`}>
        <div className={`wx-stage ${styles.stage}`}>
          <Motion kind="airy" className={`wx-abs ${styles.barTable}`}>
            <Image
              src="/assets/images/about-bar-table.jpg"
              alt=""
              fill
              sizes="(max-width: 1023px) 50vw, 27vw"
              className={styles.cover}
            />
          </Motion>
          <h2 className={`wx-abs ${styles.aboutTitle}`}>More Than a Bar, We&apos;re Your Second Home</h2>
          <Motion kind="parallax" className={`wx-abs ${styles.bottle}`}>
            <Image
              src="/assets/images/about-bottle.png"
              alt=""
              fill
              sizes="(max-width: 1023px) 30vw, 19vw"
              className={styles.cover}
            />
          </Motion>
          <Motion kind="airy" className={`wx-abs ${styles.street}`}>
            <Image
              src="/assets/images/about-street-crowd.jpg"
              alt=""
              fill
              sizes="(max-width: 1023px) 40vw, 29vw"
              className={styles.cover}
            />
          </Motion>
          <p className={`wx-abs ${styles.story}`}>
            The Gilded Finch was born from a simple idea: create a place where friends, new and old,
            can gather over a perfect drink. We pour our passion into every glass and believe that
            the best nights are the ones shared together.
          </p>
          <Motion kind="airy" className={`wx-abs ${styles.pour}`}>
            <Image
              src="/assets/images/about-cocktail-pour.jpg"
              alt=""
              fill
              sizes="(max-width: 1023px) 40vw, 32vw"
              className={styles.cover}
            />
          </Motion>
          <Motion kind="spin" rotate={14} className={`wx-abs ${styles.lime}`}>
            <Image
              src="/assets/images/about-lime.png"
              alt=""
              fill
              sizes="(max-width: 1023px) 16vw, 11vw"
              className={styles.cover}
            />
          </Motion>
          <Motion kind="spin" rotate={14} className={`wx-abs ${styles.face}`}>
            <Image
              src="/assets/images/about-face-cherry.png"
              alt=""
              fill
              sizes="(max-width: 1023px) 29vw, 17vw"
              className={styles.cover}
            />
          </Motion>
        </div>
      </section>

      {/* Menu teaser on a paper texture (height follows the fixed-pixel menu widget) */}
      <section className={`wx-section ${styles.teaser}`}>
        <div className={`wx-stage ${styles.teaserStage}`}>
          <div className={styles.paper}>
            <Image
              src="/assets/images/menu-paper-texture.jpg"
              alt=""
              fill
              sizes="(max-width: 1023px) 90vw, 97vw"
              className={styles.cover}
            />
            <h2 className={styles.teaserTitle}>
              A Taste of
              <br />
              What’s Shaking
            </h2>
            <MenuTeaser menu={TASTE_MENU} className={styles.teaserMenu} />
            <Link href="/menus" className={`wx-btn wx-btn--secondary ${styles.teaserButton}`}>
              <span className="wx-btn-label">Explore Full Menu</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Events copy */}
      <section className={`wx-section ${styles.events}`}>
        <div className={`wx-stage ${styles.stage}`}>
          <h2 className={`wx-abs ${styles.eventsTitle}`}>
            There’s Always
            <br />
            Something On
          </h2>
          <p className={`wx-abs ${styles.eventsLead}`}>Join us for our weekly events and specials</p>
          <p className={`wx-abs ${styles.eventsText}`}>
            From Tuesday Trivia nights to live acoustic sets on Fridays, our calendar is packed. Swing
            by for Happy Hour from 4-6 PM on weekdays for deals you won&apos;t want to miss.
          </p>
        </div>
      </section>

      {/* Wiggling margaritas + gallery */}
      <section className={`wx-section ${styles.gallerySection}`}>
        <div className={`wx-stage ${styles.stage}`}>
          <div className={styles.galleryStage}>
          <Motion kind="wiggle" wiggle="a" className={`wx-abs ${styles.margaritaOne}`}>
            <Image
              src="/assets/images/events-margarita-1.png"
              alt=""
              fill
              sizes="(max-width: 1023px) 38vw, 18vw"
              className={styles.cover}
            />
          </Motion>
          <Motion kind="wiggle" wiggle="b" className={`wx-abs ${styles.margaritaTwo}`}>
            <Image
              src="/assets/images/events-margarita-2.png"
              alt=""
              fill
              sizes="(max-width: 1023px) 34vw, 16vw"
              className={styles.cover}
            />
          </Motion>
          <Gallery images={GALLERY} className={`wx-abs ${styles.gallery}`} />
          </div>
        </div>
      </section>

      {/* Testimonials over the lime video */}
      <section className={`wx-section ${styles.testimonials}`}>
        <BackgroundVideo
          poster="/assets/images/testimonial-lime-poster.jpg"
          desktopSrc="/assets/video/testimonial-lime-1080p.mp4"
          mobileSrc="/assets/video/testimonial-lime-480p.mp4"
          title="Bar_Kling 3_2026-07-14_09-38-57.mp4"
          showToggle
        />
        <div className={`wx-stage ${styles.stage}`}>
          <TestimonialSlideshow items={TESTIMONIALS} className={`wx-abs ${styles.slideshow}`} />
        </div>
      </section>
    </>
  );
}
