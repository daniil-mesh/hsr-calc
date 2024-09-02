import { TFeetStat } from '@/types/relic-stat';
import { TSubStats } from '@/types/all-stats';
import Relic from './relic';

export default class Feet extends Relic {
  constructor(subStats: TSubStats, mainStat: TFeetStat) {
    super(subStats, mainStat);
  }
}
