import { FeetStat } from '@/types/relic-stat';
import { SubStats } from '@/types/all-stats';
import Relic from './relic';

export default class Feet extends Relic {
  constructor(subStats: SubStats, mainStat: FeetStat) {
    super(subStats, mainStat);
  }
}
