import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Magnet from '../components/reactbits/Magnet';
import CountUp from '../components/reactbits/CountUp';

const categories = [
    { id: 'all', labelId: 'Semua', labelEn: 'All' },
    { id: 'web', labelId: 'Website', labelEn: 'Website' },
    { id: 'api', labelId: 'API', labelEn: 'API' },
    { id: 'mobile', labelId: 'Mobile', labelEn: 'Mobile' },
];

// Tilt Card Component
function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -10;
        const rotateYValue = ((x - centerX) / centerX) * 10;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <div
            className={`transition-transform duration-300 ease-out ${className}`}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: 'preserve-3d'
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
}

// Hover Count Card Component - triggers CountUp on hover
function HoverCountCard({ index, language, projectSlug }: { index: number; language: string; projectSlug: string }) {
    const [isHovered, setIsHovered] = useState(false);

    const targetNumber = index + 1;
    const formattedNumber = targetNumber.toString().padStart(3, '0');

    return (
        <div
            className="flex justify-between items-center py-4 px-6 border-t border-black"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="text-sm font-medium font-mono flex items-center">
                DEV.<span className="text-emerald-500 min-w-[3ch]">
                    {isHovered ? (
                        <CountUp
                            from={0}
                            to={targetNumber}
                            duration={0.5}
                            startWhen={true}
                            className="inline-block"
                        />
                    ) : (
                        formattedNumber
                    )}
                </span>
            </div>
            <Magnet padding={30} magnetStrength={3}>
                <Link
                    to={`/projects/${projectSlug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors"
                >
                    {language === 'ID' ? 'LIHAT' : 'VIEW'} <ArrowUpRight size={16} />
                </Link>
            </Magnet>
        </div>
    );
}

export default function Projects() {
    const { t, language } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('all');

    // Filter projects based on active category
    const filteredProjects = activeFilter === 'all'
        ? t.projectsList
        : t.projectsList.filter((p: any) => p.category === activeFilter);

    return (
        <div className="pt-24 md:pt-32 pb-20 min-h-screen bg-white">
            {/* Title */}
            <div className="px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mt-10 font-display">{t.projectsPage.title}</h1>
                    </motion.div>
                </div>
            </div>

            {/* Filter Section with 2 Lines - Full Width */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full border-t border-b border-black py-6 mb-16 mt-10"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                        {categories.map((cat) => (
                            <Magnet key={cat.id} padding={30} magnetStrength={3}>
                                <button
                                    onClick={() => setActiveFilter(cat.id)}
                                    className={`px-6 py-2.5 rounded-full text-sm md:text-base font-medium uppercase tracking-wider transition-all duration-300 ${activeFilter === cat.id
                                        ? 'bg-black text-white'
                                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
                                        }`}
                                >
                                    {language === 'ID' ? cat.labelId : cat.labelEn}
                                </button>
                            </Magnet>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Projects Grid - 2 Columns */}
            <div className="px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="border border-black"
                            >
                                {/* Project Title */}
                                <div className="py-4 px-6 border-b border-black text-center">
                                    <h2 className="text-xl md:text-2xl font-bold font-display tracking-tight">
                                        {project.title}
                                    </h2>
                                </div>

                                {/* 3D Tilt Image */}
                                <div className="relative p-6 bg-gray-50">
                                    <TiltCard className="cursor-pointer">
                                        <div className="relative overflow-hidden rounded-lg shadow-2xl">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full aspect-[16/10] object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                            {/* Shine effect on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                    </TiltCard>
                                </div>

                                {/* Bottom Info: DEV.001 and LIHAT button */}
                                <HoverCountCard index={index} language={language} projectSlug={project.slug} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <div className="px-6">
                    <div className="max-w-7xl mx-auto text-center py-20">
                        <p className="text-gray-400 text-xl">
                            {language === 'ID' ? 'Tidak ada project di kategori ini' : 'No projects in this category'}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
