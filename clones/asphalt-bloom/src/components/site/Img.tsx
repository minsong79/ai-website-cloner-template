import type { ImgHTMLAttributes } from "react";

type ImgProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

// The downloaded template assets are already sized at ~2x their largest
// rendered size, so they are served as-is instead of through next/image.
export function Img({ loading = "lazy", decoding = "async", alt, ...props }: ImgProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt={alt} loading={loading} decoding={decoding} {...props} />;
}
