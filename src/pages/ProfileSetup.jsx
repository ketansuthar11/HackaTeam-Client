import React, { useEffect, useState } from 'react'
import ProfileHeader from '../component/ProfileHeader'
import BasicInfoCard from '../component/Cards/BasicInfoCard'
import SkillsExpertiseCard from '../component/Cards/SkillsExpertiseCard'
import ExperienceCard from '../component/Cards/ExperienceCard'
import PreferencesCard from '../component/Cards/PreferencesCard'
import { getProfile, saveProfile, getTeams } from '../services/profile.api'
function ProfileSetup() {

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [completion, setCompletion] = useState(0);
  const [emailLocked, setEmailLocked] = useState(false);
  const [teams, setTeams] = useState([]);



  const [profileData, setProfileData] = useState({
    basicInfo: {
      name: "",
      email: "",
      mobile: "",
      college: "",
      location: ""
    },
    experience: {
      years: null,        // 0 | 2 | 3
      pastHackathons: "",
      githubLink: ""
    },
    preferences: {
      role: "",
      teamSize: null,
      mode: ""
    },
    skills: []
  });


 


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile();
        if (res.data?.success && res.data.data) {
          setProfileData(prev => ({
            ...prev,
            ...res.data.data
          }));
          if (res.data.data.basicInfo?.email) {
            setEmailLocked(true);
          }
        }
      } catch {
        console.log("Profile not found");
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    const percent = calculateCompletion(profileData);
    setCompletion(percent);
  }, [profileData]);

  useEffect(() => {
    console.log("AI MATCHED TEAMS:", teams);
  }, [teams]);



  const calculateCompletion = (profile) => {
    let score = 0;

    // 🔹 Basic Info (40%)
    const basicFields = ["name", "email", "mobile", "college", "location"];
    const filledBasic = basicFields.filter(
      key => profile.basicInfo[key]
    ).length;

    score += (filledBasic / basicFields.length) * 40;

    // 🔹 Experience (20%)
    if (profile.experience.years !== null) score += 10;
    if (profile.experience.pastHackathons || profile.experience.githubLink)
      score += 10;

    // 🔹 Preferences (20%)
    const prefFields = ["role", "teamSize", "mode"];
    const filledPrefs = prefFields.filter(
      key => profile.preferences[key]
    ).length;

    score += (filledPrefs / prefFields.length) * 20;

    // 🔹 Skills (20%)
    if (profile.skills.length > 0) score += 20;

    return Math.round(score);
  };



  const handleOnSave = async () => {
    setError("");
    setMessage("");

    const { basicInfo, experience, preferences, skills } = profileData;

    if (!basicInfo.name) return setError("Name is required");
    if (!basicInfo.email) return setError("Email is required");
    if (!basicInfo.mobile) return setError("Mobile number is required");
    if (!basicInfo.college) return setError("College is required");
    if (!basicInfo.location) return setError("Location is required");
    if (experience.years === null) return setError("Experience is required");
    if (!preferences.role) return setError("Role is required");
    if (!preferences.teamSize) return setError("Team size is required");
    if (!preferences.mode) return setError("Hackathon mode is required");
    if (skills.length === 0) return setError("Add at least one skill");

    try {
      const res = await saveProfile(profileData);
      if (res.data?.success) {
        setMessage("Profile saved successfully");
      }
    } catch (e) {
      console.error(e);
      setError("Failed to save profile");
    }
  };


  return (
    <div className="bg-gray-100 min-h-screen pt-10">
      <div className="m-8 p-6 flex flex-col gap-6">

        <ProfileHeader completion={completion} />

        {error && (
          <p className="text-red-500 font-semibold">{error}</p>
        )}

        <div className="grid md:grid-cols-2 gap-6">

          <BasicInfoCard
            data={profileData.basicInfo}
            emailLocked={emailLocked}
            onChange={(data) =>
              setProfileData(prev => ({
                ...prev,
                basicInfo: data
              }))
            }
          />

          <SkillsExpertiseCard
            data={profileData.skills}
            onChange={(skills) =>
              setProfileData(prev => ({
                ...prev,
                skills
              }))
            }
          />


          <ExperienceCard
            data={profileData.experience}
            onChange={(data) =>
              setProfileData(prev => ({
                ...prev,
                experience: data
              }))
            }
          />

          <PreferencesCard
            data={profileData.preferences}
            onChange={(data) =>
              setProfileData(prev => ({
                ...prev,
                preferences: data
              }))
            }
          />

        </div>
        {message && <p className='text-green-500 text-sm'>{message}</p>}
        {error && <p className='text-red-500 text-sm'>{error}</p>}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleOnSave}
            className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProfileSetup;
