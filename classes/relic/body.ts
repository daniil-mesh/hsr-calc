import { TBodyStat } from '@/types/relic-stat';
import { TSubStats } from '@/types/all-stats';
import Relic from './relic';

export default class Body extends Relic {
  constructor(subStats: TSubStats, mainStat: TBodyStat) {
    super(subStats, mainStat);
  }
}
