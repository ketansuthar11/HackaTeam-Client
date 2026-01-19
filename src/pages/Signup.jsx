import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import { IoIosLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';
import { IoPerson } from "react-icons/io5";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';
import FormInput from '../component/FormInput';
import Navbar from '../component/Navbar';
function Signup() {

    const navigate = useNavigate();
    const {signup,loading,error} = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState('');
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData.password !== formData.confirmPassword){
            setPasswordMatchError("Passwords do not match");
            return;
        }
        const payload = {
            fullname: formData.fullname,
            email:formData.email,
            password: formData.password
        }

        const success = await signup(payload);
        if(success){
            navigate('/dashboard',{replace:true} );
        }
        setPasswordMatchError('');
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });

    }
    return (
        <>
            <Navbar/>
            <section className="w-full min-h-screen bg-white flex justify-center items-center mt-20">
                <div className="w-full text-center flex flex-col items-center">
                    <h1 className="text-3xl font-bold text-blue-900">Sign Up</h1>
                    <p className="mt-4 text-indigo-400">Create your account and find your perfect <br /> hackathon team!</p>
                    <div className="w-full max-w-md p-8 mt-4 rounded-lg shadow-xl shadow-black/20 backdrop-blur-sm bg-white border border-white/20">
                        <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit}>
                            <FormInput label="Full Name" id="fullname" name="fullname" placeholder="Full Name" type="text" value={formData.fullname} onChange={handleChange} LeftIcon={IoPerson} />
                            <FormInput label="Email Address" id="email" name="email" placeholder="Email Address" type="email" value={formData.email} onChange={handleChange} LeftIcon={MdEmail} />
                            <FormInput label="Password" id="password" name="password" placeholder="Password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} LeftIcon={IoIosLock} RightIcon={showPassword ? AiOutlineEye : BiHide} onRightIconClick={()=>setShowPassword(!showPassword)}/>
                            <FormInput label="Confirm Password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" type={showConfirmPassword ? "text" : "password"} value={formData.confirmPassword} onChange={handleChange} LeftIcon={IoIosLock} RightIcon={showConfirmPassword ? AiOutlineEye : BiHide} onRightIconClick={()=>setShowConfirmPassword(!showConfirmPassword)}/>
                            <p className='text-right'><a href="#" className='text-purple-500 '> Forgot password?</a></p>
                            <button type="submit" disabled={loading} className='w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors'>
                                {loading? "Signing up..." : "Sign Up"}
                            </button>
                            <p>{(passwordMatchError|| error) && <span className="text-red-500">{passwordMatchError || error}</span>}</p>
                        </form>
                        <div className="w-full flex items-center my-6">
                            <div className="flex-grow border-t-2 border-solid border-gray-300"></div>
                            <span className="mx-4 text-sm text-gray-400">OR</span>
                            <div className="flex-grow border-t-2 border-solid border-gray-300"></div>
                        </div>

                        <button type="button" className='w-full bg-white text-gray-700 px-4 py-2 shadow- rounded-md border border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2'>
                            <FcGoogle className="text-2xl" />
                            Continue with Google
                        </button>

                        <p className='mt-4 text-gray-600'>Already have an account? <a href="/login" className='text-purple-500'>Log In</a></p>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Signup