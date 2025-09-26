"use client"
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex items-center">
                        {/* Logo Section */}
                        <Image src="/logo_big.png" alt="Logo" width={413} height={141} className="w-full h-[50px]" />
                    </div>

                </div>

                <nav className="hidden md:flex items-center space-x-4">
                    <a
                        href="#ana-sehife"
                        className="px-4 py-2 bg-[#0168a7] text-white transition-transform transform hover:scale-105 font-bold"
                    >
                        Ana Səhifə
                    </a>
                    <a
                        href="#xidmetler"
                        className="text-[#0168a7] hover:text-white hover:bg-[#0168a7] hover:scale-105 px-4 py-2 transition-colors font-bold"
                    >
                        Xidmətlər
                    </a>
                    <a
                        href="#elaqe"
                        className="text-[#0168a7] hover:text-white hover:bg-[#0168a7] hover:scale-105 px-4 py-2 transition-colors font-bold"
                    >
                        Əlaqə
                    </a>
                    <a href="tel:+994708751147" aria-label="Phone" className="text-[#0168a7] hover:opacity-80 font-bold hidden md:block">
                        {/* Phone Icon (simple phone SVG) */}
                        📞 <span className="font-bold">+994 70 875 11 47</span>
                    </a>
                </nav>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            // X icon when menu is open
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            // Hamburger icon when menu is closed
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-4 py-2 space-y-2">
                        <a
                            href="#ana-sehife"
                            className="block px-4 py-2 bg-[#0168a7] text-white transition-colors font-bold rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Ana Səhifə
                        </a>
                        <a
                            href="#xidmetler"
                            className="block px-4 py-2 text-[#0168a7] hover:text-white hover:bg-[#0168a7] transition-colors font-bold rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Xidmətlər
                        </a>
                        <a
                            href="#elaqe"
                            className="block px-4 py-2 text-[#0168a7] hover:text-white hover:bg-[#0168a7] transition-colors font-bold rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Əlaqə
                        </a>
                        <a
                            href="tel:+994708751147"
                            className="block px-4 py-2 text-[#0168a7] hover:text-white hover:bg-[#0168a7] transition-colors font-bold rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            📞 +994 70 875 11 47
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
