import React from 'react'
import logo from "../assets/team.svg";
import { useAuth } from '../context/AuthContext'
import Navbar from '../component/Navbar';

function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-400 min-h-[500px] md:min-h-[600px]">
        <div className="relative w-full mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center cursor-default">
          <div className="text-white ml-20 mb-20">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, {user || "User"} 👋
            </h1>

            <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-snug text-indigo-100">
              Ready to find your <br />
              hackathon team?
            </h2>

            <div className="mt-6 flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                Find Teammates
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img src={logo} alt="Landing Image" className="w-full max-w-md" />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-[120px]">
          <svg 
            viewBox="0 0 1440 120" 
            className="w-full h-full block" 
            preserveAspectRatio="none" 
            style={{ display: 'block', height: '120px' }}
          >
            <path d="M0,40 C480,100 960,100 1440,40 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>
      
      <section className="relative overflow-hidden bg-blue-400 min-h-screen scroll-mt-24">
        {/* Dusra section ka content yahan */}
      </section>
    </>
  )
}

export default Dashboard