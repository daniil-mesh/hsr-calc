import Relic from '../relic';
import { TSubStats } from '@/types/stats';
import { TRopeStat } from '@/types/relic-stat';

export default class Rope extends Relic {
  constructor(subStats: TSubStats, mainStat: TRopeStat) {
    super(subStats, mainStat);
  }
}
