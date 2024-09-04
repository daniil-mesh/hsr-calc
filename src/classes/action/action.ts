import { IAction } from '@/interfaces/action';

export default abstract class Action implements IAction {
  abstract execute(): void;
}
