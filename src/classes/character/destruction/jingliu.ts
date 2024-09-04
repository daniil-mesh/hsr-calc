import { EBasicStat } from '@/enums/basic-stat';
import { ECharacter } from '@/enums/character';
import { TCharacterStats } from '@/types/all-stats';
import Action from '@/classes/action/action';
import Character from '../character';
import Damage from '@/classes/action/damage';

export default class Jingliu extends Character {
  _key: ECharacter = ECharacter.Jingliu;
  _basicStats: TCharacterStats = {
    [EBasicStat.Atk]: 679.14,
    [EBasicStat.Def]: 485.1,
    [EBasicStat.Hp]: 1436,
    [EBasicStat.Spd]: 96,
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
