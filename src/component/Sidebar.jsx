import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5"
import { AiOutlineTeam } from "react-icons/ai"
import { RiTeamLine } from "react-icons/ri"
import { FaRegMessage } from "react-icons/fa6"
import { RxPerson } from "react-icons/rx"
import { BiLogOut } from "react-icons/bi"
import { useAuth } from '../context/AuthContext'

function Sidebar() {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    const sidebarItemClass = ({ isActive }) =>
        `font-semibold mb-2 flex items-center rounded-lg px-4 py-2 transition
     ${isActive ? "bg-gray-400 text-gray-700" : "text-blue-900 hover:bg-gray-300"}`

    const buttonClass =
        "font-semibold mb-2 flex items-center rounded-lg px-4 py-2 transition text-blue-900 hover:bg-gray-300 w-full text-left"

    return (
        <aside className="hidden md:flex fixed left-0 top-16 h-full bg-gray-200 p-4">
            <div className="w-64 h-full bg-gray-200 mt-4">
                <ul>
                    <li>
                        <NavLink to="/dashboard" className={sidebarItemClass}>
                            <IoHomeOutline className="mr-2" />
                            Dashboard
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/find-teammates" className={sidebarItemClass}>
                            <AiOutlineTeam className="mr-2" />
                            Find Teammates
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/my-team" className={sidebarItemClass}>
                            <RiTeamLine className="mr-2" />
                            My Team
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/messages" className={sidebarItemClass}>
                            <FaRegMessage className="mr-2" />
                            Messages
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/profile" className={sidebarItemClass}>
                            <RxPerson className="mr-2" />
                            Profile
                        </NavLink>
                    </li>

                    <li>
                        <button onClick={handleLogout} className={buttonClass}>
                            <BiLogOut className="mr-2" />
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar
