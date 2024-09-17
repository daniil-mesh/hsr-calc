import { SphereStat } from '@/types/relic-stat';
import { SubStats } from '@/types/all-stats';
import Relic from './relic';

export default class Sphere extends Relic {
  constructor(subStats: SubStats, mainStat: SphereStat) {
    super(subStats, mainStat);
  }
}
