import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Magnet from './reactbits/Magnet';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { language, toggleLanguage, t } = useLanguage();

    // Pages with white background - navbar should be dark/black text
    const whiteBackgroundPages = ['/projects', '/about', '/contact'];
    const isWhitePage = whiteBackgroundPages.includes(location.pathname);

    // Scroll detection to toggle between standard nav and floating button
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.projects, path: '/projects' },
        { name: t.nav.about, path: '/about' },
        { name: t.nav.contact, path: '/contact' },
    ];

    return (
        <>
            {/* 1. STANDARD NAVBAR (Visible only at top) */}
            <AnimatePresence>
                {!isScrolled && !isOpen && (
                    <motion.nav
                        initial={false}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 w-full z-[99990] py-8 px-6"
                    >
                        <div className="max-w-7xl mx-auto flex justify-end md:justify-center items-center">

                            {/* Desktop Menu */}
                            <div className="hidden md:flex gap-12">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`group text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 relative ${isWhitePage ? 'text-black' : 'text-white'
                                            }`}
                                    >
                                        {link.name}
                                        {/* Underline - visible on active OR hover */}
                                        <span
                                            className={`absolute -bottom-2 left-0 h-[1px] transition-all duration-300 ${isWhitePage ? 'bg-black' : 'bg-white'
                                                } ${location.pathname === link.path
                                                    ? 'w-full'
                                                    : 'w-0 group-hover:w-full'
                                                }`}
                                        />
                                    </Link>
                                ))}
                            </div>

                            {/* Mobile Standard Toggle */}
                            <button
                                className={`md:hidden ${isWhitePage ? 'text-black' : 'text-white'}`}
                                onClick={() => setIsOpen(true)}
                            >
                                <Menu />
                            </button>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* 2. FLOATING HAMBURGER BUTTON (Visible when scrolled) */}
            <AnimatePresence>
                {(isScrolled || isOpen) && (
                    <motion.div
                        initial={{ scale: 0, rotate: 90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 90 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed top-8 right-8 z-[100000]"
                    >
                        <Magnet padding={50} disabled={false} magnetStrength={3}>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`group p-6 rounded-full shadow-lg border border-black/10 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 ${isOpen ? 'bg-white text-black' : 'bg-white text-black hover:bg-black hover:text-white'
                                    }`}
                            >
                                <span className="sr-only">Toggle Menu</span>
                                <motion.div
                                    animate={{ rotate: isOpen ? 45 : 0 }}
                                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex flex-col items-end gap-2.5 w-10"
                                >
                                    <span className="block h-1 w-full bg-current transition-all duration-300 rounded-full" />
                                    <span className="block h-1 w-3/4 bg-current transition-all duration-300 group-hover:w-full rounded-full" />
                                    <span className="block h-1 w-1/2 bg-current transition-all duration-300 group-hover:w-full rounded-full" />
                                </motion.div>
                            </button>
                        </Magnet>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 3. FULLSCREEN OVERLAY MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
                        className="fixed inset-0 h-screen w-screen bg-black z-[99999] flex flex-col justify-center items-center text-white isolate"
                    >
                        {/* Language Switcher */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute top-8 left-8 md:top-12 md:left-12"
                        >
                            <button
                                onClick={toggleLanguage}
                                className="group relative overflow-hidden pb-1"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.span
                                        key={language}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                        className="block text-xl font-medium font-display text-white tracking-wide"
                                    >
                                        {language}
                                    </motion.span>
                                </AnimatePresence>
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
                            </button>
                        </motion.div>

                        {/* Navigation Links */}
                        <div className="flex flex-col gap-6 md:gap-8 text-center bg-transparent z-10 w-full">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-5xl md:text-7xl font-black font-display tracking-tighter hover:text-gray-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
