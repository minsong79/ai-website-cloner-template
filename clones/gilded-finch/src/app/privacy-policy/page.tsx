import type { Metadata } from "next";
import { Gap, PolicyPage, type PolicySection } from "@/components/site/PolicyPage";

export const metadata: Metadata = { title: "Privacy Policy" };

const SECTIONS: PolicySection[] = [
  {
    heightD: 1009.4,
    heightM: 1331.9,
    blocks: [
      { d: 121, m: 103, width: 702.8, content: <h1>Privacy Policy</h1> },
      { d: 214.3, m: 144, width: 702.8, content: <h2>A legal disclaimer</h2> },
      {
        d: 262.7,
        m: 180,
        width: 683.6,
        content: (
          <p>
            The explanations and information provided on this page are only general and high-level
            explanations and information on how to write your own document of a Privacy Policy. You
            should not rely on this article as legal advice or as recommendations regarding what you
            should actually do, because we cannot know in advance what are the specific privacy
            policies you wish to establish between your business and your customers and visitors. We
            recommend that you seek legal advice to help you understand and to assist you in the
            creation of your own Privacy Policy.
          </p>
        ),
      },
      { d: 436.5, m: 480, width: 702.8, content: <h2>Privacy Policy - the basics</h2> },
      {
        d: 484.1,
        m: 515.9,
        width: 683.6,
        content: (
          <>
            <p>
              Having said that, a privacy policy is a statement that discloses some or all of the
              ways a website collects, uses, discloses, processes, and manages the data of its
              visitors and customers. It usually also includes a statement regarding the
              website’s commitment to protecting its visitors’ or customers’ privacy, and an
              explanation about the different mechanisms the website is implementing in order to
              protect privacy.
            </p>
            <Gap />
            <p>
              Different jurisdictions have different legal obligations of what must be included in
              a Privacy Policy. You are responsible to make sure you are following the relevant
              legislation to your activities and location.
            </p>
          </>
        ),
      },
      { d: 715.6, m: 875.9, width: 702.8, content: <h2>What to include in the Privacy Policy</h2> },
      {
        d: 763.2,
        m: 935.9,
        width: 683.6,
        content: (
          <>
            <p>
              Generally speaking, a Privacy Policy often addresses these types of issues: the types
              of information the website is collecting and the manner in which it collects the data;
              an explanation about why is the website collecting these types of information; what
              are the website’s practices on sharing the information with third parties; ways in
              which your visitors and customers can exercise their rights according to the relevant
              privacy legislation; the specific practices regarding minors’ data collection; and
              much, much more.
            </p>
            <p>
              <br />
              To learn more about this, check out our article “
              <a href="https://support.wix.com/en/article/creating-a-privacy-policy" target="_blank" rel="noreferrer noopener">
                Creating a Privacy Policy
              </a>
              ”.
            </p>
          </>
        ),
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return <PolicyPage sections={SECTIONS} />;
}
