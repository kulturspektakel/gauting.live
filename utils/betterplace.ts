import { isBefore } from "date-fns";

async function fetchProject() {
  const res: betterplace.Project = await fetch(
    `https://api.betterplace.org/de/api_v4/projects/${process.env.NEXT_PUBLIC_BETTERPLACE_PROJECT}.json`
  ).then((r) => r.json());

  return {
    totalAmount: res.donated_amount_in_cents,
    donationsCount: res.donations_count,
  };
}

export type Donation = {
  createdAt: string;
  amount: number | null;
  name: string | null;
  picture: string | null;
  message: string | null;
};

export function nextEventDate(): Date {
  const events = [
    new Date("2021-02-12T20:00:00+01:00"),
    new Date("2021-02-13T16:00:00+01:00"),
    new Date("2021-02-26T20:00:00+01:00"),
    new Date("2021-03-12T20:00:00+01:00"),
    new Date("2021-03-26T20:00:00+01:00"),
  ];

  const i = events.findIndex((e) => isBefore(e, new Date())) + 1;
  return events[i];
}

export type Await<T> = T extends {
  then(onfulfilled?: (value: infer U) => unknown): unknown;
}
  ? U
  : T;
export async function fetchPageProps() {
  const [project, opinions] = await Promise.all<
    Await<ReturnType<typeof fetchProject>>,
    Await<ReturnType<typeof fetchOpinions>>
  >([fetchProject(), fetchOpinions()]);

  return {
    props: {
      ...project,
      goals: [130000, 210000, 290000, 370000],
      opinions,
    },
  };
}

export type PageProps = Await<ReturnType<typeof fetchPageProps>>["props"];

export async function fetchOpinions(
  page: number | null = 1
): Promise<{
  donations: Donation[];
  nextPage: number | null;
}> {
  const res: betterplace.Opinions = await fetch(
    `https://api.betterplace.org/de/api_v4/projects/${process.env.NEXT_PUBLIC_BETTERPLACE_PROJECT}/opinions.json?order=created_at:DESC&per_page=18&page=${page}`
  ).then((r) => r.json());

  return {
    donations: res.data.map((donation) => ({
      createdAt: donation.created_at,
      amount: donation.donated_amount_in_cents ?? null,
      name: donation.author?.name.replace("&amp;", "&") ?? null,
      picture:
        donation.author?.picture.links.find(
          (link) => link.rel === "fill_100x100"
        )?.href ?? null,
      message: donation.message,
    })),
    nextPage: res.current_page < res.total_pages ? res.current_page + 1 : null,
  };
}

export function formatCurrency(
  amount: number,
  showFraction: boolean = true
): string | null {
  if (typeof amount !== "number") {
    return null;
  }
  var formatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: showFraction ? 2 : 0,
    minimumFractionDigits: showFraction ? 2 : 0,
  });

  return formatter.format(amount / 100);
}

declare module betterplace {
  export interface Link {
    rel: string;
    href: string;
    templated?: boolean;
  }

  export interface Picture {
    fallback?: boolean;
    links: Link[];
  }

  export interface Contact {
    id: number;
    name: string;
    picture: Picture;
    links: Link[];
  }

  export interface Carrier {
    id: number;
    name: string;
    city: string;
    picture: Picture;
    links: Link[];
  }

  export interface ProfilePicture {
    links: Link[];
  }

  export interface Project {
    id: number;
    created_at: string;
    updated_at: string;
    latitude: number;
    longitude: number;
    street: string;
    zip: string;
    city: string;
    country: string;
    content_updated_at: string;
    activated_at: string;
    title: string;
    description: string;
    summary: string;
    tax_deductible: boolean;
    donations_prohibited: boolean;
    completed_at?: any;
    closed_at?: any;
    open_amount_in_cents: number;
    donated_amount_in_cents: number;
    positive_opinions_count: number;
    negative_opinions_count: number;
    donations_count: number;
    newsletter_subscriptions_count: number;
    comments_count: number;
    donor_count: number;
    progress_percentage: number;
    incomplete_need_count: number;
    completed_need_count: number;
    blog_post_count: number;
    contact: Contact;
    carrier: Carrier;
    profile_picture: ProfilePicture;
    active_matching_fund?: any;
    closed_notice?: any;
    links: Link[];
  }

  export interface Author {
    name: string;
    picture: Picture;
    links: Link[];
  }

  export interface Datum {
    id: number;
    created_at: string;
    updated_at: string;
    donated_amount_in_cents?: number;
    matched_amount_in_cents?: number;
    matched: boolean;
    score: string;
    author: Author | null;
    message: string | null;
    confirmed_at: string;
    links: Link[];
  }

  export interface Opinions {
    total_entries: number;
    offset: number;
    total_pages: number;
    current_page: number;
    per_page: number;
    data: Datum[];
  }
}
