import { EBasicStat } from '@/enums/basic-stat';
import { ECone } from '@/enums/cone';
import Cone from '../cone';

export default class IShallBeMyOwnSword extends Cone {
  _key = ECone.IShallBeMyOwnSword;

  _basicStats = {
    [EBasicStat.Atk]: 635.04,
    [EBasicStat.Def]: 0,
    [EBasicStat.Hp]: 0,
    [EBasicStat.Spd]: 0,
  };
}
