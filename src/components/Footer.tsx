import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();

    const socialLinks = [
        { Icon: Github, href: "https://github.com/Cahyadi-Prasetyo", color: "hover:bg-[#181717]" },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/cahyadi-prasetyo-924616290/", color: "hover:bg-[#0077B5]" },
        { Icon: Instagram, href: "https://www.instagram.com/cahyadi_p24/", color: "hover:bg-[#E1306C]" }
    ];

    return (
        <footer className="px-4 pb-4 pt-12">
            <div className="max-w-6xl mx-auto bg-surface rounded-bento p-8 md:p-12 shadow-bento">
                <div className="flex flex-col md:flex-row justify-between gap-12">

                    {/* Brand */}
                    <div className="max-w-sm">
                        <Link to="/" className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center font-bold text-2xl mb-6">
                            C
                        </Link>
                        <h2 className="text-2xl font-bold mb-4">Let's build something amazing together.</h2>
                        <p className="text-secondary mb-6">
                            Open for freelance opportunities and full-time roles.
                        </p>
                        <a href="mailto:chdprasetyo@gmail.com" className="text-accent-blue font-bold hover:underline">
                            chdprasetyo@gmail.com
                        </a>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-12">
                        <div>
                            <h4 className="font-bold mb-4">Pages</h4>
                            <ul className="space-y-3 text-secondary text-sm">
                                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                                <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
                                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Connect</h4>
                            <div className="flex gap-2">
                                {socialLinks.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        className={`w-10 h-10 rounded-full bg-background flex items-center justify-center text-secondary hover:text-white transition-colors duration-300 ${social.color}`}
                                    >
                                        <social.Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary font-medium">
                    <p>© {currentYear} Cahyadi Prasetyo</p>
                    <div className="flex gap-6">
                        <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-accent-green" />
                            All Systems Normal
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
