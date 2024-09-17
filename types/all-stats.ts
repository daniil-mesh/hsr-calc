import { BasicStat, BasicStatValues } from '@/enums/basic-stat';
import { Stat, StatValues } from '@/enums/stat';

export type AllStats = { [stat in StatValues]: number };

export type CharacterStats = { [stat in BasicStatValues]: number };

export type ConeStats = {
  [stat in Exclude<BasicStatValues, typeof BasicStat.Spd>]: number;
};

export type MainStats = {
  [stat in Exclude<StatValues, typeof Stat.DefFlt>]?: number;
};

export type SubStats = {
  [stat in StatValues]?: number;
};
