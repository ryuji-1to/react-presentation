import { AnchorLink } from '../share/AnchorLink';
import { Slide } from '../template/Slide';

export const WhatIsTrpc = () => {
  return (
    <Slide slideTitle="What's tRPC...???" animation="fadeIn" prose>
      <p className="flex">
        <span className="text-2 mr-2">👉</span>
        <AnchorLink className="text-1.5" href="https://trpc.io/">
          公式ドキュメント
        </AnchorLink>
      </p>
    </Slide>
  );
};
