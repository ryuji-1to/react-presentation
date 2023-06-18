type Props = {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
} & React.ComponentPropsWithoutRef<'p'>;
export function Text({ children, size = 'md', className, ...rest }: Props) {
  return (
    <p {...rest} className={className}>
      {children}
    </p>
  );
}
