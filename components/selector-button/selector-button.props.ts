import { ButtonHTMLAttributes, ReactNode } from 'react';

export const SelectorButtonView = {
  Character: 'character',
  Cone: 'cone',
  Relic: 'relic',
} as const;

type SelectorButtonView =
  (typeof SelectorButtonView)[keyof typeof SelectorButtonView];
export type SelectorButtonStyles = { [key in SelectorButtonView]: string };

export default interface SelectorButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  view: SelectorButtonView;
}
