import { AllStats, MainStats, SubStats } from '@/types/all-stats';
import Item from './item';
import MainStatValues from '../../data/main-stat-values';

export default class Relic extends Item {
  constructor(public subStats: SubStats, public mainStat: keyof MainStats) {
    super();
  }

  getAllStats(): AllStats {
    this.allStats[this.mainStat] += MainStatValues[this.mainStat];
    this.getSumAllStats(this.subStats);
    return this.allStats;
  }
}
