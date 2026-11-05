import type { Metadata } from "next";
import { ParallaxImage, Reveal } from "@/components/site/motion";
import s from "./about.module.css";

export const metadata: Metadata = { title: { absolute: "About" } };

export default function AboutPage() {
  return (
    <>
      <section className={s.story}>
        <div className={s.box}>
          <ParallaxImage src="/assets/images/about-bar.jpg" alt="Bar counter with beer taps" className={s.storyImage} imgClassName={s.cover} />
          <div className={s.storyCol}>
            <div className={s.storyInner}>
              <Reveal className={s.kicker}>
                <h1>Our Story</h1>
              </Reveal>
              <Reveal className={s.title}>
                <p>
                  Pub &amp; Eatery
                  <br />
                  Est. 2035
                </p>
              </Reveal>
              <Reveal className={s.p1}>
                <p>
                  I&apos;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own
                  content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a
                  story and let your users know a little more about you.
                </p>
              </Reveal>
              <Reveal className={s.p2}>
                <p>
                  This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail
                  about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for
                  your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <section className={s.events}>
        <div className={s.box2}>
          <ParallaxImage src="/assets/images/about-cheers.jpg" alt="Friends toasting with beers" className={s.eventsImage} imgClassName={s.cover} />
          <div className={s.eventsCol}>
            <div className={s.eventsInner}>
              <Reveal className={s.h2}>
                <h2>We Are Open for Private Events</h2>
              </Reveal>
              <Reveal className={s.p3}>
                <p>
                  I&apos;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own
                  content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
              </Reveal>
              <Reveal className={s.contact}>
                <p>Contact Us to Learn More</p>
              </Reveal>
              <Reveal className={s.email}>
                <a href="mailto:info@mysite.com">info@mysite.com</a>
              </Reveal>
              <Reveal className={s.phone}>
                <p>123-456-7890</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
