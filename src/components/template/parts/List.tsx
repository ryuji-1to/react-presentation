type Props = {
  itemList?: React.ReactNode[];
  className?: string;
} & React.ComponentPropsWithoutRef<'ul'>;

export function List({ itemList, className, ...rest }: Props) {
  return (
    <ul {...rest} className={className}>
      {itemList?.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
