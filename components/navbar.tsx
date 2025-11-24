'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [language, setLanguage] = useState<'id' | 'en'>('en')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '/', label: { id: 'Beranda', en: 'Home' } },
        { href: '/projects', label: { id: 'Proyek', en: 'Projects' } },
        { href: '/about', label: { id: 'Tentang', en: 'About' } },
        { href: '/contact', label: { id: 'Kontak', en: 'Contact' } },
    ]

    return (
        <>
            {/* Standard Navbar (visible when not scrolled) - NO language switcher */}
            <motion.nav
                initial={{ y: 0, opacity: 1 }}
                animate={{
                    y: scrolled ? -100 : 0,
                    opacity: scrolled ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/70 border-b border-gray-200"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
                            Cahyadi Prasetyo
                        </Link>

                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-700 hover:text-gray-900 transition-colors"
                                >
                                    {link.label[language]}
                                </Link>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Floating Toggle Button (visible when scrolled) */}
            <AnimatePresence>
                {scrolled && !isMenuOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsMenuOpen(true)}
                        className="fixed top-6 right-6 z-40 w-12 h-12 rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800 flex items-center justify-center transition-colors"
                    >
                        <Menu size={24} />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Fullscreen Menu Overlay - WITH language switcher */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 bg-gray-900 text-white overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-6 right-6 w-12 h-12 rounded-full border-2 border-white/20 hover:bg-white/10 flex items-center justify-center transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Language Toggle - Top Left */}
                        <button
                            onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                            className="absolute top-6 left-6 px-4 py-2 text-sm rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                        >
                            {language.toUpperCase()}
                        </button>

                        {/* Menu Content */}
                        <div className="flex flex-col items-center justify-center h-full space-y-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-5xl md:text-7xl font-bold hover:text-gray-300 transition-colors tracking-tight"
                                    >
                                        {link.label[language].toUpperCase()}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex space-x-6 pt-8"
                            >
                                <a
                                    href="https://github.com/Cahyadi-Prasetyo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-300 transition-colors"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/cahyadi-prasetyo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-300 transition-colors"
                                >
                                    <Linkedin size={24} />
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
