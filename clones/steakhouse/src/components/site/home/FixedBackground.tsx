import styles from "./FixedBackground.module.css";

type Props = {
  src: string;
  /** Image opacity over the #323232 underlay (the chef photo uses 0.48). */
  opacity?: number;
};

/**
 * Wix strip background with the "fixed" scroll effect. Desktop reproduces the
 * source technique: a media box extending one viewport above/below the section
 * (clipped with overflow: clip) and a sticky, viewport-tall image inside it.
 * The source mobile layout has no effect: the image simply covers the section.
 */
export function FixedBackground({ src, opacity = 1 }: Props) {
  return (
    <div className={styles.layer} aria-hidden="true">
      <div className={styles.media}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.img} src={src} alt="" style={{ opacity }} />
      </div>
    </div>
  );
}
