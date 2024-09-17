import { AllStats } from '@/types/all-stats';

export default abstract class Item {
  protected allStats: AllStats extends Record<string, number>
    ? AllStats
    : never = {
    atkFlt: 0,
    atkPer: 0,
    break: 0,
    critDmg: 0,
    critRate: 0,
    defFlt: 0,
    defPer: 0,
    dmgPer: 0,
    ehr: 0,
    err: 0,
    hpFlt: 0,
    hpPer: 0,
    spdFlt: 0,
  };

  abstract getAllStats(): AllStats;

  protected getSumAllStats(item: Partial<AllStats>): AllStats {
    for (const [key, value] of Object.entries(item)) {
      this.allStats[key] += value;
    }
    return this.allStats;
  }
}
