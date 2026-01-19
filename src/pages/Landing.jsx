import React from "react";
import Navbar from "../component/Navbar";
import logo from "../assets/team.svg";
import Card from "../component/Card";
import brain from "../images/brain.png"
import settings from "../images/setting.png"
import location from "../images/location.png"
import profile from "../images/profile.png"
import team from "../images/team.png"
import teamwork from "../images/teamwork.png"
import user1 from "../images/user1.avif"
import user2 from "../images/user2.avif"
import user3 from "../images/user3.avif"
import HowItWorksCard from "../component/Cards/HowItWorksCard";
import UserReviewCard from "../component/Cards/UserReviewCard";
import Footer from "../component/Footer";
export default function Landing() {
    let features = [
        {
            img: brain, heading: "Smart Matching", paragraph: "Find teammates based on skills, experience, and location."
        },
        {
            img: settings, heading: "Location Based", paragraph: "Connect with students near you for in-person hackathons."
        },
        {
            img: location, heading: "Skill Compitability", paragraph: "Get matched with complementary skill sets."
        }
    ];
    let working = [
        {
            img: profile, heading: "Create Your Profile", paragraph: "Add your skills, experience, and preferences."
        },
        {
            img: team, heading: "Get Matches", paragraph: "View and connect with suggested teammates."
        },
        {
            img: teamwork, heading: "Join a Team", paragraph: "Build your team and join hackathons."
        }
    ];
    let users = [
        {
            img:user1,
            heading: "John Doe",
            bio: "Full Stack Developer",
            paragraph: "Found an amazing team for my last hackathon!"
        },
        {
            img: user2,
            heading: "Jane Smith",
            bio: "UI/UX Designer",
            paragraph: "Great platform! helped me find talented partners."
        },
        {
            img: user3,
            heading: "Mike Johnson",
            bio: "Data Scientist",
            paragraph: "Easy to use and very effective. Highly recommend!"
        }
    ];
    return (
        <div>
            <Navbar />
            <section id="home" className="relative w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-400 mt-12 min-h-screen scroll-mt-24">
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
                        <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="#ffffff" />
                    </svg>
                </div>
                <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
                    <div className="text-white">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Find Your Perfect <br />
                            Hackathon Partner
                        </h1>
                        <p className="mt-5 text-lg text-indigo-100">
                            Connect with students who match your skills and goals.
                        </p>
                        <div className="mt-5 flex gap-4">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                                Get Started
                            </button>
                            <button className="border border-white text-white hover:bg-white px-6 py-3 font-medium rounded-lg hover:text-indigo-600 transition">
                                Learn More
                            </button>
                        </div>
                        <p className="mt-8 text-indigo-100 font-medium">
                            Join 5000+ Students Already Finding Teammates!
                        </p>
                        <div className="flex gap-1 mt-6">
                            <img
                                className="w-12 h-12 border-2 border-white rounded-full"
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                            />
                            <img
                                className="w-12 h-12 border-2 border-white rounded-full"
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                            />
                            <img
                                className="w-12 h-12 border-2 border-white rounded-full"
                                src="https://randomuser.me/api/portraits/men/65.jpg"
                            />
                            <img
                                className="w-12 h-12 border-2 border-white rounded-full"
                                src="https://randomuser.me/api/portraits/women/68.jpg"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src={logo} alt="Landing Image" className="w-full max-w-md" />
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] -mb-[1px]">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto block" preserveAspectRatio="none">
                        <path d="M0,40 C480,100 960,100 1440,40 L1440,120 L0,120 Z" fill="#ffffff" />
                    </svg>
                </div>
            </section>

            <section id="key-features" className="relative w-full bg-white py-20 min-h-screen scroll-mt-24">
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] -mb-[1px]">
                    <svg
                        viewBox="0 0 1440 120"
                        className="w-full h-auto block"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#e0e7ff' }} />
                                <stop offset="50%" style={{ stopColor: '#f3e8ff' }} />
                                <stop offset="100%" style={{ stopColor: '#dbeafe' }} />
                            </linearGradient>
                        </defs>
                        <path
                            d="M0,40 C480,100 960,100 1440,40 L1440,120 L0,120 Z"
                            fill="url(#curveGradient)"
                        />
                    </svg>
                </div>
                <div className="flex justify-center">
                    <h2 className="text-3xl font-bold text-blue-900">
                        Key Features
                        <span className="block mx-auto mt-2 h-1 w-10 bg-indigo-500 rounded"></span>
                    </h2>
                </div>
                <div className="flex flex-wrap justify-center mt-4">
                    {
                        features.map((feature, index) => (
                            <Card
                                key={index}
                                img={feature.img}
                                heading={feature.heading}
                                paragraph={feature.paragraph}
                            />
                        ))
                    }
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg
                        viewBox="0 0 1440 120"
                        className="w-full h-auto"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#e0e7ff" />
                                <stop offset="50%" stopColor="#f3e8ff" />
                                <stop offset="100%" stopColor="#dbeafe" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"
                            fill="url(#curveGradient)"
                        />
                    </svg>
                </div>
            </section>


            <section id="how-it-works" className="relative w-full py-20 bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-50 min-h-screen scroll-mt-24">
                <div className="flex justify-center">
                    <h2 className="text-3xl font-bold text-blue-900">
                        How It Works
                        <span className="block mx-auto mt-2 h-1 w-10 bg-indigo-500 rounded"></span>
                    </h2>
                </div>
                <div className="flex flex-wrap items-center justify-center mt-4">
                    {
                        working.map((work, index) => (
                            <HowItWorksCard
                                key={index}
                                step={index + 1}
                                img={work.img}
                                heading={work.heading}
                                paragraph={work.paragraph}
                            />
                        ))
                    }
                </div>
            </section>

            <section id="user-review" className="relative w-full py-20 bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-50 min-h-screen scroll-mt-24">
                <div className="flex justify-center">
                    <h2 className="text-3xl font-bold text-blue-900">
                        What Our Users Say
                        <span className="block mx-auto mt-2 h-1 w-10 bg-indigo-500 rounded"></span>
                    </h2>
                </div>
                <div className="flex flex-wrap items-center justify-center mt-4">
                    {
                        users.map((user, index) => (
                            <UserReviewCard
                                key={index}
                                img={user.img}
                                heading={user.heading}
                                bio={user.bio}
                                paragraph={user.paragraph}
                            />
                        ))
                    }
                </div>
            </section>

            <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-400 text-white text-center py-16 px-6">
                <h1 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Team?</h1>
                <p className="mb-4">Sign up now and start your hackathon journey!</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Get Started Now
                </button>
            </section>
            <Footer/>
        </div>
    );
}
