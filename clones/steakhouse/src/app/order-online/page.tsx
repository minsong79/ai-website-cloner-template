import type { Metadata } from "next";
import { OrderOnlinePage } from "@/components/site/order/OrderOnlinePage";

export const metadata: Metadata = {
  title: { absolute: "ORDER ONLINE | steakhouse" },
};

export default function Page() {
  return <OrderOnlinePage />;
}
