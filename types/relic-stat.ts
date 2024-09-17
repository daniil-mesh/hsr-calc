import { Stat } from '@/enums/stat';

export type BodyStat =
  | typeof Stat.AtkPer
  | typeof Stat.CritDmg
  | typeof Stat.CritRate
  | typeof Stat.EHR
  | typeof Stat.HpPer;

export type FeetStat =
  | typeof Stat.AtkPer
  | typeof Stat.DefPer
  | typeof Stat.HpPer
  | typeof Stat.SpdFlt;

export type HandsStat = typeof Stat.AtkFlt | typeof Stat.AtkPer;

export type HeadStat = typeof Stat.HpFlt;

export type SphereStat =
  | typeof Stat.AtkPer
  | typeof Stat.DefPer
  | typeof Stat.DmgPer
  | typeof Stat.HpPer;

export type RopeStat =
  | typeof Stat.AtkPer
  | typeof Stat.Break
  | typeof Stat.DefPer
  | typeof Stat.ERR
  | typeof Stat.HpPer;
