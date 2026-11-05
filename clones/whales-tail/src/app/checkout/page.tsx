import type { Metadata } from "next";
import { Checkout } from "@/components/site/order/Checkout";

export const metadata: Metadata = { title: { absolute: "Checkout | Pub The Whale's Tale" } };

export default function CheckoutPage() {
  return <Checkout />;
}
