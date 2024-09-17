import { BasicStat } from '@/enums/basic-stat';
import { Stat } from '@/enums/stat';

export type AllStats = { [stat in Stat]: number };

export type CharacterStats = { [stat in BasicStat]: number };

export type ConeStats = {
  [stat in Exclude<BasicStat, typeof BasicStat.Spd>]: number;
};

export type MainStats = {
  [stat in Exclude<Stat, typeof Stat.DefFlt>]?: number;
};

export type SubStats = {
  [stat in Stat]?: number;
};
