import { EStat } from '@/enums/stat';

export type TBodyStat =
  | EStat.AtkPer
  | EStat.CritDmg
  | EStat.CritRate
  | EStat.EHR
  | EStat.HpPer;

export type TFeetStat =
  | EStat.AtkPer
  | EStat.DefPer
  | EStat.HpPer
  | EStat.SpdFlt;

export type THandsStat = EStat.AtkFlt | EStat.AtkPer;

export type THeadStat = EStat.HpFlt;

export type TSphereStat =
  | EStat.AtkPer
  | EStat.DefPer
  | EStat.DmgPer
  | EStat.HpPer;

export type TRopeStat =
  | EStat.AtkPer
  | EStat.Break
  | EStat.DefPer
  | EStat.ERR
  | EStat.HpPer;
