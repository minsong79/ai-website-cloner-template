import type { Metadata } from "next";
import { ChatWidget } from "@/components/site/ChatWidget";
import { Footer } from "@/components/site/Footer";
import { GlobalOverlays } from "@/components/site/GlobalOverlays";
import { Header } from "@/components/site/Header";
import { PageBackground } from "@/components/site/PageBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HOME | steakhouse",
    template: "%s | steakhouse",
  },
  description: "Steakhouse — Great American Food. A local Next.js clone of the Wix restaurant template.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageBackground />
        <div className="site-root">
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </div>
        <ChatWidget />
        <GlobalOverlays />
      </body>
    </html>
  );
}
