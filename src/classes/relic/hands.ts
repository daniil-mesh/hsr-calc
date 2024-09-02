import Relic from '../relic';
import { TSubStats } from '@/types/stats';
import { EMainStat } from '@/enums/stat/main';

export default class Hands extends Relic {
  constructor(subStats: TSubStats) {
    super(subStats, EMainStat.atkFlt);
  }
}
