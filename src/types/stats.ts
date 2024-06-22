import { EAllStat } from '../enums/stat/all.ts';
import { ECharacterStat } from '../enums/stat/character.ts';
import { EConeStat } from '../enums/stat/cone.ts';
import { EMainStat } from '../enums/stat/main.ts';
import { ESubStat } from '../enums/stat/sub.ts';

export type TAllStats = { [stat in EAllStat]: number };

export type TCharacterStats = {
  [stat in ECharacterStat]: number;
};

export type TConeStats = {
  [stat in EConeStat]: number;
};

export type TMainStats = {
  [stat in EMainStat]?: number;
};

export type TSubStats = {
  [stat in ESubStat]?: number;
};
