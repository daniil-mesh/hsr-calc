import { BasicStat } from '@/enums/basic-stat';
import { Cone } from '@/enums/cone';
import AbstractCone from '../abstract-cone';

export default class IShallBeMyOwnSword extends AbstractCone {
  _key = Cone.IShallBeMyOwnSword;

  _basicStats = {
    [BasicStat.Atk]: 582.12,
    [BasicStat.Def]: 396.9,
    [BasicStat.Hp]: 1164,
  };
}
