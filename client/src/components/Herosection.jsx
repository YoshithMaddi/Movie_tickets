import React from 'react';
import { assets } from '../assets/assets';
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Herosection = () => {
  const navigate =useNavigate();
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
      <p className='max-w-md text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, reiciendis obcaecati debitis modi saepe optio dolor. Id magnam neque fuga.</p>
      <button onClick={()=>navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
        Explore movies
        <ArrowRight className='w-5 h-5'/>
        
      </button>
    </div>
  );
};

export default Herosection;
