import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Button } from '../../Button';
import { AiOutlineStar, AiFillStar, AiFillHeart, AiOutlineHeart, AiOutlineCheckCircle } from 'react-icons/ai';
import { MdMoodBad } from 'react-icons/md';
import { Center } from '../../template/Center';
import { Slide } from '../../template/Slide';

export const Optimistic = () => {
  const [isOkGoodUx, setIsOkGoodUx] = useState(false);
  const [isOkBadUx, setIsOkBadUx] = useState(false);
  const [isForceError, setIsForceError] = useState(true);
  const [latency, setLatency] = useState(2000);

  const save = async ({
    callback,
    initialAction,
    errorAction
  }: {
    callback: () => void;
    initialAction?: () => void;
    errorAction?: () => void;
  }) => {
    initialAction?.();
    await new Promise((res) => setTimeout(res, latency));
    if (isForceError) {
      errorAction?.();
      throw Error();
    }
    callback();
  };

  const handleClickBadUx = () => {
    toast.promise(save({ callback: () => setIsOkBadUx(true) }), {
      loading: 'loading...',
      success: 'OK',
      error: 'Oh...'
    });
  };

  const handleClickGoodUx = () => {
    toast.promise(
      save({
        callback: () => setIsOkGoodUx(true),
        initialAction: () => setIsOkGoodUx(true),
        errorAction: () => setIsOkGoodUx(false)
      }),
      {
        loading: 'loading...',
        success: 'OK',
        error: 'Oh...'
      }
    );
  };

  const handleResetBadUx = useCallback(() => {
    setIsOkBadUx(false);
  }, []);

  const handleResetGoodUx = useCallback(() => {
    setIsOkBadUx(false);
  }, []);

  return (
    <Slide positon="center" animation="fadeIn">
      <div className="flex space-x-12">
        <section className="flex flex-col items-center space-y-10">
          <h2 className="text-5xl font-bold text-center text-red-500">
            <MdMoodBad className="inline-block mr-2 align-text-bottom" />
            Bad UX
          </h2>
          <div className="space-x-4">
            <Button onClick={isOkBadUx ? handleResetBadUx : handleClickBadUx} className="text-6xl">
              {isOkBadUx ? <AiFillStar className="text-yellow-400" /> : <AiOutlineStar />}
            </Button>
            <Button onClick={isOkBadUx ? handleResetBadUx : handleClickBadUx} className="text-6xl">
              {isOkBadUx ? <AiFillHeart className="text-pink-400" /> : <AiOutlineHeart />}
            </Button>
          </div>
        </section>
        <section className="flex flex-col items-center space-y-10">
          <h2 className="text-5xl font-bold text-center text-green-500">
            <AiOutlineCheckCircle className="inline-block mr-2 text-green-500 align-text-bottom" />
            Good UX
          </h2>
          <div className="space-x-4">
            <Button onClick={isOkGoodUx ? handleResetGoodUx : handleClickGoodUx} className="text-6xl">
              {isOkGoodUx ? <AiFillStar className="text-yellow-400" /> : <AiOutlineStar />}
            </Button>
            <Button onClick={isOkGoodUx ? handleResetGoodUx : handleClickGoodUx} className="text-6xl">
              {isOkGoodUx ? <AiFillHeart className="text-pink-400" /> : <AiOutlineHeart />}
            </Button>
          </div>
        </section>
      </div>
    </Slide>
  );
};
