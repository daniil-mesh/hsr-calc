import IOutgoingDamage from '@/interfaces/outgoing-damage';

export default abstract class OutgoingDamage implements IOutgoingDamage {
  abstract calculate(): number;

  protected base(): number {
    return 0;
  }
}
