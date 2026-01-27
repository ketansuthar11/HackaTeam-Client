import React from 'react'
import { useState, useEffect } from 'react';
import TeammatesCard from '../component/Cards/TeammatesCard'
import { getTeams } from '../services/profile.api'
import Loading from '../component/Loading';
function FindTeammates() {
    const [teams, setTeams] = useState([]);
    const [teamsLoading, setTeamsLoading] = useState(false);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                setTeamsLoading(true);
                const res = await getTeams();
                if (res.data?.success) {
                    setTeams(res.data.data);
                }
            } catch (err) {
                console.error("Failed to fetch teams", err);
            } finally {
                setTeamsLoading(false);
            }
        };

        fetchTeams();
    }, []);

    useEffect(() => {
        console.log("AI MATCHED TEAMS:", teams);
    }, [teams]);


    return (
        <div className=" bg-gray-100 min-h-screen pt-10">
            {teamsLoading ? (
                    <div className="flex items-center justify-center min-h-screen">
                        <Loading />
                    </div>
                ):(
            <div className='pt-10 md:ml-8 mt-6'>
                        <h1 className='pl-6 text-xl'>{teams.length} Teammates Found</h1>
                        <div className="max-w-screen md:max-w-7xl mx-auto px-6 mt-8">
                            <div className="flex gap-4 flex-wrap justify-start">
                                {
                                    teams.map((team, key) => {
                                        return (
                                            <TeammatesCard key={key} name={team.name} score={team.matchScore} role={team.role} skills={team.skills} />
                                        )
                                    })
                                }

                            </div>
                        </div>
            </div>)}
        </div>

    )
}

export default FindTeammates