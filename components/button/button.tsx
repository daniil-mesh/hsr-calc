import ButtonProps, { ButtonStyles, ButtonView } from './button.props';

export default function Button({
  children,
  view = ButtonView.Primary,
  ...props
}: ButtonProps) {
  const baseStyle =
    'inline-block rounded-xl font-semibold uppercase tracking-wide text-sm transition-colors';
  const styles: ButtonStyles = {
    [ButtonView.Primary]: `${baseStyle} text-fill-100 bg-primary-600 dark:text-fill-900 dark:bg-primary-500 hover:bg-primary-600/90 hover:text-fill-950 px-4 py-2 md:px-5 md:py-3`,
    [ButtonView.Secondary]: `${baseStyle} border border-fill-500 hover:border-accent-500 text-clr-primary hover:bg-accent-500 hover:text-fill-900 px-4 py-2 md:px-5 md:py-3`,
  };

  return (
    <button className={styles[view]} {...props}>
      {children}
    </button>
  );
}
