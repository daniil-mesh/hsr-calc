import AEquipment from './abstract/equipment';
import MainStatValues from './stat-values/main';
import { TAllStats, TSubStats } from '@/types/stats';
import { EMainStat } from '@/enums/stat/main';

export default class Relic extends AEquipment {
  constructor(public subStats: TSubStats, public mainStat: EMainStat) {
    super();
  }

  getAllStats(): TAllStats {
    this.allStats[this.mainStat] += MainStatValues[this.mainStat];
    this.getSumAllStats(this.subStats);
    return this.allStats;
  }
}
