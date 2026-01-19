import React, { useState } from 'react'
import profile from "../images/profile.png"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import { IoMdSearch } from "react-icons/io";
import { MdOutlineNotifications } from "react-icons/md";

function Navbar() {
    const navigate = useNavigate();
    const { user, loading } = useAuth();
    const {open,setOpen} = useState(false);

    return (
        <nav className={'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md'}>
            {loading ? (null) :
            (<div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>

                <div className='flex items-center gap-2'>
                    <div className='font-bold text-lg text-blue-900'>Hackathon</div>
                    <span className='font-semibold text-lg text-purple-500'>
                        Partner Finder
                    </span>
                </div>

                <div className={`flex-1 mx-0 my-auto ${!user && "flex justify-center"}`}>
                    {!user ? (<ul className='hidden md:flex items-center gap-15'>
                        <li>
                            <button
                                onClick={() =>
                                    document.getElementById("home")?.scrollIntoView({
                                        behavior: "smooth",
                                    })
                                }
                                className="text-gray-700 font-semibold hover:text-blue-600 transition"
                            >
                                Home
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() =>
                                    document.getElementById("key-features")?.scrollIntoView({
                                        behavior: "smooth",
                                    })
                                }
                                className="text-gray-700 font-semibold hover:text-blue-600 transition"
                            >
                                Key Features
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() =>
                                    document.getElementById("how-it-works")?.scrollIntoView({
                                        behavior: "smooth",
                                    })
                                }
                                className="text-gray-700 font-semibold hover:text-blue-600 transition"
                            >
                                How it Works
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() =>
                                    document.getElementById("user-review")?.scrollIntoView({
                                        behavior: "smooth",
                                    })
                                }
                                className="text-gray-700 font-semibold hover:text-blue-600 transition"
                            >
                                User Reviews
                            </button>
                        </li>

                    </ul>)
                        : (
                            <div className='flex items-center justify-center hidden md:flex '>
                                <div className='relative w-full max-w-sm'>
                                    <IoMdSearch size={18} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                                    <input className='w-full rounded-l-lg px-10 py-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-500 text-gray-700 bg-purple-50' type="text" placeholder='Search here...' />
                                </div>
                                <button className='-ml-px bg-gray-200 rounded-r-lg p-2 border border-gray-300 hover:bg-gray-300 hover:text-purple-500 transition'><IoMdSearch size={18} className='text-gray-400 ' /></button>
                            </div>
                        )}
                </div>

                {!user?
                    (<div className='flex items-center gap-4'>
                        <button className='text-gray-700 mr-4 font-bold hover:text-purple-600 transition' onClick={() => navigate('/login')}>
                            Login
                        </button>
                        <button className='bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition' onClick={() => navigate('/signup')}>
                            Sign Up
                        </button>
                    </div>):
                    (
                        <div className='flex items-center gap-8'>
                        <button className='text-gray-700 mr-4 font-bold hover:text-purple-600 transition' onClick={() => navigate('/notifications')}>
                            <MdOutlineNotifications size={25} />
                        </button>
                        <div className='relative'>
                            <button onClick={()=>{setOpen(!open)}}>
                                <img className="w-10 h-10 rounded-full" src={profile} alt="Profile" />
                            </button>
                            {
                                open && (<div className='absolute left-0'>
                                <p>Hello</p>
                            </div>)
                            }
                        </div>
                    </div>
                )}
            </div>)}
        </nav>
    )
}

export default Navbar