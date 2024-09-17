import { Cone } from '@/interfaces/cone';
import { ConeStats } from '@/types/all-stats';
import { ConeValues } from '@/enums/cone';

export default abstract class AbstractCone implements Cone {
  protected abstract _key: ConeValues;
  protected abstract _basicStats: ConeStats;

  get key() {
    return this._key;
  }

  get basicStats() {
    return this._basicStats;
  }
}
