import { ECharacter } from '@/enums/character';
import { EOpportunity } from '@/enums/opportunity';
import { ICharacter } from '@/interfaces/character';
import { TCharacterStats } from '@/types/all-stats';
import Action from '../action/action';
import Cone from '../cone/cone';
import Damage from '../action/damage';

export default abstract class Character implements ICharacter {
  protected abstract _key: ECharacter;
  protected abstract _basicStats: TCharacterStats;

  protected [EOpportunity.Attack]: Action[] = [];
  protected [EOpportunity.Skill]: Action[] = [];
  protected [EOpportunity.Talent]: Action[] = [];
  protected [EOpportunity.Ultimate]: Action[] = [];

  constructor(protected _cone: Cone) {}

  get key() {
    return this._key;
  }

  get basicStats() {
    return this._basicStats;
  }

  public abstract setSkill(): Action[];
  public abstract setTalent(): Action[];
  public abstract setUltimate(): Action[];

  public getAttack() {
    if (!this._attack) {
      this._attack = this.setAttack();
    }
    return this._attack;
  }

  public setAttack() {
    return [new Damage()];
  }

  public getSkill() {
    return this.getActions(EOpportunity.Skill, this.setSkill());
  }

  public getTalent() {
    return this.getActions(EOpportunity.Talent, this.setTalent());
  }

  public getUltimate() {
    return this.getActions(EOpportunity.Ultimate, this.setUltimate());
  }

  private getActions(property: EOpportunity, actions: Action[]) {
    if (!this[property]) {
      this[property] = actions;
    }
    return this[property];
  }
}
