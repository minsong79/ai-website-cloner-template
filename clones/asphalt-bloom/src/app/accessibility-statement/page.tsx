import type { Metadata } from "next";

import styles from "@/components/site/policy.module.css";

export const metadata: Metadata = {
  title: "Accessibility Statement",
};

const adjustments = [
  "Used the Accessibility Wizard to find and fix potential accessibility issues",
  "Set the language of the site ",
  "Set the content order of the site’s pages",
  "Defined clear heading structures on all of the site’s pages",
  "Added alternative text to images",
  "Implemented color combinations that meet the required color contrast",
  "Reduced the use of motion on the site",
  "Ensured all videos, audio, and files on the site are accessible",
];

const coordinator = [
  "[Name of the accessibility coordinator]",
  "[Telephone number of the accessibility coordinator]",
  "[Email address of the accessibility coordinator]",
  "[Enter any additional contact details if relevant / available]",
];

export default function AccessibilityStatementPage() {
  return (
    <>
      <section className={`${styles.section} ${styles.light} ${styles.intro}`}>
        <p className={`${styles.text} ${styles.w342}`}>
          The purpose of the following template is to assist you in writing your accessibility statement.
          Please note that you are responsible for ensuring that your site&apos;s statement meets the
          requirements of the local law in your area or region.
          <br />
          <br />
          *Note: This page currently has several sections. Once you complete editing the Accessibility
          Statement below, you need to delete this section.
          <br />
          <br />
          To learn more about this, check out our article “
          <a
            href="https://support.wix.com/en/article/accessibility-adding-an-accessibility-statement-to-your-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            Accessibility: Adding an Accessibility Statement to Your Site
          </a>
          ”.
        </p>
      </section>

      <section className={`${styles.section} ${styles.first} ${styles.stack} ${styles.gap22}`}>
        <h3 className={`${styles.title} ${styles.w1086}`}>Accessibility Statement</h3>
        <div className={`${styles.text} ${styles.w616}`}>
          <p>
            This statement was last updated on <em>[enter relevant date]</em>.
          </p>
          <p>{"​"}</p>
          <p>
            We at <em>[enter organization / business name]</em> are working to make our site{" "}
            <em>[enter site name and&nbsp; address]</em> accessible to people with disabilities.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.stack} ${styles.gap20}`}>
        <h2 className={`${styles.heading} ${styles.w791}`}>What web accessibility is</h2>
        <p className={`${styles.text} ${styles.w768}`}>
          An accessible site allows visitors with disabilities to browse the site with the same or a
          similar level of ease and enjoyment as other visitors. This can be achieved with the
          capabilities of the system on which the site is operating, and through assistive technologies.
        </p>
      </section>

      <section className={`${styles.section} ${styles.stack} ${styles.gap27}`}>
        <h2 className={`${styles.heading} ${styles.w791}`}>Accessibility Adjustments on This Site</h2>
        <div className={`${styles.text} ${styles.w828}`}>
          <p>
            We have adapted this site in accordance with WCAG{" "}
            <em>[2.0 / 2.1 / 2.2 - select relevant option]</em> guidelines, and have made the site
            accessible to the level of <em>[A / AA / AAA - select relevant option]</em>. This site&apos;s
            contents have been adapted to work with assistive technologies, such as screen readers and
            keyboard use. As part of this effort, we have also <em>[remove irrelevant information]</em>:
            <br />
            &nbsp;
          </p>
          <ul>
            {adjustments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.section} ${styles.stack} ${styles.gap27}`}>
        <h2 className={`${styles.heading} ${styles.w922}`}>
          Declaration of Partial Compliance With the Standard Due to Third-Party Content{" "}
          <em>[only add if relevant]</em>
        </h2>
        <p className={`${styles.text} ${styles.w828}`}>
          The accessibility of certain pages on the site depend on contents that do not belong to the
          organization, and instead belong to<em> [enter relevant third-party name]</em>. The following
          pages are affected by this: <em>[list the URLs of the pages]</em>. We therefore declare partial
          compliance with the standard for these pages.
        </p>
      </section>

      <section className={`${styles.section} ${styles.stack} ${styles.gap27}`}>
        <h2 className={`${styles.heading} ${styles.w808}`}>
          Accessibility Arrangements in the Organization <em>[only add if relevant]</em>
        </h2>
        <p className={`${styles.text} ${styles.w828}`}>
          <em>
            [Enter a description of the accessibility arrangements in the physical offices / branches of
            your site&apos;s organization or business. The description can include all current
            accessibility arrangements&nbsp; - starting from the beginning of the service (e.g., the
            parking lot and / or&nbsp; public transportation stations) to the end (such as the service
            desk, restaurant table, classroom etc.). It is also required to specify any additional
            accessibility arrangements, such as disabled services and their location, and accessibility
            accessories (e.g. in audio inductions and elevators) available for use]
          </em>
        </p>
      </section>

      <section className={`${styles.section} ${styles.stack} ${styles.gap27} ${styles.last}`}>
        <h2 className={`${styles.heading} ${styles.w808}`}>Requests, Issues, and Suggestions</h2>
        <p className={`${styles.text} ${styles.w683}`}>
          If you find an accessibility issue on the site, or if you require further assistance, you are
          welcome to contact us through the organization&apos;s accessibility coordinator:
        </p>
        <div className={`${styles.text} ${styles.w828}`}>
          <ul>
            {coordinator.map((item) => (
              <li key={item}>
                <em>{item}</em>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
