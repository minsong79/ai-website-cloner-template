import type { Metadata } from "next";
import { ReservationPage } from "@/components/site/widgets/ReservationPage";

export const metadata: Metadata = { title: "Reservations" };

export default function ReservationsPage() {
  return <ReservationPage />;
}
