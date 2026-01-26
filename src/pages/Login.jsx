import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import { IoIosLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';
import FormInput from '../component/FormInput';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const { login, loading, error } = useAuth();

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        const success = await login(formData);
        if (success) {
            navigate('/dashboard', { replace: true });
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };
    return (
        <>
            <Navbar />
            <section className="w-full min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-400 flex justify-center items-center mt-10">
                <div className="w-full text-center flex flex-col items-center">
                    <h1 className="text-3xl font-bold text-white">Log In</h1>
                    <p className="mt-4 text-indigo-100">Welcome back! Please log in to your account.</p>
                    <div className="w-full max-w-md p-8 mt-4 rounded-lg shadow-lg backdrop-blur-sm bg-white border border-white/20">
                        <form onSubmit={handleLogin} className='w-full flex flex-col gap-4'>
                            <FormInput label="Email Address" id="email" name="email" placeholder="Email Address" type="email" value={formData.email} onChange={handleChange} LeftIcon={MdEmail} />
                            <FormInput label="Password" id="password" name="password" placeholder="Password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} LeftIcon={IoIosLock} RightIcon={showPassword ? AiOutlineEye : BiHide} onRightIconClick={() => setShowPassword(!showPassword)} />
                            <p className='text-right'><a href="#" className='text-purple-500 '> Forgot password?</a></p>
                            <button
                                type="submit"
                                className='w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors'
                                onClick={handleLogin}
                                disabled={loading}
                            >
                                {loading ? "Logging in..." : "Log In"}
                            </button>
                        </form>
                        {error && (
                            <p className="text-red-500 text-sm text-center mt-2">
                                {error}
                            </p>
                        )}

                        <div className="w-full flex items-center my-6">
                            <div className="flex-grow border-t-2 border-solid border-gray-300"></div>
                            <span className="mx-4 text-sm text-gray-400">OR</span>
                            <div className="flex-grow border-t-2 border-solid border-gray-300"></div>
                        </div>

                        <button
                            type="button"
                            className='w-full bg-white text-gray-700 px-4 py-2 shadow- rounded-md border border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2'
                        >
                            <FcGoogle className="text-2xl" />
                            Continue with Google
                        </button>

                        <p className='mt-4 text-gray-600'>Don't have an account? <a href="/signup" className='text-purple-500'>Sign Up</a></p>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Login