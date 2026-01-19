import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import DashboardLayout from './layout/DashboardLayout'
import Dashboard from './pages/Dashboard'
import ProfileSetup from './pages/ProfileSetup'
import { useAuth } from './context/AuthContext'
import FindTeammates from './pages/FindTeammates'

const PublicRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? <Navigate to="/dashboard" /> : children
}

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth()
    return user ? children : <Navigate to="/login" />
}

function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PublicRoute>
                        <Landing />
                    </PublicRoute>
                }
            />

            <Route path="/login" element={<PublicRoute>
                <Login />
            </PublicRoute>} />
            <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <DashboardLayout />
                    </ProtectedRoute>
                }
            >
                <Route index element={<Dashboard />} />
                <Route path="find-teammates" element={<FindTeammates/>} />
                <Route path="my-team" element={<div>My Team</div>} />
                <Route path="messages" element={<div>Messages</div>} />
                <Route path="profile" element={<ProfileSetup />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
