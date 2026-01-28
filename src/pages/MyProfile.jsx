import React from 'react'
import profile from "../images/profile.png"
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProfile } from '../services/profile.api'

function MyProfile() {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState({
        basicInfo: {
            name: "",
            email: "",
            mobile: "",
            college: "",
            location: ""
        },
        experience: {
            years: null,
            pastHackathons: "",
            githubLink: ""
        },
        preferences: {
            role: "",
            teamSize: null,
            mode: ""
        },
        skills: []
    })

    // 🔹 Fetch profile
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setLoading(true);
                const res = await getProfile()
                console.log("PROFILE RESPONSE:", res.data)

                if (res.data?.success && res.data.data) {
                    setProfileData(prev => ({
                        ...prev,
                        ...res.data.data
                    }))
                }
            } catch (err) {
                console.error("GET PROFILE ERROR:", err)
            }
            finally {
                setLoading(false);
            }
        }

        fetchProfile()
    }, [])

    return (
        <div className='pt-20'>
            <div className='bg-white rounded-xl mx-10 p-6 shadow-lg shadow-gray-300'>
                <div className='flex'>
                    <div className='w-25 h-25'>
                        <img className="w-20 h-20" src={profile} alt="My Profile" />
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl text-gray-700'>{profileData.basicInfo.name}</h1>
                        <p className='text-md font-semibold text-gray-500 py-1'>Computer Science || {profileData.basicInfo.college} || {profileData.preferences.role}</p>
                        <p className='text-sm font-semibold  text-gray-500'>{profileData.basicInfo.location}</p>
                    </div>
                </div>
                <div className='w-full flex gap-6 mt-4'>
                    <button className='border border-gray-300 w-full text-black py-2 rounded-lg text-base font-semibold text-gray-700 hover:bg-purple-300 transition-all duration-200' onClick={()=>navigate('profile-setup')}>Edit profile</button>
                    <button className='bg-purple-500 w-full text-white rounded-lg text-base font-semibold  text-gray-700 hover:bg-gray-300 hover:text-gray-700 transition-all duration-200'>Public View</button>
                </div>
            </div>
            <div className='mx-10'>
                <div className='flex gap-4 pt-10 '>
                    <div className='flex gap-4'>
                        <div className='rounded-lg p-6 bg-white shadow-lg shadow-gray-300 border border-gray-300 min-w-60 max-h-40'>
                            <p className='font-semibold text-md text-gray-600'>Hackathon Won</p>
                            <h1 className='font-bold text-3xl text-gray-700 py-4'>5</h1>
                            <p className='font-semibold text-sm text-green-600'>Top 1% of Participants</p>
                        </div>
                        <div className='rounded-lg p-6 bg-white shadow-lg shadow-gray-300 border border-gray-300 min-w-60 max-h-40'>
                            <p className='font-semibold text-md text-gray-600'>Total Projects</p>
                            <h1 className='font-bold text-3xl text-gray-700 py-4'>12</h1>
                            <p className='font-semibold text-sm text-green-600'>8 published repositories</p>
                        </div>
                        <div className='rounded-lg p-6 bg-white shadow-lg shadow-gray-300 border border-gray-300 min-w-60 max-h-40'>
                            <p className='font-semibold text-md text-gray-600'>Endorsements</p>
                            <h1 className='font-bold text-3xl text-gray-700 py-4'>24</h1>
                            <p className='font-semibold text-sm text-green-600'>+3 months</p>
                        </div>
                    </div>
                    <div className='rounded-lg p-6 bg-white shadow-lg shadow-gray-300 border border-gray-300  min-w-60'>
                        <p className='font-semibold text-md text-gray-600'>
                            I’m Ketan, a passionate developer who loves building clean and useful digital experiences.
                            I enjoy solving problems, learning new technologies, and improving my skills every day.
                            From web apps to Flutter projects, I focus on functionality, design, and user experience.
                            Always curious, motivated, and ready to take on new challenges 🚀

                        </p>
                        <h1 className='font-bold text-3xl text-gray-700 py-4'></h1>
                        <p className='font-semibold text-sm text-green-600'>+3 months</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile