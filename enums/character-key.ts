export const CharacterKey = {
  Acheron: 'acheron',
  Jingliu: 'jingliu',
} as const;

export type CharacterKey = (typeof CharacterKey)[keyof typeof CharacterKey];
