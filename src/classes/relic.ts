import AEquipment from './abstract/equipment.ts';
import MainStatValues from './stat-values/main.ts';
import { TAllStats, TSubStats } from '../types/stats.ts';
import { EMainStat } from '../enums/stat/main.ts';

export default class Relic extends AEquipment {
  constructor(
    public subStats: TSubStats,
    public mainStat: EMainStat,
  ) {
    super();
  }

  getAllStats(): TAllStats {
    this.allStats[this.mainStat] += MainStatValues[this.mainStat];
    this.getSumAllStats(this.subStats);
    return this.allStats;
  }
}
