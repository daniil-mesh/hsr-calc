import Character from './character.ts';
import Equipment from './equipment.ts';
import { TAllStats } from '../types/stats.ts';
import { EAllStat } from '../enums/stat/all.ts';
import { ECharacterStat } from '../enums/stat/character.ts';

export default class Calculator {
  private _character: Character | null = null;
  private _equipment: Equipment | null = null;

  public character(character: Character): this {
    this._character = character;
    return this;
  }

  public equipment(equipment: Equipment): this {
    this._equipment = equipment;
    return this;
  }

  public calculate(): number {
    if (this._character?.basicStats && this._equipment) {
      const stats: TAllStats = this._equipment.getAllStats();

      return (
        (this._character.basicStats[ECharacterStat.atk] *
          (1 + stats[EAllStat.atkPer]) +
          stats[EAllStat.atkFlt]) *
        (1 + stats[EAllStat.critRate] * stats[EAllStat.critDmg]) *
        (1 + stats[EAllStat.dmgPer])
      );
    }
    return 0;
  }
}
