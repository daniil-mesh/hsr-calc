import OutgoingDamage from './outgoing-damage';

export default class CritDamage extends OutgoingDamage {
  calculate(): number {
    return super.base() * this.crit();
  }

  private crit(): number {
    return 1;
  }
}
