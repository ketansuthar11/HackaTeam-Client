import React from 'react'

function ExperienceCard({ data, onChange }) {

    const handleChange = (e) => {
        const { name, value } = e.target;

        onChange({
            ...data,
            [name]: name === "years" ? Number(value) : value
        });
    };

    return (
        <div className="rounded-lg p-6 bg-white shadow-md">
            <h1 className="text-xl font-semibold">Experience</h1>

            <p className="font-semibold mt-2">Years of Experience</p>
            <div className="flex items-center justify-between gap-6 mt-4">

                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="years"
                        value={0}
                        checked={data.years === 0}
                        onChange={handleChange}
                        className="accent-blue-500"
                    />
                    0–1 years
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="years"
                        value={2}
                        checked={data.years === 2}
                        onChange={handleChange}
                        className="accent-blue-500"
                    />
                    1–3 years
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="years"
                        value={3}
                        checked={data.years === 3}
                        onChange={handleChange}
                        className="accent-blue-500"
                    />
                    3+ years
                </label>

            </div>

            <div className="border-t-2 border-gray-300 mt-4"></div>

            <div className="mt-4">
                <label className="font-semibold">Past Hackathons</label>
                <input
                    type="text"
                    name="pastHackathons"
                    value={data.pastHackathons || ""}
                    onChange={handleChange}
                    placeholder="List your past hackathons (optional)"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mt-4">
                <label className="font-semibold">Projects / GitHub Link</label>
                <input
                    type="text"
                    name="githubLink"
                    value={data.githubLink || ""}
                    onChange={handleChange}
                    placeholder="Share link to show your past projects (optional)"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
}

export default ExperienceCard;
