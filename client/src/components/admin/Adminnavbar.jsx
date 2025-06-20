import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Adminnavbar = () => {
  return (
    <div className='flex items-centre justify-between px-6 md:px-10 h-16 border-b border-gray-300/30'>
      <Link to="/"/>
      <img className='w-36 h-auto' src={assets.logo_final} alt="logo" />
      <Link/>
    </div>
  )
}

export default Adminnavbar
