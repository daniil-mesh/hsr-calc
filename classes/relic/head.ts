import { Stat } from '@/enums/stat';
import { SubStats } from '@/types/all-stats';
import Relic from './relic';

export default class Head extends Relic {
  constructor(subStats: SubStats) {
    super(subStats, Stat.HpFlt);
  }
}
