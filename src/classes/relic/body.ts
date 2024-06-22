import Relic from '../relic.ts';
import { TSubStats } from '../../types/stats.ts';
import { TBodyStat } from '../../types/relic-stat.ts';

export default class Body extends Relic {
  constructor(subStats: TSubStats, mainStat: TBodyStat) {
    super(subStats, mainStat);
  }
}
