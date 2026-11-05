import type { Metadata } from "next";
import { PolicyPage, type PolicySection } from "@/components/site/PolicyPage";

export const metadata: Metadata = { title: "Refund Policy" };

const SECTIONS: PolicySection[] = [
  {
    heightD: 857.8,
    heightM: 1048.9,
    blocks: [
      { d: 116, m: 109.9, width: 702.8, content: <h1>Refund Policy</h1> },
      { d: 214.4, m: 167.9, width: 702.8, content: <h2>A legal disclaimer</h2> },
      {
        d: 262,
        m: 203.8,
        width: 683.6,
        content: (
          <p>
            The explanations and information provided on this page are only general and high-level
            explanations and information on how to write your own document of a Refund Policy. You
            should not rely on this article as legal advice or as recommendations regarding what you
            should actually do, because we cannot know in advance what are the specific refund
            policies that you wish to establish between your business and your customers. We
            recommend that you seek legal advice to help you understand and to assist you in the
            creation of your own Refund Policy.
          </p>
        ),
      },
      { d: 436.8, m: 503.8, width: 702.8, content: <h2>Refund Policy - the basics</h2> },
      {
        d: 485,
        m: 539.8,
        width: 683.6,
        content: (
          <p>
            Having said that, a Refund Policy is a legally binding document that is meant to
            establish the legal relations between you and your customers regarding how and if you
            will provide them with a refund. Online businesses selling products are sometimes
            required (depending on local laws and regulations) to present their product return
            policy and refund policy. In some jurisdictions, this is needed in order to comply with
            consumer protection laws. It may also help you avoid legal claims from customers that
            are not satisfied with the products they purchased.
          </p>
        ),
      },
      { d: 658.8, m: 839.8, width: 702.8, content: <h2>What to include in the Refund Policy</h2> },
      {
        d: 706.6,
        m: 899.8,
        width: 683.6,
        content: (
          <p>
            Generally speaking, a Refund Policy often addresses these types of issues: the timeframe
            for asking for a refund; will the refund be full or partial; under which conditions will
            the customer receive a refund; and much, much more.
          </p>
        ),
      },
    ],
  },
];

export default function RefundPolicyPage() {
  return <PolicyPage sections={SECTIONS} />;
}
