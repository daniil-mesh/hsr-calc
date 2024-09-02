import { TAllStats } from '@/types/stats';
import AEquipment from './abstract/equipment';
import Relic from './relic';
import Body from './relic/body';
import Feet from './relic/feet';
import Hands from './relic/hands';
import Head from './relic/head';
import Rope from './relic/rope';
import Sphere from './relic/sphere';

export default class Equipment extends AEquipment {
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
