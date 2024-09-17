import { Action } from './action';
import { CharacterStats } from '@/types/all-stats';
import { CharacterValues } from '@/enums/character';

export interface Character {
  readonly key: CharacterValues;
  readonly basicStats: CharacterStats;

  getAttack(): Action[];
  setAttack(): void;

  getSkill(): Action[];
  setSkill(): void;

  getTalent(): Action[];
  setTalent(): void;

  getUltimate(): Action[];
  setUltimate(): void;
}
