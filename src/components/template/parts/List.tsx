export function List({ itemList, className }: { itemList?: React.ReactNode[]; className?: string }) {
  return (
    <ul className={className}>
      {itemList?.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
