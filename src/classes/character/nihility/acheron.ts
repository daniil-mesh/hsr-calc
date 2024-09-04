import { EBasicStat } from '@/enums/basic-stat';
import { TCharacterStats } from '@/types/all-stats';
import Character from '../character';
import { ECharacter } from '@/enums/character';

export default class Acheron extends Character {
  _key: ECharacter = ECharacter.Acheron;

  _basicStats: TCharacterStats = {
    [EBasicStat.Atk]: 698.54,
    [EBasicStat.Def]: 436.59,
    [EBasicStat.Hp]: 1125,
    [EBasicStat.Spd]: 101,
  };

  public skill(): void {
    throw new Error('Method not implemented.');
  }

  public talent(): void {
    throw new Error('Method not implemented.');
  }

  public ultimate(): void {
    throw new Error('Method not implemented.');
  }
}
