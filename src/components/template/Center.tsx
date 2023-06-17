type Props = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

export function Center({ children, className, ...rest }: Props) {
  return (
    <div {...rest} className={`grid w-full h-full place-items-center ${className}`}>
      {children}
    </div>
  );
}
