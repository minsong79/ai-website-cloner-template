import type { Metadata } from "next";
import { MenuPage } from "@/components/site/menu/MenuPage";

export const metadata: Metadata = {
  title: { absolute: "MENU | steakhouse" },
};

export default function Page() {
  return <MenuPage />;
}
