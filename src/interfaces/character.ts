import { ECharacter } from '@/enums/character';
import { TCharacterStats } from '@/types/all-stats';

export interface ICharacter {
  readonly key: ECharacter;
  readonly basicStats: TCharacterStats;
}
