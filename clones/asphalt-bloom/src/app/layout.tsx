import type { Metadata, Viewport } from "next";

import { MotionController } from "@/components/site/MotionController";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Home | Asphalt Bloom Cafe",
    template: "%s | Asphalt Bloom Cafe",
  },
  openGraph: {
    siteName: "Asphalt Bloom Cafe",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/assets/fonts/anton-latin-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/ibm-plex-mono-latin-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <SiteHeader />
        <div className="site">
          <main id="main">{children}</main>
          <SiteFooter />
        </div>
        <MotionController />
      </body>
    </html>
  );
}
