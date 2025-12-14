import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Folder, User, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { language, toggleLanguage, t } = useLanguage();

    const navLinks = [
        { name: t.nav.home, path: '/', icon: Home },
        { name: t.nav.projects, path: '/projects', icon: Folder },
        { name: t.nav.about, path: '/about', icon: User },
        { name: t.nav.contact, path: '/contact', icon: Mail },
    ];

    return (
        <>
            {/* BENTO ISLAND NAVBAR */}
            <div className="fixed top-6 left-0 w-full z-[9999] px-4 flex justify-center pointer-events-none">
                <nav className="pointer-events-auto bg-white/90 backdrop-blur-xl border border-white/20 shadow-bento rounded-full p-2 flex items-center gap-1 max-w-fit">
                    
                    {/* Brand Icon */}
                    <Link to="/" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-2 hover:scale-105 transition-transform">
                        C
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`
                                    px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2
                                    ${location.pathname === link.path 
                                        ? 'bg-background text-primary' 
                                        : 'text-secondary hover:bg-background hover:text-primary'}
                                `}
                            >
                                <link.icon size={16} />
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="h-6 w-[1px] bg-border mx-2 hidden md:block" />

                    {/* Language Toggle */}
                    <button 
                        onClick={toggleLanguage}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-secondary hover:bg-background hover:text-primary transition-colors font-bold text-xs"
                    >
                        {language}
                    </button>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-background transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </nav>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, opacity: 0, scale: 0.9, y: -20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed top-24 left-4 right-4 bg-white rounded-3xl p-4 shadow-bento-hover z-[9990] md:hidden"
                    >
                        <div className="grid grid-cols-2 gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="flex flex-col items-center justify-center gap-2 bg-background p-6 rounded-2xl hover:bg-gray-100 transition-colors"
                                >
                                    <link.icon size={24} className="text-secondary" />
                                    <span className="font-bold text-sm text-primary">{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
