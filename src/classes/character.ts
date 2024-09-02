import Cone from './cone';
import { ECharacterStat } from '@/enums/stat/character';
import { EConeStat } from '@/enums/stat/cone';
import { ICharacter } from '@/interfaces/character';
import { IDataCharacter } from '@/interfaces/data';
import { TCharacterKey } from '@/types/character';
import { TCharacterStats } from '@/types/stats';
import { characters } from '@/data/characters.json';

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
      (char: IDataCharacter): boolean => char.key === key
    );
    if (obj) {
      this._basicStats = obj.stats;
    }
  }
}
