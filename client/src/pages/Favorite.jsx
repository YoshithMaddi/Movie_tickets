import React from 'react'
import { dummyShowsData } from '../assets/assets'
import Moviecard from '../components/Moviecard'
import Blurcircle from '../components/Blurcircle'
const Favorite = () => {
  return dummyShowsData.length>0 ?(
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'> 
    <Blurcircle top="150px" left="0px" />
    <Blurcircle bottom="40px" right="50px" />
      <h1 className='text-lg font-medium my-4'>Your favv </h1>
      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {dummyShowsData.map((item)=>(
          <Moviecard movie={item} key={item._id}/>
        ))}
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold text-center'>No movies </h1>
    </div>
  )
}

export default Favorite 
