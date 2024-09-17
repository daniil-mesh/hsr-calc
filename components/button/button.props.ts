import { ButtonHTMLAttributes, ReactNode } from 'react';

export const ButtonView = {
  Primary: 'primary',
  Secondary: 'secondary',
} as const;

export type ButtonView = (typeof ButtonView)[keyof typeof ButtonView];
export type ButtonStyles = { [key in ButtonView]: string };

export default interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  view?: ButtonView;
}
