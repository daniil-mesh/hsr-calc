import { ConeKey } from '@/enums/cone-key';
import { ConeStats } from '@/types/all-stats';

export interface Cone {
  readonly key: ConeKey;
  readonly basicStats: ConeStats;
}
