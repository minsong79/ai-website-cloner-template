// Wix Events content from the source.

export type PubEvent = {
  slug: string;
  title: string;
  shortDate: string;
  dateTime: string;
  location: string;
  address: string;
  description: string;
};

const DESCRIPTION =
  "I’m an event description. Click here to open up the Event Editor and change my text. I’m a great place for you to say a little more about your upcoming event.";
const ADDRESS = "San Francisco, 500 Terry Francois St. San Francisco, CA 94158";

export const EVENTS: PubEvent[] = [
  { slug: "movie-night", title: "Movie Night", shortDate: "Fri, Mar 23", dateTime: "Mar 23, 2035, 5:00 PM", location: "San Francisco", address: ADDRESS, description: DESCRIPTION },
  { slug: "open-stage", title: "Open Stage", shortDate: "Fri, Mar 23", dateTime: "Mar 23, 2035, 6:00 PM", location: "San Francisco", address: ADDRESS, description: DESCRIPTION },
  { slug: "trivia-night", title: "Trivia Night", shortDate: "Fri, Mar 23", dateTime: "Mar 23, 2035, 7:00 PM", location: "San Francisco", address: ADDRESS, description: DESCRIPTION },
];

export const EVENT_MAP = { lat: 37.7703718, lng: -122.3871248 };

export const SOURCE_ORIGIN = "https://www.wix.com/demone2/pub-the-whale";

export function findEvent(slug: string) {
  return EVENTS.find((e) => e.slug === slug);
}
