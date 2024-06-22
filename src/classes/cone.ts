import { EConeStat } from '../enums/stat/cone.ts';
import { ICone } from '../interfaces/cone.ts';
import { IDataCone } from '../interfaces/data.ts';
import { TConeKey } from '../types/cone.ts';
import { TConeStats } from '../types/stats.ts';
import { lightCones } from '../data/light-cones.json';

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
      (cone: IDataCone): boolean => cone.key === this._key,
    );
    if (lightCone) {
      this._basicStats = lightCone.stats;
    }
  }
}
