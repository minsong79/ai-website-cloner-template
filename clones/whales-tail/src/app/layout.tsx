import type { Metadata, Viewport } from "next";
import { BackToTop, DemoModeDialog, MobileMenu } from "@/components/site/layout/Overlays";
import { ScrollbarWidth } from "@/components/site/motion";
import { SideCart } from "@/components/site/order/SideCart";
import { SiteProvider } from "@/components/site/SiteProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s | Pub The Whale's Tale",
  },
  description: "The Whale's Tail — Pub & Eatery. Drink, Eat, Enjoy.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#20241a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('has-js')" }} />
      </head>
      <body>
        <SiteProvider>
          <ScrollbarWidth />
          {children}
          <BackToTop />
          <MobileMenu />
          <DemoModeDialog />
          <SideCart />
        </SiteProvider>
      </body>
    </html>
  );
}
