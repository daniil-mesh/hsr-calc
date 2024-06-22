import Cone from './cone.ts';
import { ECharacterStat } from '../enums/stat/character.ts';
import { EConeStat } from '../enums/stat/cone.ts';
import { ICharacter } from '../interfaces/character.ts';
import { IDataCharacter } from '../interfaces/data.ts';
import { TCharacterKey } from '../types/character.ts';
import { TCharacterStats } from '../types/stats.ts';
import { characters } from '../data/characters.json';

export default class Character implements ICharacter {
  private readonly _key: TCharacterKey;
  private _basicStats: TCharacterStats = {
    [ECharacterStat.atk]: 0,
    [ECharacterStat.def]: 0,
    [ECharacterStat.hp]: 0,
    [ECharacterStat.spd]: 0,
  };
  private _cone: Cone;

  constructor(key: TCharacterKey, cone: Cone) {
    this._key = key;
    this._cone = cone;
    this.getCharacterDataByKey(this._key);
  }

  public get basicStats(): TCharacterStats {
    return {
      ...this._basicStats,
      [ECharacterStat.atk]:
        this._basicStats[ECharacterStat.atk] +
        this._cone.basicStats[EConeStat.atk],
    };
  }

  private getCharacterDataByKey(key: TCharacterKey): void {
    const obj: IDataCharacter | undefined = characters.find(
      (char: IDataCharacter): boolean => char.key === key,
    );
    if (obj) {
      this._basicStats = obj.stats;
    }
  }
}
