type Props = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

export function Prose({ children, className, ...rest }: Props) {
  return (
    <div {...rest} className={`prose-lg ${className}`}>
      {children}
    </div>
  );
}
