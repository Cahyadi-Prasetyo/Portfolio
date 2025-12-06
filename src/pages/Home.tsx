import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TextType from '../components/reactbits/TextType';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import RotatingText from '../components/reactbits/RotatingText';
import FAQ from '../components/FAQ';
import Lanyard from '../components/reactbits/Lanyard';
import {
    SiPhp, SiLaravel, SiCodeigniter, SiMysql, SiPostgresql,
    SiJavascript, SiTypescript, SiTailwindcss, SiReact, SiDocker, SiGit, SiRedis
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export default function Home() {
    // Parallax scroll effect for name
    const { scrollY } = useScroll();
    const cahyadiX = useTransform(scrollY, [0, 500], [0, -150]);
    const prasetyoX = useTransform(scrollY, [0, 500], [0, 150]);

    const projects = [
        { id: "001", name: "E-Commerce Platform", category: "Web Development", image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: "002", name: "Finance Dashboard", category: "UI/UX Design", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: "003", name: "Social Media App", category: "Mobile App", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: "004", name: "AI Portfolio", category: "Creative Dev", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ];

    return (
        <div className="bg-[#fafafa] min-h-screen relative">
            <div className="grain-overlay" />

            {/* 1. HERO SECTION (Dark Grid Editorial) */}
            <section className="min-h-screen bg-black text-white relative flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden isolate">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

                <div className="max-w-7xl mx-auto w-full z-10 relative grid lg:grid-cols-12 gap-12 items-center">
                    {/* LEFT: Typography & Info */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h1 className="text-[12vw] sm:text-[10vw] lg:text-[8vw] leading-[0.85] font-black tracking-tighter font-display uppercase flex flex-col">
                                <motion.span style={{ x: cahyadiX }} className="block">CAHYADI</motion.span>
                                <motion.span style={{ x: prasetyoX }} className="block text-gray-500">PRASETYO</motion.span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex flex-col gap-6 mt-4"
                        >
                            {/* Tech Stack Icons Row */}
                            <div className="flex flex-wrap gap-4 text-2xl md:text-3xl">
                                <SiPhp className="text-indigo-400 hover:scale-110 transition-transform cursor-pointer" title="PHP" />
                                <SiLaravel className="text-red-500 hover:scale-110 transition-transform cursor-pointer" title="Laravel" />
                                <SiCodeigniter className="text-orange-500 hover:scale-110 transition-transform cursor-pointer" title="CodeIgniter" />
                                <SiMysql className="text-blue-500 hover:scale-110 transition-transform cursor-pointer" title="MySQL" />
                                <SiPostgresql className="text-blue-400 hover:scale-110 transition-transform cursor-pointer" title="PostgreSQL" />
                                <SiJavascript className="text-yellow-400 hover:scale-110 transition-transform cursor-pointer" title="JavaScript" />
                                <SiTypescript className="text-blue-600 hover:scale-110 transition-transform cursor-pointer" title="TypeScript" />
                                <SiReact className="text-cyan-400 hover:scale-110 transition-transform cursor-pointer" title="React" />
                                <SiTailwindcss className="text-cyan-500 hover:scale-110 transition-transform cursor-pointer" title="Tailwind CSS" />
                                <SiDocker className="text-blue-500 hover:scale-110 transition-transform cursor-pointer" title="Docker" />
                                <SiGit className="text-orange-500 hover:scale-110 transition-transform cursor-pointer" title="Git" />
                                <SiRedis className="text-red-600 hover:scale-110 transition-transform cursor-pointer" title="Redis" />
                                <TbApi className="text-green-500 hover:scale-110 transition-transform cursor-pointer" title="REST API" />
                            </div>

                            {/* Animated Role with RotatingText */}
                            <div className="text-xl md:text-2xl text-gray-400 font-medium leading-tight flex flex-wrap gap-2 items-center">
                                I am a
                                <RotatingText
                                    texts={['Backend Engineer', 'Fullstack Developer', 'System Architect']}
                                    mainClassName="px-3 text-white overflow-hidden py-1 justify-center rounded-lg inline-flex"
                                    staggerFrom="last"
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-120%" }}
                                    staggerDuration={0.025}
                                    splitLevelClassName="overflow-hidden pb-0.5"
                                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                    rotationInterval={2500}
                                />
                            </div>

                            {/* Animated Tagline with TextType */}
                            <TextType
                                text={["Architecting scalable backend systems.", "Building end-to-end web solutions.", "Creating robust APIs & databases."]}
                                typingSpeed={50}
                                deletingSpeed={30}
                                pauseDuration={2000}
                                className="text-lg md:text-xl text-gray-500 h-8 md:h-10"
                                showCursor={true}
                                cursorClassName="bg-green-500 w-0.5 h-6 inline-block ml-1"
                            />

                            <div className="flex items-center gap-3 text-green-400 font-bold bg-green-900/20 w-fit px-4 py-2 rounded-full border border-green-900/50">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                Siap bantuin projectmu 🚀
                            </div>

                            <div className="flex gap-4">
                                <Link to="/contact" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center gap-2 text-lg">
                                    CONTACT SAYA <ArrowUpRight size={24} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT: Image (Actual Photo) */}
                    <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] bg-[#111] rounded-2xl overflow-hidden border border-white/10 group">
                        <img
                            src="/assets/my-self.png"
                            alt="Cahyadi Prasetyo"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-700" />
                    </div>
                </div>
            </section>

            {/* 2. WHO AM I + LANYARD */}
            <section className="py-32 px-6 overflow-hidden bg-[#fafafa] text-gray-900">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Who Am I?</h2>
                        <div className="mb-8">
                            <ScrollReveal
                                baseOpacity={0.1}
                                enableBlur={true}
                                baseRotation={3}
                                blurStrength={4}
                                textClassName="text-3xl md:text-5xl font-bold leading-tight font-display text-gray-900 text-justify"
                            >
                                A student from Raja Ali Haji Maritime University (UMRAH), Informatics Engineering, passionate about Full-Stack Development, Secure Systems, and API Engineering.
                            </ScrollReveal>
                        </div>
                        <div className="mb-12">
                            <ScrollReveal
                                baseOpacity={0.1}
                                enableBlur={true}
                                baseRotation={2}
                                blurStrength={3}
                                textClassName="text-xl text-gray-600 leading-relaxed text-justify"
                            >
                                Continuously learn and explore new technologies to create elegant and scalable web solutions. Focus on clean API design and robust system architecture.
                            </ScrollReveal>
                        </div>
                       
                    </div>

                    <div className="h-[600px] w-full relative bg-transparent flex justify-center items-center">
                        <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
                    </div>
                </div>
            </section>

            {/* 3. SELECTED PROJECTS */}
            <section className="py-20 px-6 bg-[#fafafa]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold font-display"
                        >
                            Selected<br />Projects.
                        </motion.h2>
                        <Link to="/projects" className="hidden md:flex items-center gap-2 font-bold hover:text-gray-600 transition-colors">
                            View All <ArrowUpRight size={20} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-20">
                        {projects.map((project, index) => (
                            <div key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="group cursor-pointer">
                                        <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="flex justify-between items-start border-b border-gray-200 pb-6 group-hover:border-black transition-colors duration-300">
                                            <div>
                                                <span className="text-sm font-bold text-gray-400 mb-2 block">DEV.{project.id}</span>
                                                <h3 className="text-2xl font-bold">{project.name}</h3>
                                            </div>
                                            <span className="text-gray-500 font-medium">{project.category}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link to="/projects" className="inline-flex items-center gap-2 font-bold hover:text-gray-600 transition-colors">
                            View All Projects <ArrowUpRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. FAQ SECTION */}
            <section className="py-32 px-6">
                <FAQ />
            </section>

        </div>
    );
}
