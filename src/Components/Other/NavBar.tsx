import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { Home, Info, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';


const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className="bg-[var(--color-primary)] fixed top-0 left-0 w-[100vw] z-50 shadow-md">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-14 lg:h-17">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex">
                            <img
                                className="w-12 h-12 md:h-14 md:w-16"
                                src={logo}
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    {/* Toggle button for mobile */}
                    <div className="lg:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 text-white hover:bg-gray-800 rounded-md"
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={
                                        isMobileMenuOpen
                                            ? "M6 18L18 6M6 6l12 12" // close icon
                                            : "M4 6h16M4 12h16m-7 6h7" // hamburger
                                    }
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden lg:flex space-x-10 text-white items-center mr-10">
                        <Link
                            to="/"
                            className={` font-bold flex items-center space-x-1 hover:text-[#D2042D] ${
                                currentPath === '/' ? 'text-[#D2042D]' : 'text-white'
                            }`}
                        >
                            <Home size={16} />
                            <span>Home</span>
                        </Link>

                        <Link
                            to="/about"
                            className={`font-bold flex items-center space-x-1 hover:text-[#D2042D] ${
                                currentPath === '/about' ? 'text-[#D2042D]' : 'text-white'
                            }`}
                        >
                            <Info size={16} />
                            <span>About us</span>
                        </Link>

                        <Link
                            to="/contact"
                            className={`font-bold flex items-center space-x-1 hover:text-[#D2042D] ${
                                currentPath === '/contact' ? 'text-[#D2042D]' : 'text-white'
                            }`}
                        >
                            <Mail size={16} />
                            <span>Contact us</span>
                        </Link>

                    </div>

                </nav>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden px-4 py-6 bg-[var(--color-secondary)] text-white space-y-4 shadow-md">
                    <div className="flex flex-col space-y-4 items-center justify-center">
                        <Link to={"/"} className={`ml-2 flex items-center space-x-1 hover:text-[#D2042D]  ${
                            currentPath === '/' ? 'text-[#D2042D]' : 'text-white'
                        }`}>
                            <Home size={16}/>
                            <span>Home</span>
                        </Link>
                        <Link to={"/about"} className={`ml - 2 flex items-center space-x-1 hover:text-[#D2042D]  ${
                            currentPath === '/about' ? 'text-[#D2042D]' : 'text-white'
                        }`}>
                            <Info size={16}/>
                            <span>About Us</span>
                        </Link>
                        <Link to={"/contact"} className={`ml - 2 flex items-center space-x-1 hover:text-[#D2042D]  ${
                            currentPath === '/contact' ? 'text-[#D2042D]' : 'text-white'
                        }`}>
                            <Mail size={16}/>
                            <span>Contact Us</span>
                        </Link>
                    </div>
                </div>
            )}
        </header>

    );
};

export default NavBar;
