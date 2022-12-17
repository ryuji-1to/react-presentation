import { AnchorLink } from '../share/AnchorLink';
import { Slide } from '../template/Slide';

export const Rpc = () => {
  return (
    <Slide slideTitle="RPC (Remote Procedure Call)" animation="fadeIn" prose>
      <div className="text-1.5 text-slate-600">
        <p>
          RPCとは、あるコンピュータで動作するソフトウェアから、通信回線やコンピュータネットワークを通じて別のコンピュータ上で動作するソフトウェアへ処理を依頼したり、結果を返したりするための規約。
          <br />
          <br />
          プログラム中の
          <strong className="text-base-black">
            手続きや関数、メソッドなどを呼び出すのと同じ手順
            でネットワーク越しに別のコンピュータ上のプログラムを呼び出す手法
          </strong>
          であり、プログラマがネットワークによる通信手順の詳細な実装をする必要はない。
        </p>
        <div className="text-right">
          <AnchorLink className="text-left text-1" href="https://e-words.jp/w/RPC.html">
            IT用語辞典より抜粋
          </AnchorLink>
        </div>
      </div>
    </Slide>
  );
};
