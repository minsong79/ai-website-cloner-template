import Link from "next/link";

import { Img } from "@/components/site/Img";

import styles from "./home.module.css";

const cards = [
  {
    className: styles.card1,
    parallax: "20",
    image: "/assets/images/card-cappuccino.jpg",
    width: 664,
    height: 664,
    title: "Cappuccino crush",
    text: "A velvety cappuccino with rich espresso, silky foam, and a smooth kick to start the day right.",
  },
  {
    className: styles.card2,
    parallax: "10",
    image: "/assets/images/card-croissant.jpg",
    width: 946,
    height: 946,
    title: "The urban croissant",
    text: "A flaky, buttery croissant with a delicate crisp outside and soft, airy layers inside.",
  },
  {
    className: styles.card3,
    parallax: "20",
    image: "/assets/images/card-iced-latte.jpg",
    width: 817,
    height: 815,
    title: "Iced latte",
    text: "A smooth and refreshing blend of rich espresso, creamy milk, and ice.",
  },
];

export function HomePage() {
  return (
    <>
      <section className={`tex ${styles.stage} ${styles.hero}`} aria-label="Coffee with Character">
        <Img
          className={`${styles.heroImgA} ${styles.cover}`}
          src="/assets/images/hero-pour.jpg"
          alt="Barista pouring espresso over an iced Asphalt Bloom cup"
          width={1024}
          height={1024}
          loading="eager"
          fetchPriority="high"
        />
        <h1 className={`t-lead c-light center ${styles.heroTitle}`} data-enter="fade">
          Coffee with Character
        </h1>
        <p className={`t-body tight c-gray center ${styles.heroText}`}>
          Forget the polish. Embrace the real.
          <br />
          This is your space,
          <br />
          your brew, your moment.
        </p>
        <Link href="/menus" className={styles.heroBtn}>
          SEE THE MENU
        </Link>
        <Img
          className={`${styles.heroImgB} ${styles.cover}`}
          src="/assets/images/hero-friends.jpg"
          alt="Two friends laughing over coffee at the counter"
          width={1024}
          height={1024}
          loading="eager"
        />
      </section>

      <section className={`tex ${styles.stage} ${styles.mindset}`}>
        <span
          className={`${styles.doodle} ${styles.croissant}`}
          data-parallax="-7.5"
          data-parallax-mobile="-10"
          aria-hidden="true"
        >
          <Img src="/assets/svg/doodle-croissant.svg" alt="" width={160} height={126} />
        </span>
        <h2 className={`t-display c-gray center ${styles.mindsetTitle}`} data-enter="fade-expand">
          More Than A Cafe, It&apos;s A Mindset
        </h2>
        <span
          className={`${styles.doodle} ${styles.moka}`}
          data-parallax="-17.5"
          data-parallax-mobile="-5"
          aria-hidden="true"
        >
          <Img src="/assets/svg/doodle-moka-pot.svg" alt="" width={120} height={160} />
        </span>
        <p
          className={`t-lead c-gray center ${styles.mindsetText}`}
          data-enter="fade-slow"
          data-delay="200"
        >
          We’re built on the belief that the best things in life are unfiltered. From our
          single-origin beans to our stripped-back walls, Asphalt Bloom is a tribute to
          authenticity. A place to pause, create, and just be.
        </p>
      </section>

      <section
        className={styles.interior}
        role="img"
        aria-label="Inside Asphalt Bloom Cafe: concrete bar, blue tiles and a guest working at a laptop"
      />

      <section className={`tex ${styles.stage} ${styles.signature}`}>
        <h2 className={`t-display c-light center ${styles.signatureTitle}`} data-enter="fade-blur">
          Our Signature Creations
        </h2>
        <Img
          className={`${styles.hearts} ${styles.contain}`}
          src="/assets/svg/doodle-hearts.svg"
          alt=""
          aria-hidden="true"
          width={134}
          height={160}
          data-loop="wiggle"
        />
        <p className={`t-body c-light center ${styles.signatureText}`}>
          Handcrafted fuel for your day, made with grit and soul
        </p>
        {cards.map((card) => (
          <article
            key={card.title}
            className={`${styles.card} ${card.className}`}
            data-parallax={card.parallax}
          >
            <Img
              className={`${styles.cardImg} ${styles.cover}`}
              src={card.image}
              alt={card.title}
              width={card.width}
              height={card.height}
            />
            <h3 className={`t-lead c-light ${styles.cardTitle}`}>{card.title}</h3>
            <p className={`t-small c-light ${styles.cardText}`}>{card.text}</p>
          </article>
        ))}
      </section>

      <section className={`tex ${styles.stage} ${styles.corner}`}>
        <h2 className={`t-lead tight c-light center ${styles.cornerTitle}`}>Find your corner</h2>
        <Img
          className={`${styles.cornerImg} ${styles.cover}`}
          src="/assets/images/find-your-corner.jpg"
          alt="Iced drinks on a green glass table outside the cafe"
          width={1600}
          height={900}
          data-enter="fade-grow"
        />
        <p
          className={`t-body c-light center ${styles.cornerText}`}
          data-enter="fade"
          data-delay="200"
        >
          From quiet reads to late night talks. Our space is shaped by community. Exposed brick,
          reclaimed wood, and the constant hum of conversation. This is your third place.
        </p>
      </section>

      <section className={`tex ${styles.stage} ${styles.street}`}>
        <h2 className={`t-display c-gray ${styles.streetTitle}`} data-enter="fade-blur">
          FROM THE STREET
        </h2>
        <span className={`${styles.bubble} ${styles.bubbleB}`} data-loop="breathe" aria-hidden="true">
          <Img src="/assets/svg/speech-bubble-round.svg" alt="" width={160} height={127} />
        </span>
        <span className={`${styles.bubble} ${styles.bubbleA}`} data-loop="breathe" aria-hidden="true">
          <Img src="/assets/svg/speech-bubble-round.svg" alt="" width={160} height={127} />
        </span>
        <span className={`${styles.bubble} ${styles.bubbleC}`} data-loop="breathe" aria-hidden="true">
          <Img src="/assets/svg/speech-bubble-wide.svg" alt="" width={160} height={100} />
        </span>
        <Img
          className={`${styles.star} ${styles.star1}`}
          src="/assets/svg/doodle-asterisk.svg"
          alt=""
          aria-hidden="true"
          width={371}
          height={454}
          data-spin=""
        />
        <Img
          className={`${styles.star} ${styles.starA}`}
          src="/assets/svg/doodle-asterisk.svg"
          alt=""
          aria-hidden="true"
          width={371}
          height={454}
          data-spin=""
        />
        <Img
          className={`${styles.star} ${styles.starC}`}
          src="/assets/svg/doodle-asterisk.svg"
          alt=""
          aria-hidden="true"
          width={371}
          height={454}
          data-spin=""
        />
        <blockquote className={`t-lead c-gray ${styles.quote} ${styles.quote1}`}>
          &quot;Came for the coffee, stayed for the atmosphere. It feels like a real community. The
          &apos;Concrete Scone&apos; is a game-changer.&quot;
        </blockquote>
        <p className={`t-body c-light ${styles.name} ${styles.name1}`}>JORA VEX</p>
        <blockquote className={`t-lead c-gray ${styles.quote} ${styles.quote2}`}>
          &quot;This place gets it. No pretense, just great coffee and good people. It’s the city’s
          raw, beating heart.&quot;
        </blockquote>
        <p className={`t-body c-light ${styles.name} ${styles.name2}`}>SILAS CORVO</p>
        <blockquote className={`t-lead c-gray ${styles.quote} ${styles.quote3}`}>
          &quot;Finally, a coffee shop with some damn soul. The espresso is lethal in the best way.
          My go-to spot.&quot;
        </blockquote>
        <p className={`t-body c-light ${styles.name} ${styles.name3}`}>KAELEN RORKE</p>
      </section>
    </>
  );
}
