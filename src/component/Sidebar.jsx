import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5"
import { AiOutlineTeam } from "react-icons/ai"
import { RiTeamLine } from "react-icons/ri"
import { FaRegMessage } from "react-icons/fa6"
import { RxPerson } from "react-icons/rx"
import { BiLogOut } from "react-icons/bi"
import { useAuth } from '../context/AuthContext'

function Sidebar({ isSidebarOpen,setIsSidebarOpen}) {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }
    const handleNavClick = () => {
        setIsSidebarOpen(false);
    };


    const sidebarItemClass = ({ isActive }) =>
        `mb-1 flex items-center w-full rounded-lg px-4 py-2 transition
        ${isActive
            ? "bg-blue-100 text-blue-800 font-semibold"
            : "text-gray-700 hover:bg-gray-200"
        }`


    const buttonClass =
        "font-semibold mb-2 flex items-center rounded-lg px-4 py-2 transition text-blue-900 hover:bg-gray-300 w-full text-left"

    return (
        <aside
            className={`
                fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64
                bg-gray-200 p-4
                transform transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0
            `}
        >

            <div className="w-full h-full mt-4">
                <ul>
                    <li>
                        <NavLink to="/dashboard" className={sidebarItemClass} onClick={handleNavClick}>
                            <IoHomeOutline className="mr-2" />
                            Dashboard
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/find-teammates" className={sidebarItemClass} onClick={handleNavClick}>
                            <AiOutlineTeam className="mr-2" />
                            Find Teammates
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/my-team" className={sidebarItemClass} onClick={handleNavClick}>
                            <RiTeamLine className="mr-2" />
                            My Team
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/messages" className={sidebarItemClass} onClick={handleNavClick}>
                            <FaRegMessage className="mr-2" />
                            Messages
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/profile" className={sidebarItemClass} onClick={handleNavClick}>
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
