export const Cone = {
  AlongThePassingShore: 'alongthepassingshore',
  IShallBeMyOwnSword: 'ishallbemyownsword',
} as const;

export type ConeKeys = keyof typeof Cone;
export type ConeValues = (typeof Cone)[ConeKeys];
