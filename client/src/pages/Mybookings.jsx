import React, { useEffect, useState } from 'react';
import { dummyBookingData } from '../assets/assets';
import Loading from '../components/Loading';
import Blurcircle from '../components/Blurcircle';
import time from '../lib/time';
import { dateFormat } from '../lib/dateFormat';

const Mybookings = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [bookings, setbookings] = useState([]);
  const [isloading, setisloading] = useState(true);

  const getmybookings = async () => {
    setbookings(dummyBookingData);
    setisloading(false);
  };

  useEffect(() => {
    getmybookings();
  }, []);

  return !isloading ? (
    <div className='relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]'>
      <Blurcircle top='100px' left='100px' />
      <Blurcircle bottom='0px' left='600px' />
      
      <h1 className='text-lg font-semibold mb-4'>What I Booked</h1>

      {bookings.map((item, index) => (
        <div
          key={index}
          className='flex flex-col md:flex-row justify-between bg-primary/8 border border-primary/20 rounded-lg mt-4 p-2 max-w-3xl'
        >
          <div className='flex flex-col md:flex-row'>
            <img
              src={item.show.movie.poster_path || 'https://via.placeholder.com/150'}
              alt="Poster"
              className='md:max-w-45 aspect-video h-auto object-cover object-bottom rounded'
            />
            <div className='flex flex-col p-4 justify-between'>
              <div>
                <p className='text-lg font-semibold'>{item.show.movie.title}</p>
                <p className='text-gray-400 text-sm'>{time(item.show.movie.runtime)}</p>
              </div>
              <p className='text-gray-400 text-sm mt-4'>
                {dateFormat(item.show.showDateTime)}
              </p>
            </div>
          </div>

          <div className='flex flex-col md:items-end md:text-right justify-between p-4'>
            <div className='flex items-center gap-4'>
              <p className='text-2xl font-semibold mb-3'>
                {currency}{item.amount}
              </p>
              {!item.isPaid && (
                <button className='bg-primary px-4 py-1.5 mb-3 text-sm rounded-full font-medium cursor-pointer'>
                  Time to Pay
                </button>
              )}
            </div>
            <div className='text-sm'>
              <p><span className='text-gray-400'>Total tickets:</span> {item.bookedSeats.length}</p>
              <p><span className='text-gray-400'>Seat Number:</span> {item.bookedSeats.join(", ")}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export default Mybookings;
