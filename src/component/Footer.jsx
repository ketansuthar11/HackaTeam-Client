import { FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 text-white">

            {/* Top row */}
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-4">

                {/* Links */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-indigo-100">
                    <a href="#" className="hover:text-white">About</a>
                    <a href="#" className="hover:text-white">FAQ</a>
                    <a href="#" className="hover:text-white">Contact</a>
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4 text-indigo-100">
                    <FaTwitter className="hover:text-white cursor-pointer" />
                    <FaFacebookF className="hover:text-white cursor-pointer" />
                    <FaGithub className="hover:text-white cursor-pointer" />
                </div>
            </div>

            {/* Bottom line */}
            <div className="border-t border-white/20 text-center text-sm py-3 text-indigo-100">
                ©{new Date().getFullYear()} Hackathon Partner Finder. All rights reserved.
            </div>

        </footer>
    );
}
