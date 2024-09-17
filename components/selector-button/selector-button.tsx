import SelectorButtonProps, {
  SelectorButtonStyles,
  SelectorButtonView,
} from './selector-button.props';

export default function SelectorButton({
  children,
  view,
  ...props
}: SelectorButtonProps) {
  const baseStyle =
    'border-2 border-fill-300 rounded-xl flex items-center justify-center shadow-fill-300 dark:shadow-fill-300/30 text-fill-500 dark:text-fill-300 hover:text-primary-500 hover:border-primary-500 transition-all"';
  const styles: SelectorButtonStyles = {
    [SelectorButtonView.Character]: `${baseStyle} w-44 h-72 shadow-md`,
    [SelectorButtonView.Cone]: `${baseStyle} w-28 h-44 shadow`,
    [SelectorButtonView.Relic]: `${baseStyle} size-14 shadow-sm`,
  };

  return (
    <button className={styles[view]} {...props}>
      {children}
    </button>
  );
}
