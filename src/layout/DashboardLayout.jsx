import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const DashboardLayout = () => {
    const { user } = useAuth();
    return (
        <>
            <Navbar />
            <div className="flex">
                {user &&<Sidebar />}
                <main className="flex-1 ml-0 md:ml-64 ">
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default DashboardLayout;