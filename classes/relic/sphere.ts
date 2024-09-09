import { TSphereStat } from '@/types/relic-stat';
import { TSubStats } from '@/types/all-stats';
import Relic from './relic';

export default class Sphere extends Relic {
  constructor(subStats: TSubStats, mainStat: TSphereStat) {
    super(subStats, mainStat);
  }
}
