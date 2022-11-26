import Profile from '../../assets/profile.png';
import { Slide } from '../template/Slide';

export const SelfIntroduction = () => {
  return (
    <Slide prose position="center" animation="fadeIn">
      <div className="flex items-center space-x-20">
        <div className="flex flex-col">
          <img src={Profile} alt="プロフィール写真" className="w-56 rounded-full shadow-around" />
          <h1 className="font-bold text-center text-gray-700">Ryuji Ito</h1>
        </div>
        <div className="text-4xl font-bold">
          <ul className="text-gray-400 list-disc">
            <li>
              <span className="text-gray-600">Born in Chiba</span>
            </li>
            <li>
              <span className="text-gray-600">Movie / Reading / Cooking</span>
            </li>
            <li>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                UI / UX
              </span>
            </li>
            <li>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-purple-500">
                Frontend / Design
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Slide>
  );
};
