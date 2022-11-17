import { FadeIn } from '../template/FadeIn';
import { Section } from '../template/Section';
import Profile from '../../assets/profile.png';
import { Center } from '../template/Center';
import { RiMovie2Line } from 'react-icons/ri';
import { MdDesignServices } from 'react-icons/md';

export const SelfIntroduction = () => {
  return (
    <Center>
      <FadeIn>
        <Section>
          <div className="flex space-x-24 items-center">
            <div className="flex flex-col">
              <img src={Profile} alt="プロフィール写真" className="rounded-full w-56 shadow-around" />
              <h1 className="font-bold text-gray-900 text-center">Ryuji Ito</h1>
            </div>
            <div className="font-bold text-4xl">
              <ul className="list-disc text-gray-600">
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
        </Section>
      </FadeIn>
    </Center>
  );
};
