import { RopeStat } from '@/types/relic-stat';
import { SubStats } from '@/types/all-stats';
import Relic from './relic';

export default class Rope extends Relic {
  constructor(subStats: SubStats, mainStat: RopeStat) {
    super(subStats, mainStat);
  }
}
