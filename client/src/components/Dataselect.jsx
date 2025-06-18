import React from 'react'
import Blurcircle from './Blurcircle'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

const Dataselect = ({}) => {
  return (
    <div id='dateselect' className='pt-30'>
        <div className='flex flex-col md:flew-row items-centre justify-between gap-10 relative p-8 bg-primary border border-primary/20 rounded-lg'>
            <Blurcircle top='-100px' left='-100px'/>
            <Blurcircle top='-100px' right='0px'/>
            <div>
                <p className='text-lg font-semibold'>Choose date</p>
                <div className='flex items-center gap-6 text-sm mt-5'></div>
                <ChevronLeftIcon width={28}/>
                <span className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>
                    {Object.keys(dateTime).map((date)=>{
                        <button key={date} className='flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer'>
                            <span>{new Date(date).getDate()}</span>
                            <span>{new Date(date).toLocaleDateString('en-US',{month:"short"})}</span>
                            <ChevronRightIcon/>
                        </button>
                    })}
                </span>
            </div>
        </div>
      
    </div>
  )
}

export default Dataselect
