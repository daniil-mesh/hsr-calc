import { BasicStat } from '@/enums/basic-stat';
import { ConeKey } from '@/enums/cone-key';
import AbstractCone from '../abstract-cone';

export default class AlongThePassingShore extends AbstractCone {
  _key = ConeKey.AlongThePassingShore;

  _basicStats = {
    [BasicStat.Atk]: 635.04,
    [BasicStat.Def]: 396.9,
    [BasicStat.Hp]: 1058,
  };
}
