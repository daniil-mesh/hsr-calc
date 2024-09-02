import { EBasicStat } from '@/enums/basic-stat';
import { ECharacter } from '@/enums/character';
import { TCharacterStats } from '@/types/all-stats';
import Character from '../character';

export default class Jingliu extends Character {
  _key: ECharacter = ECharacter.Jingliu;

  _basicStats: TCharacterStats = {
    [EBasicStat.Atk]: 679.14,
    [EBasicStat.Def]: 485.1,
    [EBasicStat.Hp]: 1436,
    [EBasicStat.Spd]: 96,
  };

  public attack(): void {
    throw new Error('Method not implemented.');
  }

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
