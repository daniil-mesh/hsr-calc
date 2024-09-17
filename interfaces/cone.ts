import { Cone, ConeValues } from '@/enums/cone';
import { ConeStats } from '@/types/all-stats';

export interface Cone {
  readonly key: ConeValues;
  readonly basicStats: ConeStats;
}
