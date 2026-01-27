import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
const DashboardLayout = () => {
    const { user } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <Navbar setIsSidebarOpen={setIsSidebarOpen}/>
            <div className="flex">
                {user &&<Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>}
                <main className="flex-1 ml-0 md:ml-64 ">
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default DashboardLayout;