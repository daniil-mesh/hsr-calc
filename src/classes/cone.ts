import { EConeStat } from '@/enums/stat/cone';
import { ICone } from '@/interfaces/cone';
import { IDataCone } from '@/interfaces/data';
import { TConeKey } from '@/types/cone';
import { TConeStats } from '@/types/stats';
import { lightCones } from '@/data/light-cones.json';

export default class Cone implements ICone {
  private readonly _key: TConeKey;
  private _basicStats: TConeStats = {
    [EConeStat.atk]: 0,
  };

  constructor(key: TConeKey) {
    this._key = key;
    this.takeConeStat();
  }

  public get basicStats(): TConeStats {
    return this._basicStats;
  }

  private takeConeStat(): void {
    const lightCone: IDataCone | undefined = lightCones.find(
      (cone: IDataCone): boolean => cone.key === this._key
    );
    if (lightCone) {
      this._basicStats = lightCone.stats;
    }
  }
}
