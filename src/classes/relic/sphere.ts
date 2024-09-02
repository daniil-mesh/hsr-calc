import Relic from '../relic';
import { TSubStats } from '@/types/stats';
import { TSphereStat } from '@/types/relic-stat';

export default class Sphere extends Relic {
  constructor(subStats: TSubStats, mainStat: TSphereStat) {
    super(subStats, mainStat);
  }
}
