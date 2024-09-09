import Item from './item';
import MainStatValues from '../../data/main-stat-values';
import { TAllStats, TMainStats, TSubStats } from '@/types/all-stats';

export default class Relic extends Item {
  constructor(public subStats: TSubStats, public mainStat: keyof TMainStats) {
    super();
  }

  getAllStats(): TAllStats {
    this.allStats[this.mainStat] += MainStatValues[this.mainStat];
    this.getSumAllStats(this.subStats);
    return this.allStats;
  }
}
