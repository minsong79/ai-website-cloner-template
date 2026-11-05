"use client";

import { useEffect, useRef, useState } from "react";
import { PauseGlyph, PlayGlyph } from "./icons";
import styles from "./background-video.module.css";

type BackgroundVideoProps = {
  poster: string;
  desktopSrc: string;
  mobileSrc: string;
  /** Accessible name used by the play/pause toggle, as on the source. */
  title: string;
  className?: string;
  videoClassName?: string;
  showToggle?: boolean;
};

/** Wix background video: muted, looping, inline autoplay, poster until frames arrive. */
export function BackgroundVideo({
  poster,
  desktopSrc,
  mobileSrc,
  title,
  className,
  videoClassName,
  showToggle = false,
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }
    const attempt = video.play();
    if (attempt) attempt.catch(() => setPlaying(false));
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className={`${styles.root} ${className ?? ""}`}>
      <video
        ref={videoRef}
        className={`${styles.video} ${videoClassName ?? ""}`}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-hidden="true"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={mobileSrc} type="video/mp4" media="(max-width: 1023px)" />
        <source src={desktopSrc} type="video/mp4" />
      </video>
      {showToggle ? (
        <button type="button" className={styles.toggle} onClick={toggle}>
          <span className="wx-sr-only">
            {playing ? "Pause" : "Play"} Background Video: {title}
          </span>
          {playing ? <PauseGlyph width={18} height={18} /> : <PlayGlyph width={18} height={18} />}
        </button>
      ) : null}
    </div>
  );
}
