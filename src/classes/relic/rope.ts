import Relic from '../relic.ts';
import { TSubStats } from '../../types/stats.ts';
import { TRopeStat } from '../../types/relic-stat.ts';

export default class Rope extends Relic {
  constructor(subStats: TSubStats, mainStat: TRopeStat) {
    super(subStats, mainStat);
  }
}
