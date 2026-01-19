import React from 'react'

function FormInput({
    label,
    id,
    name,
    type,
    placeholder,
    value,
    onChange,
    LeftIcon,
    RightIcon,
    onRightIconClick
}) {
    return (
        <div className='text-start'>
            <label className="text-start font-semibold text-gray-500" htmlFor={id}>{label}</label>
            <div className='relative items-center mt-2'>
                {LeftIcon && <LeftIcon className='absolute left-3 inset-y-0 my-auto w-5 h-5 text-gray-400 cursor-pointer' />}
                <input
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className='w-full px-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                />
                {RightIcon && (<RightIcon className="absolute right-3 inset-y-0 my-auto w-5 h-5 text-gray-400 cursor-pointer" onClick={onRightIconClick} />)}
            </div>
        </div>
    )
}

export default FormInput