import { AnchorLink } from '../share/AnchorLink';
import { Slide } from '../template/Slide';

export const WhatIsTrpc = () => {
  return (
    <Slide slideTitle="What's tRPC...???" animation="fadeIn" prose className="flex flex-col h-full">
      <p className="grid place-items-start flex-1">
        <div>
          <span className="text-4 mr-2">👉</span>
          <AnchorLink className="text-3" href="https://trpc.io/">
            公式ドキュメント
          </AnchorLink>
        </div>
      </p>
    </Slide>
  );
};
