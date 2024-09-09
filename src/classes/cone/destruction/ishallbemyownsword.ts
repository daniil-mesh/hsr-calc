import { EBasicStat } from '@/enums/basic-stat';
import { ECone } from '@/enums/cone';
import Cone from '../cone';

export default class IShallBeMyOwnSword extends Cone {
  _key = ECone.IShallBeMyOwnSword;

  _basicStats = {
    [EBasicStat.Atk]: 582.12,
    [EBasicStat.Def]: 396.9,
    [EBasicStat.Hp]: 1164,
  };
}
