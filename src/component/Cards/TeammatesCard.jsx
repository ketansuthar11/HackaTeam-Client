import React from 'react'
import profile from "../../images/profile.png"
function TeammatesCard({name,score,role,skills}) {
    const styleList = 'rounded-lg border border-gray-400 px-3'
    const getBarColor = (score) => {
        if (score <= 40) return "bg-red-500";
        if (score <= 70) return "bg-orange-500";
        return "bg-green-500";
    };

    return (
        <div className='rounded-lg p-6 shadow-md bg-white w-70 hover:scale-105 transition-transform'>
                <div>
                    <div className='flex items-start justify-between '>
                    <div className='flex items-center justify-between gap-2'>
                        <div ><img src={profile} className="w-12 h-12 rounded-full object-cover border-2 border-blue-500" alt="Profile picture" /></div>
                        <div>
                            <h1>{name}</h1>
                            <p className='text-gray-400 text-sm'>{role}</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-start' >
                        <p className={`p-1 ${getBarColor(score)} rounded-lg text-sm text-white`}>{score}%</p>
                    </div>
                </div>
                <div className='mt-4 flex item-center'>
                    <ul className='flex item-center gap-2 flex-wrap'>
                        {
                            skills.map((skill)=>{
                                return(<li className={styleList}>{skill.name}</li>)
                            })
                        }
                    </ul>
                </div>
                <div className='h-2 bg-gray-300 overflow-hidden mt-4 rounded-full'>
                    <div className={`h-full ${getBarColor(score)} transition-all duration-200 h-2 rounded-lg`} style={{width:`${score}%`}}></div>
                </div>
                </div>
        </div>
    )
}

export default TeammatesCard