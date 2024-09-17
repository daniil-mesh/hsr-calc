export const Character = {
  Acheron: 'acheron',
  Jingliu: 'jingliu',
} as const;

export type CharacterKeys = keyof typeof Character;
export type CharacterValues = (typeof Character)[CharacterKeys];
