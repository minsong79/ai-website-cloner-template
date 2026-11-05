import type { Metadata } from "next";
import { Gap, PolicyPage, type PolicySection } from "@/components/site/PolicyPage";

export const metadata: Metadata = { title: "Accessibility Statement" };

const SECTIONS: PolicySection[] = [
  {
    heightD: 324.4,
    heightM: 450.2,
    dark: true,
    blocks: [
      {
        d: 126.1,
        m: 118,
        width: 690.5,
        content: (
          <p>
            The purpose of the following template is to assist you in writing your accessibility
            statement. Please note that you are responsible for ensuring that your site&apos;s
            statement meets the requirements of the local law in your area or region.
            <br />
            <br />
            *Note: This page currently has several sections. Once you complete editing the
            Accessibility Statement below, you need to delete this section.
            <br />
            <br />
            To learn more about this, check out our article “
            <a
              href="https://support.wix.com/en/article/accessibility-adding-an-accessibility-statement-to-your-site"
              target="_blank"
              rel="noreferrer noopener"
            >
              Accessibility: Adding an Accessibility Statement to Your Site
            </a>
            ”.
          </p>
        ),
      },
    ],
  },
  {
    heightD: 267.1,
    heightM: 311.9,
    blocks: [
      { d: 75.9, m: 76, width: 965.7, content: <h1>Accessibility Statement</h1> },
      {
        d: 147.5,
        m: 116,
        width: 547.8,
        content: (
          <>
            <p>
              This statement was last updated on <em>[enter relevant date]</em>.
            </p>
            <Gap />
            <p>
              We at <em>[enter organization / business name]</em> are working to make our site{" "}
              <em>[enter site name and address]</em> accessible to people with disabilities.
            </p>
          </>
        ),
      },
    ],
  },
  {
    heightD: 151.5,
    heightM: 236,
    blocks: [
      { d: -0.5, m: 40, width: 702.7, content: <h2>What web accessibility is</h2> },
      {
        d: 49.7,
        m: 76,
        width: 682.8,
        content: (
          <p>
            An accessible site allows visitors with disabilities to browse the site with the same or
            a similar level of ease and enjoyment as other visitors. This can be achieved with the
            capabilities of the system on which the site is operating, and through assistive
            technologies.
          </p>
        ),
      },
    ],
  },
  {
    heightD: 343.7,
    heightM: 580,
    blocks: [
      { d: -0.5, m: 40, width: 702.7, content: <h2>Accessibility Adjustments on This Site</h2> },
      {
        d: 55.3,
        m: 100,
        width: 735.8,
        content: (
          <>
            <p>
              We have adapted this site in accordance with WCAG{" "}
              <em>[2.0 / 2.1 / 2.2 - select relevant option]</em> guidelines, and have made the
              site accessible to the level of <em>[A / AA / AAA - select relevant option]</em>.
              This site&apos;s contents have been adapted to work with assistive technologies, such
              as screen readers and keyboard use. As part of this effort, we have also{" "}
              <em>[remove irrelevant information]</em>:
              <br />
              {" "}
            </p>
            <ul>
              <li>Used the Accessibility Wizard to find and fix potential accessibility issues</li>
              <li>Set the language of the site</li>
              <li>Set the content order of the site’s pages</li>
              <li>Defined clear heading structures on all of the site’s pages</li>
              <li>Added alternative text to images</li>
              <li>Implemented color combinations that meet the required color contrast</li>
              <li>Reduced the use of motion on the site</li>
              <li>Ensured all videos, audio, and files on the site are accessible</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    heightD: 188.2,
    heightM: 328,
    blocks: [
      {
        d: -0.5,
        m: 40,
        width: 819.7,
        content: (
          <h2>
            Declaration of Partial Compliance With the Standard Due to Third-Party Content{" "}
            <em>[only add if relevant]</em>
          </h2>
        ),
      },
      {
        d: 87.3,
        m: 148,
        width: 735.8,
        content: (
          <p>
            The accessibility of certain pages on the site depend on contents that do not belong to
            the organization, and instead belong to<em> [enter relevant third-party name]</em>. The
            following pages are affected by this: <em>[list the URLs of the pages]</em>. We
            therefore declare partial compliance with the standard for these pages.
          </p>
        ),
      },
    ],
  },
  {
    heightD: 244.4,
    heightM: 444,
    blocks: [
      {
        d: -0.5,
        m: 40,
        width: 717.7,
        content: (
          <h2>
            Accessibility Arrangements in the Organization <em>[only add if relevant]</em>
          </h2>
        ),
      },
      {
        d: 87.2,
        m: 124,
        width: 735.8,
        content: (
          <p>
            <em>
              [Enter a description of the accessibility arrangements in the physical offices /
              branches of your site&apos;s organization or business. The description can include
              all current accessibility arrangements - starting from the beginning of the service
              (e.g., the parking lot and / or public transportation stations) to the end (such as
              the service desk, restaurant table, classroom etc.). It is also required to specify
              any additional accessibility arrangements, such as disabled services and their
              location, and accessibility accessories (e.g. in audio inductions and elevators)
              available for use]
            </em>
          </p>
        ),
      },
    ],
  },
  {
    heightD: 245.5,
    heightM: 400,
    blocks: [
      { d: -0.5, m: 40, width: 717.7, content: <h2>Requests, Issues, and Suggestions</h2> },
      {
        d: 55.9,
        m: 128,
        width: 607.2,
        content: (
          <p>
            If you find an accessibility issue on the site, or if you require further assistance,
            you are welcome to contact us through the organization&apos;s accessibility
            coordinator:
          </p>
        ),
      },
      {
        d: 108.5,
        m: 219.9,
        width: 735.8,
        content: (
          <ul>
            <li>
              <em>[Name of the accessibility coordinator]</em>
            </li>
            <li>
              <em>[Telephone number of the accessibility coordinator]</em>
            </li>
            <li>
              <em>[Email address of the accessibility coordinator]</em>
            </li>
            <li>
              <em>[Enter any additional contact details if relevant / available]</em>
            </li>
          </ul>
        ),
      },
    ],
  },
];

export default function AccessibilityStatementPage() {
  return <PolicyPage sections={SECTIONS} />;
}
