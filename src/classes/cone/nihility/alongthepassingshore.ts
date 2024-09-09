import { EBasicStat } from '@/enums/basic-stat';
import { ECone } from '@/enums/cone';
import Cone from '../cone';

export default class AlongThePassingShore extends Cone {
  _key = ECone.AlongThePassingShore;

  _basicStats = {
    [EBasicStat.Atk]: 635.04,
    [EBasicStat.Def]: 396.9,
    [EBasicStat.Hp]: 1058,
  };
}
