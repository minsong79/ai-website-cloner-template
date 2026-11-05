import type { Metadata } from "next";
import Link from "next/link";
import { EventsList } from "@/components/site/events/EventsList";
import { SparkleIcon } from "@/components/site/Icons";
import { SideTabs } from "@/components/site/layout/Overlays";
import { ParallaxImage, Reveal } from "@/components/site/motion";
import { ReserveTableWidget } from "@/components/site/widgets/Reservation";
import { Slideshow, type Slide } from "@/components/site/widgets/Slideshow";
import s from "./home.module.css";

export const metadata: Metadata = { title: { absolute: "Home" } };

const PARAGRAPH = "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.";

const MOMENTS: Slide[] = [
  { src: "/assets/images/moments-1.jpg", position: "50% 100%", alt: "Pendant lamp over the bar" },
  { src: "/assets/images/moments-2.jpg", position: "100% 0%", alt: "Friends raising their glasses" },
  { src: "/assets/images/moments-3.jpg", position: "50% 50%", alt: "Happy moments at the pub" },
  { src: "/assets/images/moments-4.jpg", position: "0% 0%", alt: "Guests at the pub" },
];

export default function HomePage() {
  return (
    <>
      <SideTabs />

      <section className={s.hero}>
        <ParallaxImage src="/assets/images/hero-bar.jpg" className={s.heroMedia} imgClassName={s.cover} />
        <div className={s.tagline}>
          <div className={s.taglineCell}>
            <h1 className={s.heroTitle}>Drink, Eat, Enjoy.</h1>
          </div>
          <div className={s.taglineCell}>
            <p className={s.heroSub}>Pub &amp; Eatery | Est. 2035</p>
          </div>
        </div>
      </section>

      <section className={s.welcome}>
        <div className={s.welcomeBand} />
        <Reveal className={s.welcomeKicker}>
          <p>Make Yourself at Home</p>
        </Reveal>
        <Reveal className={s.welcomeTitle}>
          <h2>ENJOY PREMIUM DRAFT BEER, GOOD WINES, AND OUR HEARTFUL DISHES</h2>
        </Reveal>
        <ParallaxImage
          src="/assets/images/bartender.jpg"
          alt="Bartender pouring a draft beer"
          objectPosition="100% 50%"
          className={s.welcomeImage}
          imgClassName={s.cover}
        />
        <div className={s.welcomeCol}>
          <div className={s.welcomeInner}>
            <Reveal className={s.welcomeText}>
              <p>{PARAGRAPH}</p>
            </Reveal>
            <Reveal className={s.welcomeButtonWrap}>
              <Link href="/reservations" className={`${s.button} ${s.buttonLight}`}>
                Book a Table
              </Link>
            </Reveal>
            <Reveal className={s.happy}>
              <p className={s.happyKicker}>Hello, Neighbor</p>
              <h2 className={s.happyTitle}>HAPPY HOUR</h2>
              <p className={s.happyTime}>12PM - 3PM</p>
              <span className={s.happyLine} aria-hidden="true" />
              <p className={s.happyDays}>Monday - Thursday</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={s.special}>
        <ParallaxImage
          src="/assets/images/special-drink.jpg"
          alt="Belgian beer and whisky glasses"
          className={s.specialImage}
          imgClassName={s.cover}
        />
        <div className={s.specialCol}>
          <div className={s.specialInner}>
            <Reveal className={s.specialKicker}>
              <h2>This Month’s Special</h2>
            </Reveal>
            <Reveal className={s.specialTitle}>
              <p>CELEBRATING BELGIAN BEER MONTH</p>
            </Reveal>
            <Reveal className={s.specialText}>
              <p>{PARAGRAPH}</p>
            </Reveal>
            <Reveal className={s.specialButtonWrap}>
              <Link href="/menu" className={`${s.button} ${s.buttonDark}`}>
                Our Menu
              </Link>
            </Reveal>
          </div>
        </div>
        <Reveal className={s.badge} from="left">
          {/* eslint-disable-next-line @next/next/no-img-element -- vector badge from the source */}
          <img src="/assets/svg/special-badge.svg" alt="" />
        </Reveal>
      </section>

      <section className={s.moments}>
        <h2 className={s.momentsTitle}>Happy Moments</h2>
        <Slideshow slides={MOMENTS} className={s.slideshow} />
      </section>

      <section className={s.events}>
        <div className={s.eventsBox}>
          <h2 className={s.eventsTitle}>Upcoming Events</h2>
          <div className={s.eventsList}>
            <EventsList />
          </div>
        </div>
      </section>

      <section className={s.reserve}>
        <span id="bookatable" className={s.anchor} />
        <div className={s.reserveBand}>
          <ReserveTableWidget />
        </div>
      </section>

      <section className={s.dropBy}>
        <ParallaxImage src="/assets/images/drop-by.jpg" alt="" className={s.dropByMedia} imgClassName={s.cover} />
        <div className={s.card}>
          <Reveal className={s.cardStarTop}>
            <SparkleIcon />
          </Reveal>
          <Reveal className={s.cardTitle}>
            <h2>
              DROP BY,
              <br />
              WE ARE OPEN.
            </h2>
          </Reveal>
          <Reveal className={`${s.cardLine} ${s.cardLine1}`}>
            <span />
          </Reveal>
          <Reveal className={s.cardAddressTitle}>
            <h3>Address</h3>
          </Reveal>
          <Reveal className={s.cardAddress}>
            <p>
              500 Terry Francine Street
              <br />
              San Francisco, CA 94158
            </p>
          </Reveal>
          <Reveal className={`${s.cardLine} ${s.cardLine2}`}>
            <span />
          </Reveal>
          <Reveal className={s.cardHoursTitle}>
            <h3>Opening Hours</h3>
          </Reveal>
          <Reveal className={s.cardHours}>
            <p>Monday - Sunday: 12pm - 1am</p>
          </Reveal>
          <Reveal className={s.cardStarBottom}>
            <SparkleIcon />
          </Reveal>
        </div>
      </section>
    </>
  );
}
