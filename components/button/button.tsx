import ButtonProps from './button.props';

export default function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
