import React from 'react'

function Card(props) {
    return (
        <div className="rounded-lg shadow-lg p-6 m-4 max-w-70 max-h-56 flex flex-col justify-center items-center text-center hover:scale-105 transition-transform bg-white"
        >
            <div className='rounded-full w-15 h-15 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 flex justify-center items-center mb-4'>
                <img src={props.img} className="w-10 h-10 object-contain" alt="icon" />
            </div>
            <h2 className='font-bold text-xl text-blue-900 text-center  mb-2'>{props.heading}</h2>
            <p className='text-gray-800 text-sm text-center mb-2 leading-relaxed'>{props.paragraph}</p>
        </div>
    )
}

export default Card