import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";

function SkillsExpertiseCard({ data, onChange }) {

    const [open, setOpen] = useState(false);
    const [expertise, setExpertise] = useState('Select Proficiency');
    const [skillName, setSkillName] = useState('');
    const [fieldError, setFieldError] = useState('');

    const handleAddSkill = () => {
        if (!skillName) {
            setFieldError("Skill is required");
            return;
        }
        if (expertise === 'Select Proficiency') {
            setFieldError("Please select proficiency");
            return;
        }

        onChange([
            ...data,
            { name: skillName, expertise }
        ]);

        setFieldError('');
        setSkillName('');
        setExpertise('Select Proficiency');
    };

    const handleRemoveSkill = (index) => {
        onChange(data.filter((_, i) => i !== index));
    };

    return (
        <div className="rounded-lg bg-white shadow-md p-6">
            <h1 className="text-xl font-semibold">Skills & Expertise</h1>
            <p className="text-gray-400">Tell us what you're good at</p>

            <label className="block text-gray-700 font-semibold mt-2 mb-1">
                Skills
            </label>

            <div className="flex gap-2 mb-2">
                <input
                    type="text"
                    value={skillName}
                    onChange={(e) => setSkillName(e.target.value)}
                    placeholder="Enter your skills"
                    className="w-full border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="relative w-full">
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                    >
                        {expertise}
                    </button>

                    {open && (
                        <div className="absolute left-0 mt-2 w-full border border-gray-300 rounded-lg bg-white shadow-lg z-10">
                            {["Beginner", "Intermediate", "Expert"].map(level => (
                                <div
                                    key={level}
                                    onClick={() => {
                                        setExpertise(level);
                                        setOpen(false);
                                    }}
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {level}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <button
                    type="button"
                    onClick={handleAddSkill}
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                >
                    Add
                </button>
            </div>

            {fieldError && (
                <p className="text-red-500 text-sm">{fieldError}</p>
            )}

            {/* SKILLS LIST */}
            <div className="mt-2">
                {data.map((skill, index) => (
                    <div
                        key={index}
                        className="inline-flex items-center gap-2 mr-2 mb-2 px-3 py-1 border rounded-lg"
                    >
                        <span className="text-sm">
                            {skill.name} ({skill.expertise})
                        </span>

                        <button
                            type="button"
                            onClick={() => handleRemoveSkill(index)}
                            className="text-gray-400 hover:text-red-500"
                        >
                            <RxCross2 />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsExpertiseCard;
