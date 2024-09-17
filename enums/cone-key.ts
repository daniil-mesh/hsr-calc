export const ConeKey = {
  AlongThePassingShore: 'alongthepassingshore',
  IShallBeMyOwnSword: 'ishallbemyownsword',
} as const;

export type ConeKey = (typeof ConeKey)[keyof typeof ConeKey];
