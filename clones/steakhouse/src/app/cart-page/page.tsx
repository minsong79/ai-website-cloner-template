import type { Metadata } from "next";
import { CartPage } from "@/components/site/cart/CartPage";

export const metadata: Metadata = {
  title: { absolute: "Cart Page | steakhouse" },
};

export default function Page() {
  return <CartPage />;
}
