import { BasicStat } from '@/enums/basic-stat';
import { Stat } from '@/enums/stat';
import { AllStats } from '@/types/all-stats';
import AbstactCharacter from './character/abstact-character';
import Equipment from './relic/equipment';

export default class Calculator {
  private _character: AbstactCharacter | null = null;
  private _equipment: Equipment | null = null;

  public character(character: AbstactCharacter): this {
    this._character = character;
    return this;
  }

  public equipment(equipment: Equipment): this {
    this._equipment = equipment;
    return this;
  }

  public calculate(): number {
    if (this._character?.basicStats && this._equipment) {
      const stats: AllStats = this._equipment.getAllStats();

      return (
        (this._character.basicStats[BasicStat.Atk] * (1 + stats[Stat.AtkPer]) +
          stats[Stat.AtkFlt]) *
        (1 + stats[Stat.CritRate] * stats[Stat.CritDmg]) *
        (1 + stats[Stat.DmgPer])
      );
    }
    return 0;
  }
}
