import type { Metadata } from "next";
import { HomePage } from "@/components/site/home/HomePage";

export const metadata: Metadata = {
  title: { absolute: "HOME | steakhouse" },
};

export default function Page() {
  return <HomePage />;
}
