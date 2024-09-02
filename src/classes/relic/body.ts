import Relic from '../relic';
import { TSubStats } from '@/types/stats';
import { TBodyStat } from '@/types/relic-stat';

export default class Body extends Relic {
  constructor(subStats: TSubStats, mainStat: TBodyStat) {
    super(subStats, mainStat);
  }
}
