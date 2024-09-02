import { EStat } from '@/enums/stat';

export type TBodyStat =
  | typeof EStat.AtkPer
  | typeof EStat.CritDmg
  | typeof EStat.CritRate
  | typeof EStat.EHR
  | typeof EStat.HpPer;

export type TFeetStat =
  | typeof EStat.AtkPer
  | typeof EStat.DefPer
  | typeof EStat.HpPer
  | typeof EStat.SpdFlt;

export type THandsStat = typeof EStat.AtkFlt;

export type THeadStat = typeof EStat.HpFlt;

export type TSphereStat =
  | typeof EStat.AtkPer
  | typeof EStat.DefPer
  | typeof EStat.DmgPer
  | typeof EStat.HpPer;

export type TRopeStat =
  | typeof EStat.AtkPer
  | typeof EStat.Break
  | typeof EStat.DefPer
  | typeof EStat.ERR
  | typeof EStat.HpPer;
