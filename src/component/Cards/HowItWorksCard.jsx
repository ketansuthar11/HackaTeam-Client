import React from 'react'

function HowItWorksCard({ step, img, heading, paragraph }) {
    return (
        <div className='max-w-70 rounded-lg px-6 py-4 shadow-lg m-4 bg-white hover:scale-105 transition-transform flex flex-col justify-center items-center text-center'>
            <div className='flex justify-start items-center gap-4 mb-4 w-full'>
                <span className="w-7 h-7 flex items-center justify-center
                    bg-indigo-600 text-white text-sm font-bold
                    rounded-md">
                    {step}
                </span>
                <h3 className="text-medium font-bold px-2 py-2 text-blue-900">{heading}</h3>
            </div>
            <div className="flex items-center gap-2">
                <div className="rounded-full w-14 h-14 
                flex items-center justify-center flex-shrink-0">
                    <img src={img} alt={heading} className="w-10 h-10 object-contain" />
                </div>

                <p className="text-gray-800 text-sm text-start mb-2 leading-relaxed justify-st
                ">
                    {paragraph}
                </p>
            </div>

        </div>
    )
}

export default HowItWorksCard