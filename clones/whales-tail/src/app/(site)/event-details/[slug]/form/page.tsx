import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RsvpForm } from "@/components/site/events/RsvpForm";
import { EVENTS, findEvent } from "@/lib/events";

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = findEvent(slug);
  return { title: event ? event.title : "Event" };
}

export default async function EventFormPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = findEvent(slug);
  if (!event) notFound();
  return <RsvpForm event={event} />;
}
