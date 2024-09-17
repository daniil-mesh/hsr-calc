import { BasicStat } from '@/enums/basic-stat';
import { ConeKey } from '@/enums/cone-key';
import AbstractCone from '../abstract-cone';

export default class IShallBeMyOwnSword extends AbstractCone {
  _key = ConeKey.IShallBeMyOwnSword;

  _basicStats = {
    [BasicStat.Atk]: 582.12,
    [BasicStat.Def]: 396.9,
    [BasicStat.Hp]: 1164,
  };
}
