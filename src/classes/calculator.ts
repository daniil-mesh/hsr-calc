import { EBasicStat } from '@/enums/basic-stat';
import { EStat } from '@/enums/stat';
import { TAllStats } from '@/types/all-stats';
import Character from './character/character';
import Equipment from './relic/equipment';

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
        (this._character.basicStats[EBasicStat.Atk] *
          (1 + stats[EStat.AtkPer]) +
          stats[EStat.AtkFlt]) *
        (1 + stats[EStat.CritRate] * stats[EStat.CritDmg]) *
        (1 + stats[EStat.DmgPer])
      );
    }
    return 0;
  }
}
