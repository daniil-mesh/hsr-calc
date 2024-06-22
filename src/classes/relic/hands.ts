import Relic from '../relic.ts';
import { TSubStats } from '../../types/stats.ts';
import { EMainStat } from '../../enums/stat/main.ts';

export default class Hands extends Relic {
  constructor(subStats: TSubStats) {
    super(subStats, EMainStat.atkFlt);
  }
}
