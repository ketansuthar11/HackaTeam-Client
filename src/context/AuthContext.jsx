import { createContext, useContext, useEffect, useState } from "react";
import { loginUser,signupUser } from "../services/api";
const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if(token){
            // In real application, verify token and fetch user data
            setUser(user);
        }
        setLoading(false);
    },[]);

    const signup = async (userData)=>{
        try{
            setLoading(true);
            setError(null);
            const res = await signupUser(userData);
            return res.success;
        }
        catch(err){
            setError(err.response?.data?.message || 'Signup failed');
            return false;
        }
        finally{
            setLoading(false);
        }
    }

    const login = async (credientials)=>{
        try{
            setLoading(true);
            setError(null);
            const res = await loginUser(credientials);
            localStorage.setItem('token',res.data.token);
            localStorage.setItem('user',res.data.user.fullname);
            setUser(res.data.user.fullname);
            return true;
        }
        catch(err){
            setError(err.response?.data?.message || 'Login failed');
            return false;
        }
        finally{
            setLoading(false);
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
    };
    return(
        <AuthContext.Provider value={{user,loading,error,login,signup,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
  return useContext(AuthContext);
};
