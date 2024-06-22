import Relic from '../relic.ts';
import { TSubStats } from '../../types/stats.ts';
import { TSphereStat } from '../../types/relic-stat.ts';

export default class Sphere extends Relic {
  constructor(subStats: TSubStats, mainStat: TSphereStat) {
    super(subStats, mainStat);
  }
}
