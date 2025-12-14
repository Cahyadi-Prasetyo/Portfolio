import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Globe, Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import TextType from '../components/reactbits/TextType';
import FAQ from '../components/FAQ';
import { useLanguage } from '../context/LanguageContext';
import {
    SiPhp, SiLaravel, SiCodeigniter, SiMysql, SiPostgresql,
    SiJavascript, SiTypescript, SiTailwindcss, SiReact, SiDocker
} from 'react-icons/si';

export default function Home() {
    const { t } = useLanguage();

    const featuredProjectIds = [1, 4, 6, 8];
    const projects = t.projectsList.filter((p: any) => featuredProjectIds.includes(p.id));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    // Brand Color Mapping
    const techStack = [
        { Icon: SiReact, color: "hover:text-[#61DAFB]" },
        { Icon: SiLaravel, color: "hover:text-[#FF2D20]" },
        { Icon: SiTypescript, color: "hover:text-[#3178C6]" },
        { Icon: SiPostgresql, color: "hover:text-[#336791]" },
        { Icon: SiTailwindcss, color: "hover:text-[#38B2AC]" },
        { Icon: SiDocker, color: "hover:text-[#2496ED]" }
    ];

    const socialLinks = [
        { Icon: Github, href: "https://github.com/Cahyadi-Prasetyo", color: "hover:bg-[#181717]" },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/cahyadi-prasetyo-924616290/", color: "hover:bg-[#0077B5]" },
        { Icon: Instagram, href: "https://www.instagram.com/cahyadi_p24/", color: "hover:bg-[#E1306C]" }
    ];

    return (
        <div className="bg-background min-h-screen text-primary selection:bg-accent-blue selection:text-white pb-20">

            {/* HERO BENTO GRID */}
            <section className="pt-32 px-4 md:px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[600px]"
                >

                    {/* 1. MAIN INTRO (Span 2x2) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 md:row-span-2 bg-surface rounded-bento p-8 flex flex-col justify-between shadow-bento hover:shadow-bento-hover transition-shadow duration-300 relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center text-accent-orange mb-6">
                                <span className="animate-wave text-2xl">👋</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                                I'm <span className="text-accent-blue">Cahyadi.</span>
                            </h1>
                            <TextType
                                text={t.hero.taglines}
                                typingSpeed={50}
                                className="text-secondary font-medium text-lg h-8"
                                cursorClassName="bg-accent-blue w-0.5 h-6 ml-1"
                            />
                        </div>
                        <div className="relative z-10 pt-8">
                            Fullstack Developer crafting clean, user-centric web experiences with modern architecture.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform hover:bg-accent-blue">
                            {t.hero.contactMe} <Mail size={16} />
                        </Link>
                    </div>
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                </motion.div>

                {/* 2. PHOTO (Span 1x2) */}
                <motion.div
                    variants={itemVariants}
                    className="md:col-span-1 md:row-span-2 bg-surface rounded-bento overflow-hidden shadow-bento relative group"
                >
                    <img
                        src="/assets/my-self.png"
                        alt="Profile"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-primary shadow-sm whitespace-nowrap">
                        Fullstack Dev
                    </div>
                </motion.div>

                {/* 3. MAP / LOCATION (Span 1x1) */}
                <motion.div
                    variants={itemVariants}
                    className="md:col-span-1 bg-surface rounded-bento p-6 flex flex-col items-center justify-center text-center shadow-bento relative overflow-hidden group"
                >
                    {/* Map Pattern Background */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]" />

                    <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <MapPin size={32} className="text-primary group-hover:text-red-500 transition-colors duration-300" />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                    </div>
                    <div className="relative z-10">
                        <h3 className="font-bold text-sm text-secondary uppercase tracking-wider mb-1">Based in</h3>
                        <p className="text-primary font-bold">Kepulauan Riau</p>
                        <p className="text-xs text-secondary mt-1 font-mono bg-gray-100 px-2 py-0.5 rounded-full inline-block">ID (GMT+7)</p>
                    </div>
                </motion.div>

                {/* 4. SOCIALS GRID (Span 1x1) */}
                <motion.div
                    variants={itemVariants}
                    className="md:col-span-1 bg-surface rounded-bento p-6 shadow-bento flex flex-col justify-center"
                >
                    <h3 className="text-xs font-bold uppercase text-secondary mb-4 tracking-wider text-center">Connect</h3>
                    <div className="flex justify-center gap-3">
                        {socialLinks.map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary transition-all duration-300 hover:text-white ${social.color}`}
                            >
                                <social.Icon size={18} />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* 5. TECH STACK (Span 2x1) */}
                <motion.div
                    variants={itemVariants}
                    className="md:col-span-2 bg-black text-white rounded-bento p-6 flex items-center justify-between shadow-bento overflow-hidden relative group"
                >
                    <div className="relative z-10">
                        <h3 className="font-bold text-xl mb-1">Tech Arsenal</h3>
                        <p className="text-gray-400 text-sm">Tools I use daily</p>
                    </div>
                    <div className="flex gap-4 relative z-10">
                        {techStack.map((item, i) => (
                            <item.Icon
                                key={i}
                                size={24}
                                className={`text-gray-500 transition-colors duration-300 ${item.color} transform hover:scale-110`}
                            />
                        ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* 6. STATUS (Span 1x1) */}
                <motion.div
                    variants={itemVariants}
                    className="md:col-span-1 bg-accent-green/10 rounded-bento p-6 flex flex-col items-center justify-center text-center shadow-bento border border-accent-green/20"
                >
                    <div className="relative w-3 h-3 mb-3">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75 animate-ping"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green"></span>
                    </div>
                    <h3 className="font-bold text-accent-green text-sm">{t.hero.available}</h3>
                </motion.div>

                {/* 7. MORE (Span 1x1) */}
                <motion.div
                    variants={itemVariants}
                    className="md:col-span-1 bg-surface rounded-bento p-6 flex flex-col items-center justify-center text-center shadow-bento hover:scale-95 transition-transform cursor-pointer hover:bg-gray-50"
                >
                    <Link to="/about" className="flex flex-col items-center gap-2 w-full h-full justify-center">
                        <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
                            <ArrowUpRight size={20} />
                        </div>
                        <span className="font-bold text-sm text-primary">More About Me</span>
                    </Link>
                </motion.div>

            </motion.div>
        </section>

            {/* PROJECTS BENTO */ }
    <section className="py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8 px-2">
                <h2 className="text-3xl font-bold">Selected Works</h2>
                <Link to="/projects" className="bg-surface px-4 py-2 rounded-full text-sm font-bold shadow-sm hover:bg-gray-50 text-secondary hover:text-primary transition-colors">
                    View All Projects
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project: any, index: number) => (
                    <Link
                        to={`/projects/${project.slug}`}
                        key={index}
                        className="bg-surface rounded-bento p-2 shadow-bento hover:shadow-bento-hover transition-all duration-300 group hover:-translate-y-1"
                    >
                        <div className="aspect-video rounded-3xl overflow-hidden mb-4 relative">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                        <div className="px-4 pb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-accent-blue" />
                                <span className="text-xs font-bold uppercase text-secondary tracking-wide">{project.category}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-accent-blue transition-colors">{project.title}</h3>
                            <p className="text-secondary text-sm line-clamp-2">{project.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </section>

    {/* FAQ - Bento Style */ }
    <section className="py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-surface rounded-bento p-8 md:p-12 shadow-bento">
            <FAQ />
        </div>
    </section>

        </div >
    );
}
