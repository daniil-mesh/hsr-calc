import { TRopeStat } from '@/types/relic-stat';
import { TSubStats } from '@/types/all-stats';
import Relic from './relic';

export default class Rope extends Relic {
  constructor(subStats: TSubStats, mainStat: TRopeStat) {
    super(subStats, mainStat);
  }
}
