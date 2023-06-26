type Props = {
  icon?: React.ReactElement;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'>;

export function Button({ icon, children, className, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`${
        icon
          ? 'p-2 rounded-full backdrop-blur-3xl bg-opacity-70 hover:bg-opacity-20 bg-gray-50 shadow-xl'
          : ''
      } ${className}`}>
      {icon || children}
    </button>
  );
}
