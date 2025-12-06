import { Github, Linkedin, Mail, Instagram, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();

    const navLinks = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.projects, path: '/projects' },
        { name: t.nav.about, path: '/about' },
        { name: t.nav.contact, path: '/contact' },
    ];

    return (
        <footer className="bg-black text-white pt-24 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* CTA Section */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-8 whitespace-pre-line"
                    >
                        {t.footer.cta}
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold border-b-2 border-white pb-2 hover:text-gray-300 hover:border-gray-300 transition-colors"
                        >
                            {t.footer.letsChat} <ArrowUpRight size={24} />
                        </Link>
                    </motion.div>
                </div>

                {/* Footer Content */}
                <div className="grid md:grid-cols-3 gap-12 py-12 border-t border-white/20">
                    {/* Left: Branding */}
                    <div>
                        <h3 className="text-2xl font-bold font-display mb-4">Cahyadi Prasetyo</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {t.footer.description}
                        </p>
                    </div>

                    {/* Center: Navigation */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{t.footer.navigation}</h4>
                        <nav className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link key={link.path} to={link.path} className="text-white hover:text-gray-300 transition-colors">
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Right: Social */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{t.footer.connect}</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Cahyadi-Prasetyo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/cahyadi-prasetyo-924616290/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/cahyadi_p24/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="mailto:chdprasetyo@gmail.com"
                                className="p-3 bg-white/5 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom: Copyright */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        {t.footer.coding} Cahyadi Prasetyo © {currentYear}
                    </p>
                </div>
            </div>
        </footer>
    );
}
