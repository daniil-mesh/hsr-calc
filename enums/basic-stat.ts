export const BasicStat = {
  Atk: 'atk',
  Def: 'def',
  Hp: 'hp',
  Spd: 'spd',
} as const;

export type BasicStat = (typeof BasicStat)[keyof typeof BasicStat];
