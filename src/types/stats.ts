import { EAllStat } from '@/enums/stat/all';
import { ECharacterStat } from '@/enums/stat/character';
import { EConeStat } from '@/enums/stat/cone';
import { EMainStat } from '@/enums/stat/main';
import { ESubStat } from '@/enums/stat/sub';

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
