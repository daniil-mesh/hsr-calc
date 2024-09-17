import Action from './abstact-action';

export default class Damage extends Action {
  constructor(private _value: number = 0) {
    super();
  }

  execute(): void {
    throw new Error('Method not implemented.');
  }
}
