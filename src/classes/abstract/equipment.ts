import { TAllStats } from '../../types/stats.ts';

export default abstract class AEquipment {
  protected allStats: TAllStats extends Record<string, number>
    ? TAllStats
    : never = {
    atkFlt: 0,
    atkPer: 0,
    basicDmgPer: 0,
    breakEff: 0,
    critDmg: 0,
    critRate: 0,
    defFlt: 0,
    defPer: 0,
    dmgPer: 0,
    ehr: 0,
    energyReg: 0,
    followUpDmgPer: 0,
    hpFlt: 0,
    hpPer: 0,
    skillDmgPer: 0,
    spdFlt: 0,
    ultDmgPer: 0,
  };

  abstract getAllStats(): TAllStats;

  protected getSumAllStats(item: Partial<TAllStats>): TAllStats {
    for (const [key, value] of Object.entries(item)) {
      this.allStats[key] += value;
    }
    return this.allStats;
  }
}
