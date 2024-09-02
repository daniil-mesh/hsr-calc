import { EMainStat } from '@/enums/stat/main';

export type TBodyStat =
  | typeof EMainStat.atkPer
  | typeof EMainStat.critDmg
  | typeof EMainStat.critRate
  | typeof EMainStat.ehr
  | typeof EMainStat.hpPer;

export type TFeetStat =
  | typeof EMainStat.atkPer
  | typeof EMainStat.defPer
  | typeof EMainStat.hpPer
  | typeof EMainStat.spdFlt;

export type THandsStat = typeof EMainStat.atkFlt;

export type THeadStat = typeof EMainStat.hpFlt;

export type TSphereStat =
  | typeof EMainStat.atkPer
  | typeof EMainStat.defPer
  | typeof EMainStat.dmgPer
  | typeof EMainStat.hpPer;

export type TRopeStat =
  | typeof EMainStat.atkPer
  | typeof EMainStat.breakEff
  | typeof EMainStat.defPer
  | typeof EMainStat.energyReg
  | typeof EMainStat.hpPer;
