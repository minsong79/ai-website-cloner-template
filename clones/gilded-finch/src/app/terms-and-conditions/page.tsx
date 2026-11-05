import type { Metadata } from "next";
import { Gap, PolicyPage, type PolicySection } from "@/components/site/PolicyPage";

export const metadata: Metadata = { title: "Terms and Conditions" };

const SECTIONS: PolicySection[] = [
  {
    heightD: 1045.2,
    heightM: 1479.9,
    blocks: [
      { d: 116, m: 100, width: 702.8, content: <h1>Terms &amp; Conditions</h1> },
      { d: 214.4, m: 148, width: 702.8, content: <h2>A legal disclaimer</h2> },
      {
        d: 262,
        m: 183.9,
        width: 683.6,
        content: (
          <p>
            The explanations and information provided on this page are only general and high-level
            explanations and information on how to write your own document of Terms &amp;
            Conditions. You should not rely on this article as legal advice or as recommendations
            regarding what you should actually do, because we cannot know in advance what are the
            specific terms you wish to establish between your business and your customers and
            visitors. We recommend that you seek legal advice to help you understand and to assist
            you in the creation of your own Terms &amp; Conditions.
          </p>
        ),
      },
      { d: 436.8, m: 483.9, width: 702.8, content: <h2>Terms &amp; Conditions - the basics</h2> },
      {
        d: 484.4,
        m: 543.9,
        width: 683.6,
        content: (
          <>
            <p>
              Having said that, Terms and Conditions (“T&amp;C”) are a set of legally binding terms
              defined by you, as the owner of this website. The T&amp;C set forth the legal
              boundaries governing the activities of the website visitors, or your customers, while
              they visit or engage with this website. The T&amp;C are meant to establish the legal
              relationship between the site visitors and you as the website owner.
            </p>
            <Gap />
            <p>
              T&amp;C should be defined according to the specific needs and nature of each website.
              For example, a website offering products to customers in e-commerce transactions
              requires T&amp;C that are different from the T&amp;C of a website only providing
              information (like a blog, a landing page, and so on).
            </p>
            <Gap />
            <p>
              T&amp;C provide you as the website owner the ability to protect yourself from
              potential legal exposure, but this may differ from jurisdiction to jurisdiction, so
              make sure to receive local legal advice if you are trying to protect yourself from
              legal exposure.
            </p>
          </>
        ),
      },
      { d: 771.1, m: 1063.9, width: 702.8, content: <h2>What to include in the T&amp;C document</h2> },
      {
        d: 818.9,
        m: 1123.9,
        width: 683.6,
        content: (
          <>
            <p>
              Generally speaking, T&amp;C often address these types of issues: Who is allowed to use
              the website; the possible payment methods; a declaration that the website owner may
              change his or her offering in the future; the types of warranties the website owner
              gives his or her customers; a reference to issues of intellectual property or
              copyrights, where relevant; the website owner’s right to suspend or cancel a member’s
              account; and much, much more.
            </p>
            <Gap />
            <p>
              To learn more about this, check out our article “
              <a href="https://support.wix.com/en/article/creating-a-terms-and-conditions-policy" target="_blank" rel="noreferrer noopener">
                Creating a Terms and Conditions Policy
              </a>
              ”.
            </p>
          </>
        ),
      },
    ],
  },
];

export default function TermsAndConditionsPage() {
  return <PolicyPage sections={SECTIONS} />;
}
