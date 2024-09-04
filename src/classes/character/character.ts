import { ECharacter } from '@/enums/character';
import { ICharacter } from '@/interfaces/character';
import { TCharacterStats } from '@/types/all-stats';
import Cone from '../cone/cone';
import Damage from '../action/damage';

export default abstract class Character implements ICharacter {
  protected abstract _key: ECharacter;
  protected abstract _basicStats: TCharacterStats;

  constructor(protected _cone: Cone) {}

  get key() {
    return this._key;
  }

  get basicStats() {
    return this._basicStats;
  }

  public attack(target = null) {
    return () => {
      new Damage().execute();
    };
  }

  public abstract skill(): void;
  public abstract talent(): void;
  public abstract ultimate(): void;
}
