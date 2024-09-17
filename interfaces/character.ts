import { Action } from './action';
import { CharacterKey } from '@/enums/character-key';
import { CharacterStats } from '@/types/all-stats';

export interface Character {
  readonly key: CharacterKey;
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
