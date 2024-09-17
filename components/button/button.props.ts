import { ButtonHTMLAttributes, ReactNode } from 'react';

const button = {
  primary: 'primary',
  secondary: 'secondary',
} as const;

type buttonView = (typeof button)[keyof typeof button];

export type buttonViews = {
  [key in buttonView]: string;
};

export default interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  view?: buttonView;
}
