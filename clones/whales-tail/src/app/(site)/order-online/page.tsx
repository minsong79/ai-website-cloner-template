import type { Metadata } from "next";
import { OrderOnline } from "@/components/site/order/OrderOnline";

export const metadata: Metadata = { title: "Order Online" };

export default function OrderOnlinePage() {
  return <OrderOnline />;
}
