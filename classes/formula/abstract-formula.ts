import { Formula } from '@/interfaces/formula';

export default abstract class AbstactFormula implements Formula {
  abstract calculate(): number;
}
