import { ECharacter } from '@/enums/character';
import { ICharacter } from '@/interfaces/character';
import { TCharacterStats } from '@/types/all-stats';
import Cone from '../cone/cone';

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

  public abstract attack(): void;
  public abstract skill(): void;
  public abstract talent(): void;
  public abstract ultimate(): void;
}
