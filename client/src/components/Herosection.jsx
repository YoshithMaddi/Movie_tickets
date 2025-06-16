import React from 'react';
import { assets } from '../assets/assets';
import { CalendarIcon, ClockIcon } from 'lucide-react';

const Herosection = () => {
  return (
    <div className='pt-24 flex flex-col items-start justify-center gap-4 px-6 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen text-white'>
      <img src={assets.marvelLogo} alt="Marvel" className='max-h-11 lg:h-11 mt-4' />
      <h1 className='text-5xl md:text-[70px] md:leading-[80px] font-semibold max-w-3xl'>
        Guardians <br /> of the Galaxy
      </h1>
      <div className='flex items-center gap-6 text-gray-300'>
        <span>Action | Sci-fi</span>
        <div className='flex items-center gap-1'>
          <CalendarIcon size={16} />
          2018
        </div>
        <div className='flex items-center gap-1'>
          <ClockIcon size={16} />
          2h 8m
        </div>
      </div>
    </div>
  );
};

export default Herosection;
