export const Opportunity = {
  Attack: '_attack',
  Skill: '_skill',
  Talent: '_talent',
  Ultimate: '_ultimate',
} as const;

export type Opportunity = (typeof Opportunity)[keyof typeof Opportunity];
