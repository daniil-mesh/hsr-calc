import { Cone } from '@/interfaces/cone';
import { ConeKey } from '@/enums/cone-key';
import { ConeStats } from '@/types/all-stats';

export default abstract class AbstractCone implements Cone {
  protected abstract _key: ConeKey;
  protected abstract _basicStats: ConeStats;

  get key() {
    return this._key;
  }

  get basicStats() {
    return this._basicStats;
  }
}
