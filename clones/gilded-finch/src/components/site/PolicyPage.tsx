import type { CSSProperties, ReactNode } from "react";
import styles from "./policy.module.css";

/**
 * Wix Studio legal/policy pages: stacked sections whose rich-text blocks sit at
 * measured offsets. `d` values are 1280px design units, `m` values 390px units.
 */
export type PolicyBlock = {
  content: ReactNode;
  /** top offset within the section */
  d: number;
  m: number;
  /** desktop width (mobile blocks are always 342 units wide) */
  width: number;
};

export type PolicySection = {
  heightD: number;
  heightM: number;
  dark?: boolean;
  blocks: PolicyBlock[];
};

type Vars = CSSProperties & Record<`--${string}`, string>;

export function PolicyPage({ sections }: { sections: PolicySection[] }) {
  return (
    <>
      {sections.map((section, index) => (
        <section
          key={index}
          className={`wx-section ${styles.section} ${section.dark ? styles.dark : ""}`}
          style={{ "--h-d": String(section.heightD), "--h-m": String(section.heightM) } as Vars}
        >
          <div className={`wx-stage ${styles.stage}`}>
            {section.blocks.map((block, blockIndex) => (
              <div
                key={blockIndex}
                className={styles.block}
                style={
                  {
                    "--top-d": String(block.d),
                    "--top-m": String(block.m),
                    "--w-d": String(block.width),
                  } as Vars
                }
              >
                {block.content}
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

/** A Wix empty paragraph (zero-width guard) that keeps one line of height. */
export function Gap() {
  return <p aria-hidden="true">{"​"}</p>;
}
