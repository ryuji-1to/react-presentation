type Size = 'sm' | 'md' | 'lg' | 'xl';

type Props = {
  children: React.ReactNode;
  size?: Size;
} & React.ComponentPropsWithoutRef<'p'>;

function getFontSize(size: Size) {
  switch (size) {
    case 'sm':
      return 'text-md';
    case 'lg':
      return 'text-xl';
    case 'xl':
      return 'text-2xl';
    case 'md':
    default:
      return 'text-lg';
  }
}

export function Text({ children, size = 'md', className, ...rest }: Props) {
  const fontSize = getFontSize(size);
  return (
    <p {...rest} className={`${className} ${fontSize}`}>
      {children}
    </p>
  );
}
