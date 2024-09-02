import { TAllStats } from '@/types/all-stats';
import Item from './item';
import Relic from './relic';
import Body from './body';
import Feet from './feet';
import Hands from './hands';
import Head from './head';
import Rope from './rope';
import Sphere from './sphere';

export default class Equipment extends Item {
  private _equipment: Relic[] = [];

  constructor(
    public head: Head,
    public hands: Hands,
    public body: Body,
    public feet: Feet,
    public rope: Rope,
    public sphere: Sphere
  ) {
    super();
    this._equipment.push(head, hands, body, feet, rope, sphere);
  }

  getAllStats(): TAllStats {
    this._equipment.forEach((relic) => {
      this.getSumAllStats(relic.getAllStats());
    });
    return this.allStats;
  }
}
