import { useBg } from './hooks/use-bg';

type Props = {
  children: React.ReactNode;
};
export function BackGround({ children }: Props) {
  const { bg } = useBg();

  return <div className={`h-full ${bg}`}>{children}</div>;
}
