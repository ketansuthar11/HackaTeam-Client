import React from 'react'

function UserReviewCard({img, heading, bio, paragraph }) {
  return (
     <div className='max-w-70 rounded-lg px-6 py-4 shadow-lg m-4 bg-white hover:scale-105 transition-transform flex flex-col justify-center items-center text-center'>
            <div className='flex justify-start items-center gap-4 mb-4 w-full'>
                <div className="rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                    <img src={img} alt={heading} className="rounded-full w-14 h-14 overflow-hidden" />
                </div>
                <div className='text-left'>
                    <h3 className="text-medium font-bold text-blue-900">{heading}</h3>
                    <p className='text-sm text-gray-500'>{bio}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-gray-800 text-sm text-start mb-2 leading-relaxed justify-start">
                    {paragraph}
                </p>
            </div>

        </div>
  )
}

export default UserReviewCard