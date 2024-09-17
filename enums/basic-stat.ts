export const BasicStat = {
  Atk: 'atk',
  Def: 'def',
  Hp: 'hp',
  Spd: 'spd',
} as const;

export type BasicStatKeys = keyof typeof BasicStat;
export type BasicStatValues = (typeof BasicStat)[BasicStatKeys];
