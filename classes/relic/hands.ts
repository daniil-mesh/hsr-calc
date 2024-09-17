import { Stat } from '@/enums/stat';
import { SubStats } from '@/types/all-stats';
import Relic from './relic';

export default class Hands extends Relic {
  constructor(subStats: SubStats) {
    super(subStats, Stat.AtkFlt);
  }
}
