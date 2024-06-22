import Relic from '../relic.ts';
import { TSubStats } from '../../types/stats.ts';
import { TFeetStat } from '../../types/relic-stat.ts';

export default class Feet extends Relic {
  constructor(subStats: TSubStats, mainStat: TFeetStat) {
    super(subStats, mainStat);
  }
}
