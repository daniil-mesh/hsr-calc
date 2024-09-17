import { ButtonHTMLAttributes, ReactNode } from 'react';

const selectorButton = {
  character: 'character',
  cone: 'cone',
  relic: 'relic',
} as const;

type buttonView = (typeof selectorButton)[keyof typeof selectorButton];

export type selectorButtonViews = {
  [key in buttonView]: string;
};

export default interface SelectorButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  view: buttonView;
}
