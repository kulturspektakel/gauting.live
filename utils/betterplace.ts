async function fetchProject() {
  const res: betterplace.Project = await fetch(
    `https://api.betterplace.org/de/api_v4/projects/${process.env.NEXT_PUBLIC_BETTERPLACE_PROJECT}.json`
  ).then((r) => r.json());

  return {
    totalAmount: res.donated_amount_in_cents - 2570400,
    donationsCount: res.donations_count - 569,
  };
}

export async function fetchDonation(token: string) {
  const res: betterplace.DonationDetail = await fetch(
    `https://api.betterplace.org/de/api_v4/clients/kulturspektakel-gauting/client_donations/${token}.json`
  ).then((r) => r.json());

  return res;
}

export type Donation = {
  createdAt: string;
  amount: number | null;
  name: string | null;
  picture: string | null;
  message: string | null;
};

export async function fetchBetterplaceData() {
  const [project, opinions] = await Promise.all<
    Await<ReturnType<typeof fetchProject>>,
    Await<ReturnType<typeof fetchOpinions>>
  >([fetchProject(), fetchOpinions()]);

  return {
    ...project,
    goals: [300000, 600000, 900000, 1200000],
    opinions,
  };
}

export type BetterplaceData = Await<ReturnType<typeof fetchBetterplaceData>>;

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
      message: donation.message?.replace("&amp;", "&") ?? null,
    })),
    nextPage: res.current_page < res.total_pages ? res.current_page + 1 : null,
  };
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

  export interface DonationDetail {
    amount_in_cents: number;
    state: string;
    donor: {
      name: string;
      picture: Picture;
      links: Link[];
    };
    message: string;
    token: string;
    client_reference: string;
    created_at: Date;
    receiver_type: string;
    receiver_id: number;
    receiver_title: string;
    links: Link[];
  }
}
