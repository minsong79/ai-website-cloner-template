// SVG icons extracted from the source page (Wix shapes and app widgets).
// Colors are applied through CSS (currentColor) instead of baked-in fills.
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function CartIcon({ count, ...props }: IconProps & { count: number }) {
  return (
    <svg viewBox="0 0 197.7 166" preserveAspectRatio="xMinYMax meet" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M79.3913 147.956C79.3913 141.977 74.5443 137.13 68.5652 137.13C62.5861 137.13 57.7391 141.977 57.7391 147.956C57.7391 153.935 62.5861 158.782 68.5652 158.782C74.5443 158.782 79.3913 153.935 79.3913 147.956ZM86.6087 147.956C86.6087 157.921 78.5303 166 68.5652 166C58.6001 166 50.5217 157.921 50.5217 147.956C50.5217 137.991 58.6001 129.913 68.5652 129.913C78.5303 129.913 86.6087 137.991 86.6087 147.956Z"
      />
      <path
        fill="currentColor"
        d="M144.348 147.956C144.348 141.977 139.501 137.13 133.522 137.13C127.543 137.13 122.696 141.977 122.696 147.956C122.696 153.935 127.543 158.782 133.522 158.782C139.501 158.782 144.348 153.935 144.348 147.956ZM151.565 147.956C151.565 157.921 143.487 166 133.522 166C123.557 166 115.478 157.921 115.478 147.956C115.478 137.991 123.557 129.913 133.522 129.913C143.487 129.913 151.565 137.991 151.565 147.956Z"
      />
      <path
        fill="currentColor"
        d="M19.1289 0C24.4107 0.00134637 28.9694 3.78942 29.8352 9.09222H29.8281L48.4496 120.877C49.3148 126.065 53.8766 129.913 59.1135 129.913H137.13V137.13H59.1135C50.3492 137.13 42.7757 130.731 41.3308 122.061L22.7094 10.2622V10.2552C22.4207 8.48681 20.9177 7.21872 19.1289 7.21739H0V0H19.1289Z"
      />
      <path
        fill="currentColor"
        d="M158.783 84.156V28.8696H166V84.156C165.999 89.453 162.204 93.8928 157.021 94.7706L157.028 94.7847L40.3229 115.351L39.0684 108.247L155.773 87.673L155.808 87.666C157.538 87.3772 158.782 85.921 158.783 84.156Z"
      />
      <text
        x="95"
        y="25"
        dy=".48em"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: "var(--font-georgia)", fontSize: 90 }}
      >
        {count}
      </text>
    </svg>
  );
}

export function ChatBubbleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M16 2C8.28 2 2 7.8 2 14.93a12.144 12.144 0 001.696 6.15l-1.668 7.51A1.16 1.16 0 003.63 29.9l6.914-3.072A14.835 14.835 0 0016 27.861c7.72 0 14-5.8 14-12.93S23.72 2 16 2zm4.508 16.32h-9.016a1.16 1.16 0 010-2.32h9.016a1.16 1.16 0 010 2.32zm0-4.638h-9.016a1.16 1.16 0 010-2.318h9.016a1.16 1.16 0 110 2.318z"
      />
    </svg>
  );
}

export function ThinCloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.2928932,3.99989322 L20,4.707 L12.7068932,11.9998932 L20,19.2928932 L19.2928932,20 L11.9998932,12.7068932 L4.707,20 L3.99989322,19.2928932 L11.2928932,11.9998932 L3.99989322,4.707 L4.707,3.99989322 L11.9998932,11.2928932 L19.2928932,3.99989322 Z"
      />
    </svg>
  );
}

export function ChatCloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.077 6l.923.923L12.923 12 18 17.077l-.923.923L12 12.923 6.923 18 6 17.077 11.076 12 6 6.923 6.923 6 12 11.077 17.077 6z"
      />
    </svg>
  );
}

export function ModalCloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 600 592" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M531.936 536.904L323.094 328.063 114.253 536.904l-32.064-32.062L291.032 296 82.189 87.157l32.064-32.061 208.842 208.842L531.936 55.096 564 87.157 355.155 296 564 504.842l-32.064 32.062z"
      />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.2546728,8.18171329 L18.9617796,8.88882007 L12.5952867,15.2537133 L12.5978964,15.2558012 L11.8907896,15.962908 L11.8882867,15.9607133 L11.8874628,15.9617796 L11.180356,15.2546728 L11.1812867,15.2527133 L4.81828671,8.88882007 L5.52539349,8.18171329 L11.8882867,14.5457133 L18.2546728,8.18171329 Z"
      />
    </svg>
  );
}

export function SmallChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.6478199,6.64528691 L16.3549267,7.35239369 L11.0627131,12.6461801 L11.0652534,12.6489483 L10.3581467,13.356055 L10.3557131,13.3531801 L10.3548199,13.3549267 L9.64771309,12.6478199 L9.64771309,12.6451801 L4.35471309,7.35228691 L5.06181987,6.64518013 L10.3547131,11.9381801 L15.6478199,6.64528691 Z"
      />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.70710678,4.99810828 L15.068,11.3651083 L15.0722115,11.3620693 L15.7793183,12.0691761 L15.776,12.0721083 L15.7782433,12.0758831 L15.0711365,12.7829899 L15.069,12.7801083 L8.70710678,19.1434929 L8,18.4363861 L14.361,12.0721083 L8,5.70521506 L8.70710678,4.99810828 Z"
      />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.5,19 L5.5,19 C5.224,19 5,18.775 5,18.5 L5,10 L19,10 L19,18.5 C19,18.775 18.776,19 18.5,19 M5.5,6 L7,6 L7,7 L8,7 L8,6 L16,6 L16,7 L17,7 L17,6 L18.5,6 C18.776,6 19,6.225 19,6.5 L19,9 L5,9 L5,6.5 C5,6.225 5.224,6 5.5,6 M18.5,5 L17,5 L17,4 L16,4 L16,5 L8,5 L8,4 L7,4 L7,5 L5.5,5 C4.673,5 4,5.673 4,6.5 L4,18.5 C4,19.327 4.673,20 5.5,20 L18.5,20 C19.327,20 20,19.327 20,18.5 L20,6.5 C20,5.673 19.327,5 18.5,5"
      />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M127.107 41.149 133 47.04l-53.039 53.03L133 153.107 127.107 159l-58.925-58.926 58.925-58.925Z"
      />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M73.893 158.851 68 152.959l53.039-53.028L68 46.894 73.893 41l58.925 58.926-58.925 58.925Z"
      />
    </svg>
  );
}

export function ScrollChevronIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 6 12" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M6 6L.8 0 0 .7 4.7 6 0 11.3l.8.7z" />
    </svg>
  );
}

/** Wix shape b861b040274141de9c08999ec3b76edf.svg (rotated to point up for GO TO TOP). */
export function GoTopChevronIcon(props: IconProps) {
  return (
    <svg viewBox="13.05 2.55 33.878 54.8" preserveAspectRatio="xMidYMid meet" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M46.5 28.9L20.6 3c-.6-.6-1.6-.6-2.2 0l-4.8 4.8c-.6.6-.6 1.6 0 2.2l19.8 20-19.9 19.9c-.6.6-.6 1.6 0 2.2l4.8 4.8c.6.6 1.6.6 2.2 0l21-21 4.8-4.8c.8-.6.8-1.6.2-2.2z"
      />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 3C14.084 3 17 5.916 17 9.5S14.084 16 10.5 16A6.508 6.508 0 0 1 4 9.5C4 5.916 6.916 3 10.5 3Zm0 1A5.506 5.506 0 0 0 5 9.5c0 3.033 2.467 5.5 5.5 5.5S16 12.533 16 9.5 13.533 4 10.5 4Zm.5 2v3h3v1h-4V6h1Z"
      />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.058 8.015c.19-.99.98-1.78 1.97-1.97h.01c.82-.15 1.66.11 2.25.69.59.58.85 1.43.69 2.25-.19.99-.98 1.78-1.97 1.97-.16.03-.32.04-.48.04-.67 0-1.31-.26-1.78-.73-.59-.58-.85-1.43-.69-2.25Zm2.76 1.95c.58-.11 1.06-.59 1.17-1.17.1-.51-.05-1-.41-1.36-.29-.29-.66-.44-1.06-.44a1.498 1.498 0 0 0-1.47 1.2c-.1.51.05 1 .41 1.36.36.36.85.5 1.36.41Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.088 2.145c1.97-.41 3.98.06 5.51 1.3a6.474 6.474 0 0 1 2.41 5.05 6.462 6.462 0 0 1-.568 2.664c-.006.012-.012.021-.012.036-.87 1.9-2.51 4.05-4.87 6.38-.29.29-.67.43-1.05.43s-.76-.15-1.05-.43c-2.37-2.34-4.01-4.49-4.88-6.4-.002-.006-.005-.01-.008-.015-.006-.011-.012-.02-.012-.035a6.554 6.554 0 0 1-.39-4.13c.54-2.39 2.51-4.34 4.92-4.85Zm6.41 8.66c.01-.01.02-.04.02-.04h.01c.32-.72.49-1.49.49-2.28 0-1.66-.75-3.22-2.04-4.27-1.3-1.05-3-1.46-4.67-1.1-2.03.43-3.7 2.07-4.15 4.09-.28 1.22-.16 2.44.34 3.54.02.01.02.03.02.04.82 1.79 2.39 3.83 4.65 6.06.19.19.49.19.69 0 2.25-2.23 3.82-4.26 4.64-6.04Z"
      />
    </svg>
  );
}

export function MinusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20,12 L20,13 L5,13 L5,12 L20,12 Z" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13,5 L13,12 L20,12 L20,13 L13,13 L13,20 L12,20 L11.999,13 L5,13 L5,12 L12,12 L12,5 L13,5 Z"
      />
    </svg>
  );
}

export function TrashIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.5,3 C14.327,3 15,3.673 15,4.5 L15,4.5 L15,5 L19,5 L19,6 L18,6 L18,17.5 C18,18.879 16.878,20 15.5,20 L15.5,20 L7.5,20 C6.122,20 5,18.879 5,17.5 L5,17.5 L5,6 L4,6 L4,5 L8,5 L8,4.5 C8,3.673 8.673,3 9.5,3 L9.5,3 Z M17,6 L6,6 L6,17.5 C6,18.327 6.673,19 7.5,19 L7.5,19 L15.5,19 C16.327,19 17,18.327 17,17.5 L17,17.5 L17,6 Z M10,9 L10,16 L9,16 L9,9 L10,9 Z M14,9 L14,16 L13,16 L13,9 L14,9 Z M13.5,4 L9.5,4 C9.224,4 9,4.225 9,4.5 L9,4.5 L9,5 L14,5 L14,4.5 C14,4.225 13.776,4 13.5,4 L13.5,4 Z"
      />
    </svg>
  );
}

export function TagIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M19,11.7071068 L11.2071068,19.5 C10.8165825,19.8905243 10.1834175,19.8905243 9.79289322,19.5 L4.5,14.2071068 C4.10947571,13.8165825 4.10947571,13.1834175 4.5,12.7928932 L12.2928932,5 L19,5 L19,11.7071068 Z M18,6 L12.7071068,6 L5.20710678,13.5 L10.5,18.7928932 L18,11.2928932 L18,6 Z M15,10 C14.4477153,10 14,9.55228475 14,9 C14,8.44771525 14.4477153,8 15,8 C15.5522847,8 16,8.44771525 16,9 C16,9.55228475 15.5522847,10 15,10 Z"
      />
    </svg>
  );
}

export function NoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M13,6.70710678 L13,9 L15.2928932,9 L13,6.70710678 Z M17,19 C17,19.5522847 16.5522847,20 16,20 L7,20 C6.44771525,20 6,19.5522847 6,19 L6,6 C6,5.44771525 6.44771525,5 7,5 L12.7099045,5 L17,9.2995551 L17,19 Z M16,10 L12,10 L12,6 L7,6 L7,19 L16,19 L16,10 Z"
      />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 11 14" aria-hidden="true" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M0 12.79c0 .558.445 1.01.996 1.01h9.008A1 1 0 0 0 11 12.79V6.01c0-.558-.445-1.01-.996-1.01H.996A1 1 0 0 0 0 6.01v6.78Z" />
        <path
          fillRule="nonzero"
          d="M9.5 5v-.924C9.5 2.086 7.696.5 5.5.5c-2.196 0-4 1.586-4 3.576V5h1v-.924c0-1.407 1.33-2.576 3-2.576s3 1.17 3 2.576V5h1Z"
        />
      </g>
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.5,19 C11.331,19 11.166,18.985 11,18.975 L11,16.5 C11,16.224 10.776,16 10.5,16 L9.5,16 C9.224,16 9,15.775 9,15.5 L9,12.5 C9,12.366 8.947,12.238 8.852,12.145 L4.804,8.14 C6.04,5.688 8.573,4 11.5,4 C12.76,4 13.946,4.315 14.989,4.866 L15,6.497 C15.001,6.631 14.949,6.757 14.855,6.853 C14.76,6.947 14.634,7 14.5,7 L12.339,7 C12.207,7 12.08,7.053 11.986,7.146 L10.146,8.983 C10.053,9.077 10,9.204 10,9.337 L10,10.5 C10,11.325 10.672,11.999 11.499,12 L15.293,12 L17,13.707 L17,16.582 C15.629,18.064 13.674,19 11.5,19 M4,11.5 C4,10.673 4.14,9.879 4.388,9.135 L8,12.709 L8,15.5 C8,16.327 8.673,17 9.5,17 L10,17 L10,18.849 C6.581,18.152 4,15.122 4,11.5 M19,11.5 C19,12.856 18.632,14.127 18,15.226 L18,13.5 C18,13.367 17.947,13.24 17.854,13.146 L15.854,11.146 C15.76,11.053 15.633,11 15.5,11 L11.5,11 C11.224,11 11,10.775 11,10.5 L11,9.544 L12.546,8 L14.5,8 C14.902,8 15.281,7.843 15.564,7.557 C15.848,7.271 16.003,6.892 16,6.49 L15.993,5.51 C17.814,6.879 19,9.051 19,11.5 M11.5,3 C6.813,3 3,6.813 3,11.5 C3,16.187 6.813,20 11.5,20 C16.187,20 20,16.187 20,11.5 C20,6.813 16.187,3 11.5,3"
      />
    </svg>
  );
}

export function EmojiIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M10,0a10,10,0,1,0,9.85,8.26A10,10,0,0,0,10,0Zm0,19A9,9,0,1,1,18.87,8.44,9.11,9.11,0,0,1,19,10,9,9,0,0,1,10,19Zm4.23-6.88a4.5,4.5,0,0,1-8.72,0l1-.25a3.5,3.5,0,0,0,6.78,0ZM8,8A1,1,0,1,1,7,7,1,1,0,0,1,8,8Zm6,0a1,1,0,1,1-1-1A1,1,0,0,1,14,8Z"
      />
    </svg>
  );
}

export function AttachIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 9 23" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M4.5,23A4.5,4.5,0,0,1,0,18.5V4.5a4.5,4.5,0,0,1,9,0H8a3.5,3.5,0,0,0-7,0v14a3.5,3.5,0,0,0,7,0v-9a1.5,1.5,0,0,0-3,0V17H4V9.5a2.5,2.5,0,0,1,5,0v9A4.5,4.5,0,0,1,4.5,23Z"
      />
    </svg>
  );
}

/** Outline Instagram glyph used in the gallery lightbox header. */
export function InstagramOutlineIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.8" cy="7.2" r="1" fill="currentColor" />
    </svg>
  );
}
