import { TAllStats } from '../types/stats.ts';
import AEquipment from './abstract/equipment.ts';
import Relic from './relic.ts';
import Body from './relic/body.ts';
import Feet from './relic/feet.ts';
import Hands from './relic/hands.ts';
import Head from './relic/head.ts';
import Rope from './relic/rope.ts';
import Sphere from './relic/sphere.ts';

export default class Equipment extends AEquipment {
  private _equipment: Relic[] = [];

  constructor(
    public head: Head,
    public hands: Hands,
    public body: Body,
    public feet: Feet,
    public rope: Rope,
    public sphere: Sphere,
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
