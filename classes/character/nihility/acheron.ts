import { EBasicStat } from '@/enums/basic-stat';
import { ECharacter } from '@/enums/character';
import { TCharacterStats } from '@/types/all-stats';
import Action from '@/classes/action/action';
import Character from '../character';
import Damage from '@/classes/action/damage';

export default class Acheron extends Character {
  _key: ECharacter = ECharacter.Acheron;
  _basicStats: TCharacterStats = {
    [EBasicStat.Atk]: 698.54,
    [EBasicStat.Def]: 436.59,
    [EBasicStat.Hp]: 1125,
    [EBasicStat.Spd]: 101,
  };

  public setSkill(): Action[] {
    return [new Damage()];
  }

  public setTalent(): Action[] {
    return [];
  }

  public setUltimate(): Action[] {
    return [new Damage()];
  }
}
