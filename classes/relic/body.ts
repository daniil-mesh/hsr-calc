import { BodyStat } from '@/types/relic-stat';
import { SubStats } from '@/types/all-stats';
import Relic from './relic';

export default class Body extends Relic {
  constructor(subStats: SubStats, mainStat: BodyStat) {
    super(subStats, mainStat);
  }
}
