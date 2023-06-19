export function PresentationFooter({ currentIndex, allSlidesCount }: { currentIndex: number; allSlidesCount: number }) {
  return (
    <footer className={`w-full flex justify-center py-3 items-center`}>
      <small className="text-gray-900 font-bold">{`${currentIndex + 1} / ${allSlidesCount}`}</small>
    </footer>
  );
}
