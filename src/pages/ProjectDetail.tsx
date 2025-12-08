import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Globe } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
    SiPhp, SiLaravel, SiCodeigniter, SiMysql, SiPostgresql,
    SiJavascript, SiTypescript, SiTailwindcss, SiReact, SiDocker, SiGit, SiRedis,
    SiBootstrap, SiNodedotjs, SiExpress, SiSocketdotio, SiFlutter, SiFirebase,
    SiGooglemaps, SiVuedotjs, SiNextdotjs, SiNginx, SiArduino, SiJquery, SiLeaflet
} from 'react-icons/si';

// Helper to map tech strings to icons
const TechIcon = ({ name }: { name: string }) => {
    const iconMap: { [key: string]: any } = {
        'PHP': SiPhp,
        'Laravel': SiLaravel,
        'CodeIgniter': SiCodeigniter,
        'MySQL': SiMysql,
        'PostgreSQL': SiPostgresql,
        'JavaScript': SiJavascript,
        'Javascript': SiJavascript, // Handle case
        'TypeScript': SiTypescript,
        'Typescript': SiTypescript, // Handle case
        'Tailwind CSS': SiTailwindcss,
        'TailwindCSS': SiTailwindcss, // Handle case
        'TailwindCss': SiTailwindcss, // Handle case
        'React': SiReact,
        'Next.js': SiNextdotjs,
        'Docker': SiDocker,
        'Git': SiGit,
        'Redis': SiRedis,
        'Bootstrap': SiBootstrap,
        'Node.js': SiNodedotjs,
        'Express': SiExpress,
        'Socket.io': SiSocketdotio,
        'WebSocket': SiSocketdotio, // Use Socket.io as generic websocket icon
        'Flutter': SiFlutter,
        'Firebase': SiFirebase,
        'Nginx': SiNginx,
        'Arduino': SiArduino,
        'jQuery': SiJquery,
        'Leaflet.js': SiLeaflet,
        'Google Maps API': SiGooglemaps,
        'Vue.js': SiVuedotjs,
        'Livewire': SiLaravel, // Livewire is part of TALL stack, Laravel icon fits well
        'ESP32': SiArduino, // Use Arduino/Hardware icon for ESP32
        'Chart.js': SiJavascript, // Fallback to JS
        'IoT Integration': SiArduino, // Fallback to Hardware icon
    };

    const Icon = iconMap[name] || Globe;

    // Color mapping
    const colorMap: { [key: string]: string } = {
        'Laravel': 'text-red-600',
        'Livewire': 'text-pink-600',
        'React': 'text-cyan-400',
        'Next.js': 'text-black dark:text-white', // Next.js is usually black/white
        'Vue.js': 'text-emerald-500',
        'Tailwind CSS': 'text-cyan-500',
        'TailwindCSS': 'text-cyan-500',
        'TailwindCss': 'text-cyan-500',
        'Bootstrap': 'text-purple-600',
        'MySQL': 'text-blue-500',
        'PostgreSQL': 'text-blue-400',
        'Flutter': 'text-blue-400',
        'Firebase': 'text-orange-500',
        'Redis': 'text-red-500',
        'Nginx': 'text-green-600',
        'Arduino': 'text-teal-600',
        'ESP32': 'text-teal-600',
        'Docker': 'text-blue-600',
        'TypeScript': 'text-blue-600',
        'Typescript': 'text-blue-600',
    };

    return (
        <div className="flex flex-col items-center gap-2 group">
            <div className={`p-4 bg-gray-50 rounded-xl border border-gray-200 group-hover:border-black transition-colors ${colorMap[name] || 'text-gray-700'}`}>
                <Icon size={24} />
            </div>
            <span className="text-sm font-medium text-gray-600">{name}</span>
        </div>
    );
};

export default function ProjectDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { t, language } = useLanguage();

    // Scroll to top on mount or slug change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // Find current project data
    const project = t.projectsList.find((p: any) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
                    <Link to="/projects" className="text-blue-600 hover:underline">Back to Projects</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 min-h-screen bg-white">
            {/* Unified Container */}
            <div className="relative border-t border-b border-black">
                {/* Continuous Vertical Lines */}
                <div className="absolute left-[60px] md:left-[100px] top-0 bottom-0 w-[1px] bg-black z-10" />
                <div className="absolute right-[60px] md:right-[100px] top-0 bottom-0 w-[1px] bg-black z-10" />

                <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 relative z-20">
                    <button
                        onClick={() => navigate('/projects')}
                        className="group flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium uppercase tracking-wider text-sm">
                            {language === 'ID' ? 'Kembali ke Proyek' : 'Back to Projects'}
                        </span>
                    </button>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid lg:grid-cols-2 gap-12 items-end mb-16"
                    >
                        <div>
                            <span className="text-emerald-600 font-bold tracking-wider uppercase mb-2 block">
                                {project.category}
                            </span>
                            <span className="text-gray-500 text-sm md:text-base mb-6 block font-medium">
                                {language === 'ID' ? 'Dikembangkan oleh' : 'Developed by'} <span className="text-black">Cahyadi Prasetyo</span> {language === 'ID' ? '(Saya)' : '(Me)'}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
                                {project.title}
                            </h1>
                            <div className="flex gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                                    >
                                        <Github size={20} />
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="lg:pl-12">
                            <p className="text-xl text-gray-600 leading-relaxed font-light">
                                {project.description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-[40vh] md:h-[60vh] mb-16 overflow-hidden bg-gray-100"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Content Details */}
                    <div className="grid lg:grid-cols-12 gap-16 pb-12">
                        {/* Left: Tech Stack */}
                        <div className="lg:col-span-4">
                            <h3 className="text-xl font-bold font-display uppercase tracking-widest mb-8 border-b border-black pb-4">
                                {language === 'ID' ? 'Teknologi' : 'Tech Stack'}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {project.techStack.map((tech: string, index: number) => (
                                    <TechIcon key={index} name={tech} />
                                ))}
                            </div>
                        </div>

                        {/* Right: Features */}
                        <div className="lg:col-span-8">
                            <h3 className="text-xl font-bold font-display uppercase tracking-widest mb-8 border-b border-black pb-4">
                                {language === 'ID' ? 'Fitur Utama' : 'Key Features'}
                            </h3>
                            <ul className="grid gap-6">
                                {project.features.map((feature: string, index: number) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                                    >
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-bold text-sm shrink-0">
                                            {index + 1}
                                        </span>
                                        <span className="text-lg text-gray-700 pt-0.5">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
