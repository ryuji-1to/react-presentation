type Props = {
  currentIndex: number;
  allSlidesCount: number;
};

export function PresentationFooter({ currentIndex, allSlidesCount }: Props) {
  return (
    <footer className={`w-full flex justify-center py-3 items-center`}>
      <small className="text-gray-900 font-bold">{`${currentIndex + 1} / ${allSlidesCount}`}</small>
    </footer>
  );
}
