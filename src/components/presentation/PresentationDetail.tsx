type Props = {
  children: React.ReactNode;
};
export function PresentationDetail({ children }: Props) {
  return <main className="flex flex-col h-screen overflow-scroll">{children}</main>;
}
