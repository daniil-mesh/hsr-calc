export const Opportunity = {
  Attack: '_attack',
  Skill: '_skill',
  Talent: '_talent',
  Ultimate: '_ultimate',
} as const;

export type OpportunityKeys = keyof typeof Opportunity;
export type OpportunityValues = (typeof Opportunity)[OpportunityKeys];
