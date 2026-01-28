import React from 'react'
import profile from "../images/profile.png"

function MyProfile() {
  return (
    <div className='pt-20'>
        <div className='bg-white rounded-xl mx-10 p-6 shadow-lg shadow-gray-300'>
            <div className='flex'>
                <div className='w-25 h-25'>
                    <img className="w-20 h-20" src={profile} alt="My Profile" />
                </div>
                <div>
                    <h1 className='font-bold text-2xl text-gray-700'>Ketan Suthar</h1>
                    <p className='text-md font-semibold text-gray-500 py-1'>Computer Science || Parul University || FullStack Developer</p>
                    <p className='text-sm font-semibold  text-gray-500'>vadodara</p>
                </div>
            </div>
            <div className='w-full flex gap-6 mt-4'>
                <button className='border border-gray-300 w-full text-black py-2 rounded-lg text-base font-semibold text-gray-700 hover:bg-purple-300 transition-all duration-200'>Edit profile</button>
                <button className='bg-purple-500 w-full text-white rounded-lg text-base font-semibold  text-gray-700 hover:bg-gray-300 hover:text-gray-700 transition-all duration-200'>Public View</button>
            </div>
        </div>
        
    </div>
  )
}

export default MyProfile