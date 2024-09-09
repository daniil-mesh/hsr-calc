import { ECone } from '@/enums/cone';
import { TConeStats } from '@/types/all-stats';

export interface ICone {
  readonly key: ECone;
  readonly basicStats: TConeStats;
}
