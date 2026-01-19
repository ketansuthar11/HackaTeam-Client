import React from 'react'

function PreferencesCard({ data, onChange }) {

    const selected =
        "w-full bg-blue-500 text-white px-4 py-2 rounded-lg border border-gray-200";
    const unselected =
        "w-full px-4 py-2 bg-blue-100 rounded-lg border border-gray-200";

    const handleChange = (name, value) => {
        onChange({
            ...data,
            [name]: value
        });
    };

    return (
        <div className="rounded-lg p-6 bg-white shadow-md">
            <h1 className="text-xl font-semibold">Preferences</h1>

            {/* ROLE */}
            <p className="font-semibold mt-2">Preferred Role in Team</p>
            <input
                type="text"
                value={data.role || ""}
                placeholder="Enter preferred role"
                onChange={(e) => handleChange("role", e.target.value)}
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* TEAM SIZE */}
            <div className="mt-4">
                <label className="font-semibold">Team Size Preference</label>
                <div className="flex justify-around gap-4 border border-gray-300 p-1 rounded-lg items-center mt-2">

                    <button
                        type="button"
                        className={data.teamSize === 2 ? selected : unselected}
                        onClick={() => handleChange("teamSize", 2)}
                    >
                        2–3
                    </button>

                    <button
                        type="button"
                        className={data.teamSize === 4 ? selected : unselected}
                        onClick={() => handleChange("teamSize", 4)}
                    >
                        4–5
                    </button>

                    <button
                        type="button"
                        className={data.teamSize === 6 ? selected : unselected}
                        onClick={() => handleChange("teamSize", 6)}
                    >
                        6+
                    </button>

                </div>
            </div>

            {/* MODE */}
            <div className="mt-4">
                <label className="font-semibold">Hackathon Mode</label>
                <div className="flex justify-around gap-4 border border-gray-300 p-1 rounded-lg items-center mt-2">

                    <button
                        type="button"
                        className={data.mode === "online" ? selected : unselected}
                        onClick={() => handleChange("mode", "online")}
                    >
                        Online
                    </button>

                    <button
                        type="button"
                        className={data.mode === "offline" ? selected : unselected}
                        onClick={() => handleChange("mode", "offline")}
                    >
                        Offline
                    </button>

                    <button
                        type="button"
                        className={data.mode === "both" ? selected : unselected}
                        onClick={() => handleChange("mode", "both")}
                    >
                        Both
                    </button>

                </div>
            </div>
        </div>
    );
}

export default PreferencesCard;
