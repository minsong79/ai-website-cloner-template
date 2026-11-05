import type { Metadata } from "next";
import { ReservationsPage } from "@/components/site/reservations/ReservationsPage";

export const metadata: Metadata = {
  title: { absolute: "RESERVATIONS | steakhouse" },
};

export default function Page() {
  return <ReservationsPage />;
}
