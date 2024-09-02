import Relic from '../relic';
import { TSubStats } from '@/types/stats';
import { TFeetStat } from '@/types/relic-stat';

export default class Feet extends Relic {
  constructor(subStats: TSubStats, mainStat: TFeetStat) {
    super(subStats, mainStat);
  }
}
