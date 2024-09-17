import { Action } from '@/interfaces/action';
import { BasicStat } from '@/enums/basic-stat';
import { CharacterKey } from '@/enums/character-key';
import AbstactCharacter from '../abstact-character';
import Damage from '@/classes/action/damage';

export default class Jingliu extends AbstactCharacter {
  _key = CharacterKey.Jingliu;
  _basicStats = {
    [BasicStat.Atk]: 679.14,
    [BasicStat.Def]: 485.1,
    [BasicStat.Hp]: 1436,
    [BasicStat.Spd]: 96,
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
