import { useBg } from './hooks/use-bg';

export function BackGround({ children }: { children: React.ReactNode }) {
  const { bg } = useBg();
  return <div className={`h-full ${bg}`}>{children}</div>;
}
