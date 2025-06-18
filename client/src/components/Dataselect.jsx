import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Blurcircle from './Blurcircle';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Dataselect = ({ dateTime, id }) => {
  const dates = Object.keys(dateTime);
  const [activeDate, setActiveDate] = useState(null);
  const navigate = useNavigate();

  const onbookhandler = () => {
    if (!activeDate) {
      return toast('Please select a date');
    }
    window.scrollTo(0, 0);
    navigate(`/movies/${id}/${activeDate}`);
  };

  return (
    <div id='dateselect' className='pt-20'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-[#2c1a1f] border border-primary/20 rounded-xl'>
        <Blurcircle top='-100px' left='-100px' />
        <Blurcircle top='-100px' right='0px' />

        {/* Left Side: Date Picker */}
        <div className='flex flex-col items-center gap-6'>
          <p className='text-lg font-semibold text-white'>Choose Date</p>
          <div className='flex items-center gap-4'>
            <ChevronLeftIcon className='cursor-pointer text-white hover:opacity-80' />
            <div className='flex gap-3 flex-wrap justify-center'>
              {dates.map((date) => {
                const parsed = new Date(date);
                const isActive = activeDate === date;
                return (
                  <button
                    key={date}
                    onClick={() => setActiveDate(date)}
                    className={`flex flex-col items-center justify-center h-16 w-16 rounded-md transition-all duration-200 border 
                      ${isActive
                        ? 'bg-primary text-white border-transparent'
                        : 'border-white/20 text-white hover:border-white/40'
                      }`}
                  >
                    <span className='text-md'>{parsed.getDate()}</span>
                    <span className='text-sm'>{parsed.toLocaleDateString('en-US', { month: 'short' })}</span>
                  </button>
                );
              })}
            </div>
            <ChevronRightIcon className='cursor-pointer text-white hover:opacity-80' />
          </div>
        </div>

        {/* Right Side: Book Button */}
        <button
          onClick={onbookhandler}
          disabled={!activeDate}
          className={`px-8 py-3 rounded-md font-semibold transition-all 
            ${!activeDate
              ? 'bg-primary opacity-50 cursor-not-allowed text-white'
              : 'bg-primary hover:bg-primary/90 text-white'
            }`}
        >
          Get your tickets
        </button>
      </div>
    </div>
  );
};

export default Dataselect;
