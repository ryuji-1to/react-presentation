import { ChangeEvent, useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Button } from '../../share/Button';
import { AiOutlineStar, AiFillStar, AiFillHeart, AiOutlineHeart, AiOutlineCheckCircle } from 'react-icons/ai';
import { MdMoodBad } from 'react-icons/md';
import { Slide } from '../../template/Slide';
import { CheckBox } from '../../share/CheckBox';

export const LikeButtonDemo = () => {
  const [isOkGoodUx, setIsOkGoodUx] = useState(false);
  const [isOkBadUx, setIsOkBadUx] = useState(false);
  const [isForceError, setIsForceError] = useState(false);
  const [latency, setLatency] = useState(0);

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

  const handleChangeLatency = (e: ChangeEvent<HTMLInputElement>) => {
    setLatency(Number(e.target.value));
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
    setIsOkGoodUx(false);
  }, []);

  const handleToggleForceError = useCallback(() => {
    setIsForceError((prev) => !prev);
  }, []);

  return (
    <Slide slideTitle="Like Button UX" position="center" animation="fadeIn" className="space-y-16">
      <div className="flex space-x-20">
        <section className="flex flex-col items-center space-y-10">
          <h2 className="text-5xl font-bold text-center text-red-500">
            <MdMoodBad className="inline-block mr-2 align-text-bottom" />
            Bad UX
          </h2>
          <div className="space-x-4">
            <Button
              icon={
                isOkBadUx ? <AiFillStar className="text-yellow-400" /> : <AiOutlineStar className="text-gray-700" />
              }
              onClick={isOkBadUx ? handleResetBadUx : handleClickBadUx}
              className="text-6xl"
            />
          </div>
        </section>
        <section className="flex flex-col items-center space-y-10">
          <h2 className="text-5xl font-bold text-center text-green-500">
            <AiOutlineCheckCircle className="inline-block mr-2 text-green-500 align-text-bottom" />
            Good UX
          </h2>
          <div className="space-x-4">
            <Button
              icon={
                isOkGoodUx ? <AiFillHeart className="text-pink-400" /> : <AiOutlineHeart className="text-gray-700" />
              }
              onClick={isOkGoodUx ? handleResetGoodUx : handleClickGoodUx}
              className="text-6xl"
            />
          </div>
        </section>
      </div>
      <div className="flex items-center p-4 space-x-8 bg-white rounded-lg bg-opacity-80 shadow-around">
        <CheckBox label="Force Error" checked={isForceError} onChange={handleToggleForceError} />
        <div className="flex-1">
          <label htmlFor="minmax-range" className="inline-block w-full font-bold text-center text-gray-700">
            latency
          </label>
          <input
            id="minmax-range"
            type="range"
            min={0}
            max={3000}
            value={latency}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer "
            onChange={handleChangeLatency}
          />
        </div>
      </div>
    </Slide>
  );
};
