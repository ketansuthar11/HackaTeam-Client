import { useState } from "react";

function BasicInfoCard({emailLocked,data,onChange}) {
    const handleOnchange = (e) => {
      onChange({
        ...data,
        [e.target.name]: e.target.value
      });
    };
  return (
    <div className='rounded-lg bg-white shadow-md p-6'>
        <h1 className='text-xl font-semibold'>Basic Information</h1>
        <form >
            <label className='block text-gray-700 font-semibold mt-2 mb-1' htmlFor="fullname">Full Name</label>
            <input className='w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" id="name" name="name" value={data.name || ""} placeholder="Enter your full name" onChange={handleOnchange}/>
            <label className='block text-gray-700 font-semibold mt-2 mb-1' htmlFor="email">Email Address</label>
            <input className='w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500' type="email" id="email" name="email" readOnly={emailLocked} value={data.email || ""} placeholder="Enter your email address" onChange={handleOnchange}/>
            <label className='block text-gray-700 font-semibold mt-2 mb-1' htmlFor="phone">Phone Number</label>
            <input className='w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500' type="tel" id="mobile" name="mobile" value={data.mobile || ""} placeholder="Enter your phone number" onChange={handleOnchange}/>
            <label className='block text-gray-700 font-semibold mt-2 mb-1' htmlFor="college">College</label>
            <input className='w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" id="college" name="college" value={data.college || ""} placeholder="Enter your college name" onChange={handleOnchange}/>
            <label className='block text-gray-700 font-semibold mt-2 mb-1' htmlFor="location">Location</label>
            <input className='w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" id="location" name="location" value={data.location || ""} placeholder="Enter your location" onChange={handleOnchange}/>
        </form>
    </div>
  )
}

export default BasicInfoCard