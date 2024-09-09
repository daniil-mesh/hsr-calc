import { ECharacter } from '@/enums/character';
import { EOpportunity } from '@/enums/opportunity';
import { ICharacter } from '@/interfaces/character';
import {
  TAttackLevel,
  TSkillLevel,
  TTalentLevel,
  TUltimateLevel,
} from '@/types/opportunity-level';
import { TCharacterStats } from '@/types/all-stats';
import Action from '../action/action';
import Cone from '../cone/cone';
import Damage from '../action/damage';
import Equipment from '../relic/equipment';

export default abstract class Character implements ICharacter {
  protected abstract _key: ECharacter;
  protected abstract _basicStats: TCharacterStats;

  protected _skillMap: Map<TSkillLevel, number[]> = new Map();
  protected _talentMap: Map<TTalentLevel, number[]> = new Map();
  protected _ultimateMap: Map<TUltimateLevel, number[]> = new Map();

  protected _attackLevel: TAttackLevel = 6;
  protected _skillLevel: TSkillLevel = 10;
  protected _talentLevel: TTalentLevel = 10;
  protected _ultimateLevel: TUltimateLevel = 10;

  protected [EOpportunity.Attack]: Action[] = [];
  protected [EOpportunity.Skill]: Action[] = [];
  protected [EOpportunity.Talent]: Action[] = [];
  protected [EOpportunity.Ultimate]: Action[] = [];

  protected _attackMap = new Map<TAttackLevel, number>()
    .set(1, 0.5)
    .set(2, 0.6)
    .set(3, 0.7)
    .set(4, 0.8)
    .set(5, 0.9)
    .set(6, 1.0)
    .set(7, 1.1)
    .set(8, 1.2)
    .set(9, 1.3);

  constructor(
    protected _cone: Cone | null = null,
    protected _equipement: Equipment | null = null
  ) {}

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
    return this.getActions(EOpportunity.Attack, this.setAttack());
  }

  public setAttack() {
    return [new Damage(this._attackMap.get(this._attackLevel))];
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
