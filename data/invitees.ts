export interface Invitee {
  slug: string;
  names: string; // Display string, e.g. "Miros & Miranda"
  line1: string; // First line on envelope
  line2?: string; // Optional second line
}

// The couple hosting the wedding — used to sign the envelope's teaser card.
export const couple = {
  line1: "Mey",
  line2: "Héber",
};

export const invitees: Invitee[] = [
  {
    slug: "miros-and-miranda",
    names: "Miros & Miranda",
    line1: "Miros & Miranda",
  },
  // Add more invitees here:
  // {
  //   slug: "john-and-jane",
  //   names: "John & Jane",
  //   line1: "John & Jane",
  // },
];

export function getInvitee(slug: string): Invitee | undefined {
  return invitees.find((i) => i.slug === slug);
}
