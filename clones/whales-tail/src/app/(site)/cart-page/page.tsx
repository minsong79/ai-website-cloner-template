import type { Metadata } from "next";
import { CartPage } from "@/components/site/order/CartPage";

export const metadata: Metadata = { title: "Cart Page" };

export default function CartRoute() {
  return <CartPage />;
}
