import { ECone } from '@/enums/cone';
import { ICone } from '@/interfaces/cone';
import { TConeStats } from '@/types/all-stats';

export default abstract class Cone implements ICone {
  protected abstract _key: ECone;
  protected abstract _basicStats: TConeStats;

  get key() {
    return this._key;
  }

  get basicStats() {
    return this._basicStats;
  }
}
