import Profile from '../../assets/profile.png';
import { RiMovie2Line } from 'react-icons/ri';
import { MdDesignServices } from 'react-icons/md';
import { Slide } from '../template/Slide';

export const SelfIntroduction = () => {
  return (
    <Slide prose positon="center" animation="fadeIn">
      <div className="flex items-center space-x-24">
        <div className="flex flex-col">
          <img src={Profile} alt="プロフィール写真" className="w-56 rounded-full shadow-around" />
          <h1 className="font-bold text-center text-gray-900">Ryuji Ito</h1>
        </div>
        <div className="text-4xl font-bold">
          <ul className="text-gray-600 list-disc">
            <li>25 years old</li>
            <li>UI / UX</li>
            <li className="space-x-2">
              <span>Frontend / Design</span>
              <MdDesignServices className="inline-block align-text-bottom" />
            </li>
            <li className="space-x-2">
              <span>Movie</span>
              <RiMovie2Line className="inline-block align-text-bottom" />
            </li>
          </ul>
        </div>
      </div>
    </Slide>
  );
};
