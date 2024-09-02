import { TCharacterStats, TConeStats, TMainStats } from '@/types/stats';

export interface IDataCharacter {
  key: string;
  name: string;
  stats: TCharacterStats;
  traces: Partial<TMainStats>;
}

export interface IDataCone {
  key: string;
  name: string;
  stats: TConeStats;
}
