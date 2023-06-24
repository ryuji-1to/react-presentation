type Props = {
  children: React.ReactNode;
};
export function PresentationHeader({ children }: Props) {
  return <header className={`flex space-x-4 items-center py-2 px-4 justify-end`}>{children}</header>;
}
