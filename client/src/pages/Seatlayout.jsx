import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets';
import Loading from '../components/Loading';
import { ArrowRight, ArrowRightIcon, ClockIcon } from 'lucide-react';
import Blurcircle from '../components/Blurcircle';
import { toast } from 'react-hot-toast'; // Make sure this package is installed

const Seatlayout = () => {
  const grouprows = [["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"], ["I", "J"]];
  const navigate = useNavigate();
  const [selectedseats, setselectedseats] = useState([]);
  const [show, setshow] = useState(null);
  const { id, date } = useParams();
  const [selectedtime, setselectedtime] = useState(null);

  const isotimeformat = (datetime) => {
    const d = new Date(datetime);
    return d.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const getshow = async () => {
    const show = dummyShowsData.find(show => show._id === id);
    if (show) {
      setshow({
        movie: show,
        dateTime: dummyDateTimeData
      });
    }
  };

  const handleseatclick = (seatid) => {
    if (!selectedtime) {
      return toast("Oops! You need to select a time first");
    }

    if (!selectedseats.includes(seatid) && selectedseats.length >= 5) {
      return toast("Looks like 5 seats is the max!");
    }

    setselectedseats((prev) =>
      prev.includes(seatid)
        ? prev.filter((seat) => seat !== seatid)
        : [...prev, seatid]
    );
  };

  const renderseats = (row, cnt =8) => (
    <div key={row} className='flex gap-2 mt-2'>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        {Array.from({ length: cnt }, (_, i) => {
          const seatid = `${row}${i + 1}`;
          return (
            <button
              key={seatid}
              onClick={() => handleseatclick(seatid)}
              className={`h-8 w-8 rounded border border-primary/60 cursor-pointer transition ${
                selectedseats.includes(seatid) ? 'bg-primary text-white' : ''
              }`}
            >
              {seatid}
            </button>
          );
        })}
      </div>
    </div>
  );

  useEffect(() => {
    getshow();
  }, []);

  return show ? (
    <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50'>
      {/* Sidebar - Time Selection */}
      <div className='w-60 bg-primary/10 border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30'>
        <p className='text-lg font-semibold px-6'>Shows available</p>
        <div className='mt-5 space-y-1'>
          {show.dateTime[date]?.map((item) => (
            <div
              key={item.time}
              onClick={() => setselectedtime(item)}
              className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${
                selectedtime?.time === item.time
                  ? 'bg-primary text-white'
                  : 'hover:bg-primary/20'
              }`}
            >
              <ClockIcon className='w-4 h-4' />
              <p className='text-sm'>{isotimeformat(item.time)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content - Seat Layout */}
      <div className='relative flex-1 flex flex-col items-center max-md:mt-16'>
        <Blurcircle top='-100px' left='-100px' />
        <Blurcircle bottom='0px' right='0px' />
        <h1 className='text-xl font-semibold mb-4'>Pick a Seat for the Show</h1>
        <img src={assets.screenImage} alt="screen" />
        <p className='text-gray-400 text-sm mb-6'>Screen side</p>

        <div className='flex flex-col items-center mt-10 text-xs text-gray-300 '>
          <div className='grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6'>
            {grouprows[0].map(row => renderseats(row))}
          </div>

          <div className='grid grid-cols-2 gap-11'>
            {grouprows.slice(1).map((group, ind) => (
              <div key={ind}>
                {group.map(row => renderseats(row))}
              </div>
            ))}
          </div>
        </div>
        <button onClick={()=> navigate('/my-bookings')} className='flex items-center gap-1 mt-20 px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer active:scale-90'>
          Finalize Booking
          <ArrowRightIcon strokeWidth={3} className='w-4 h-4'/>
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Seatlayout;
