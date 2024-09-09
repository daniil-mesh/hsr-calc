import { EStat } from '@/enums/stat';
import { TSubStats } from '@/types/all-stats';
import Relic from './relic';

export default class Head extends Relic {
  constructor(subStats: TSubStats) {
    super(subStats, EStat.HpFlt);
  }
}
