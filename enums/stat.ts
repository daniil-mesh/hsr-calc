export const Stat = {
  AtkFlt: 'atkFlt',
  AtkPer: 'atkPer',
  Break: 'break',
  CritDmg: 'critDmg',
  CritRate: 'critRate',
  DefFlt: 'defFlt',
  DefPer: 'defPer',
  DmgPer: 'dmgPer',
  EHR: 'ehr',
  ERR: 'err',
  HpFlt: 'hpFlt',
  HpPer: 'hpPer',
  SpdFlt: 'spdFlt',
} as const;

export type Stat = (typeof Stat)[keyof typeof Stat];
