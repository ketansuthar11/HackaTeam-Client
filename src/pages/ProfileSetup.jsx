import React, { useEffect, useState } from 'react'
import ProfileHeader from '../component/ProfileHeader'
import BasicInfoCard from '../component/Cards/BasicInfoCard'
import SkillsExpertiseCard from '../component/Cards/SkillsExpertiseCard'
import ExperienceCard from '../component/Cards/ExperienceCard'
import PreferencesCard from '../component/Cards/PreferencesCard'
import { getProfile, saveProfile } from '../services/profile.api'
import Loading from '../component/Loading'

function ProfileSetup() {
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [completion, setCompletion] = useState(0)
  const [emailLocked, setEmailLocked] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [loading, setLoading] = useState(false)

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

          if (res.data.data.basicInfo?.email) {
            setEmailLocked(true)
          }
        }
      } catch (err) {
        console.error("GET PROFILE ERROR:", err)
      }
      finally{
        setLoading(false);
      }
    }

    fetchProfile()
  }, [])

  // 🔹 Calculate completion %
  useEffect(() => {
    setCompletion(calculateCompletion(profileData))
  }, [profileData])

  // 🔹 Auto-hide messages after 3 seconds
  useEffect(() => {
    if (message || error) {
      const timer = setTimeout(() => {
        setMessage("")
        setError("")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [message, error])

  const calculateCompletion = (profile) => {
    let score = 0

    // Basic Info (40%)
    const basicFields = ["name", "email", "mobile", "college", "location"]
    const filledBasic = basicFields.filter(
      key => profile.basicInfo[key]
    ).length
    score += (filledBasic / basicFields.length) * 40

    // Experience (20%)
    if (profile.experience.years !== null && profile.experience.years !== "")
      score += 10
    if (profile.experience.pastHackathons || profile.experience.githubLink)
      score += 10

    // Preferences (20%)
    const prefFields = ["role", "teamSize", "mode"]
    const filledPrefs = prefFields.filter(
      key => profile.preferences[key]
    ).length
    score += (filledPrefs / prefFields.length) * 20

    // Skills (20%)
    if (profile.skills.length > 0) score += 20

    return Math.round(score)
  }

  // 🔹 Save profile
  const handleOnSave = async () => {
    setError("")
    setMessage("")
    setIsSaving(true)
    console.log("SAVE CLICKED:", profileData)

    const { basicInfo, experience, preferences, skills } = profileData

    if (!basicInfo.name) {
      setIsSaving(false)
      return setError("Name is required")
    }
    if (!basicInfo.email) {
      setIsSaving(false)
      return setError("Email is required")
    }
    if (!basicInfo.mobile) {
      setIsSaving(false)
      return setError("Mobile number is required")
    }
    if (!basicInfo.college) {
      setIsSaving(false)
      return setError("College is required")
    }
    if (!basicInfo.location) {
      setIsSaving(false)
      return setError("Location is required")
    }
    if (experience.years === null) {
      setIsSaving(false)
      return setError("Experience is required")
    }
    if (!preferences.role) {
      setIsSaving(false)
      return setError("Role is required")
    }
    if (!preferences.teamSize) {
      setIsSaving(false)
      return setError("Team size is required")
    }
    if (!preferences.mode) {
      setIsSaving(false)
      return setError("Hackathon mode is required")
    }
    if (skills.length === 0) {
      setIsSaving(false)
      return setError("Add at least one skill")
    }

    try {
      const res = await saveProfile(profileData)
      console.log("SAVE RESPONSE:", res.data)

      if (res.data?.success) {  
        setMessage("Profile saved successfully! ✓")
      }
    } catch (e) {
      console.error("SAVE PROFILE ERROR:", e?.response?.data || e)
      setError(e?.response?.data?.message || "Failed to save profile")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {loading?<Loading/>:(
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 mt-16">
        <ProfileHeader completion={completion} />


        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
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

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg animate-pulse">
              <p className="text-red-600 font-semibold">{error}</p>
            </div>
          )}
          {message && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg animate-pulse">
              <p className="text-green-600 font-semibold">{message}</p>
            </div>
          )}
        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={handleOnSave}
            disabled={isSaving}
            className={`
              w-full sm:w-auto px-8 py-3 rounded-lg font-semibold shadow-md
              transition-all duration-200
              ${isSaving
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg'
              }
              text-white
            `}
            >
            {isSaving ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
                Saving...
              </span>
            ) : (
              'Save Changes'
            )}
          </button>
        </div>
      </div>)}
    </div>
  )
}

export default ProfileSetup