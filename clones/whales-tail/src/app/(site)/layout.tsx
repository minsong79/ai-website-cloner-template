import { Footer } from "@/components/site/layout/Footer";
import { Header } from "@/components/site/layout/Header";

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
