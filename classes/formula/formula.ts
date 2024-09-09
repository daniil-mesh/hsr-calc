import { IFormula } from '@/interfaces/formula';

export default abstract class Formula implements IFormula {
  abstract calculate(): number;
}
