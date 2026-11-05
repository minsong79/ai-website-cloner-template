// Wix Table Reservations options observed on the source.

export const PARTY_SIZES = [1, 2, 3, 4, 5, 6].map((n) => ({ value: String(n), label: `${n} ${n === 1 ? "guest" : "guests"}` }));

function formatTime(minutes: number) {
  const h24 = Math.floor(minutes / 60);
  const m = minutes % 60;
  const suffix = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
}

// 8:00 AM to 10:00 PM in 15 minute steps.
export const TIME_OPTIONS = Array.from({ length: 57 }, (_, i) => {
  const label = formatTime(8 * 60 + i * 15);
  return { value: label, label };
});

/** The 15 time slots the widget offers for a chosen time. */
export function slotsFor(time: string) {
  const index = Math.max(0, TIME_OPTIONS.findIndex((o) => o.value === time));
  const start = Math.min(index, TIME_OPTIONS.length - 15);
  return TIME_OPTIONS.slice(start, start + 15).map((o) => o.value);
}

export function toInputDate(iso: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${m}/${d}/${y}`;
}

export function isoFromDate(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
