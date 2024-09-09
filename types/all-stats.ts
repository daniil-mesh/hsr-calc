import { EBasicStat } from '@/enums/basic-stat';
import { EStat } from '@/enums/stat';

export type TAllStats = { [stat in EStat]: number };

export type TCharacterStats = {
  [stat in EBasicStat]: number;
};

export type TConeStats = {
  [stat in Exclude<EBasicStat, EBasicStat.Spd>]: number;
};

export type TMainStats = {
  [stat in Exclude<EStat, EStat.DefFlt>]?: number;
};

export type TSubStats = {
  [stat in EStat]?: number;
};
