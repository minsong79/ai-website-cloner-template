import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ScrollbarWidth } from "@/components/site/ScrollbarWidth";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Home | The Gilded Finch 1",
    template: "%s | The Gilded Finch 1",
  },
  description: "Your neighborhood spot for every kind of night.",
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
      <body>
        <a className="wx-skip" href="#main">
          Skip to Main Content
        </a>
        <ScrollbarWidth />
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
