import { Action } from '@/interfaces/action';

export default abstract class AbstractAction implements Action {
  abstract execute(): void;
}
