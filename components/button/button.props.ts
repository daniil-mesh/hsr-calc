import { ButtonHTMLAttributes, ReactNode } from 'react';

export const ButtonView = {
  Primary: 'primary',
  Secondary: 'secondary',
} as const;

type ButtonView = (typeof ButtonView)[keyof typeof ButtonView];

export default interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  view?: ButtonView;
}
