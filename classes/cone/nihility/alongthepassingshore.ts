import { BasicStat } from '@/enums/basic-stat';
import { Cone } from '@/enums/cone';
import AbstractCone from '../abstract-cone';

export default class AlongThePassingShore extends AbstractCone {
  _key = Cone.AlongThePassingShore;

  _basicStats = {
    [BasicStat.Atk]: 635.04,
    [BasicStat.Def]: 396.9,
    [BasicStat.Hp]: 1058,
  };
}
