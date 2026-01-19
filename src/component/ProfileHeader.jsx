import React from 'react'
import profile from "../images/profile.png"
function ProfileHeader({ completion }) {
    return (
        <div className='bg-white rounded-xl shadow-md p-6 w-full text-start shadow-gray-300'>
            <div className='flex justify-start items-center gap-4'>
                <img className='w-10 h-10' src={profile} alt="Profile Picture" />
                <h1 className='text-2xl font-semibold'>My Profile</h1>
            </div>
            <p className='mt-4 text-gray-400'>Complete your profile to get better team matches</p>
            <div className='mt-4'>
                <div className='bg-gray-300 rounded-lg h-2 h-3 overflow-hidden'>
                    <div className='h-full bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-lg' style={{ width: `${completion}%` }}></div>
                </div>
                <p className='mt-2 text-sm text-gray-500'>{completion}% Complete</p>
            </div>
        </div>
    )
}

export default ProfileHeader