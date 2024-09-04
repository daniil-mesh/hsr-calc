import { ECharacter } from '@/enums/character';
import { TCharacterStats } from '@/types/all-stats';
import Action from '@/classes/action/action';

export interface ICharacter {
  readonly key: ECharacter;
  readonly basicStats: TCharacterStats;

  getAttack(): Action[];
  setAttack(): void;

  getSkill(): Action[];
  setSkill(): void;

  getTalent(): Action[];
  setTalent(): void;

  getUltimate(): Action[];
  setUltimate(): void;
}
