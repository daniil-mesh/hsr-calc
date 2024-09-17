import { Action } from '@/interfaces/action';
import { BasicStat } from '@/enums/basic-stat';
import { Character, CharacterValues } from '@/enums/character';
import AbstactCharacter from '../abstact-character';
import Damage from '@/classes/action/damage';

export default class Acheron extends AbstactCharacter {
  _key = Character.Acheron;
  _basicStats = {
    [BasicStat.Atk]: 698.54,
    [BasicStat.Def]: 436.59,
    [BasicStat.Hp]: 1125,
    [BasicStat.Spd]: 101,
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
