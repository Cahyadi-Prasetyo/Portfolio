import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, FolderOpen, Code, Globe, Smartphone, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const categories = [
    { id: 'all', labelId: 'Semua', labelEn: 'All', icon: FolderOpen },
    { id: 'web', labelId: 'Website', labelEn: 'Website', icon: Globe },
    { id: 'api', labelId: 'API', labelEn: 'API', icon: Code },
    { id: 'mobile', labelId: 'Mobile', labelEn: 'Mobile', icon: Smartphone },
];

export default function Projects() {
    const { t, language } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('all');

    // Filter projects based on active category
    const filteredProjects = activeFilter === 'all'
        ? t.projectsList
        : t.projectsList.filter((p: any) => p.category === activeFilter);

    return (
        <div className="pt-32 pb-20 min-h-screen bg-background text-primary selection:bg-accent-blue selection:text-white">

            <div className="max-w-6xl mx-auto px-4 md:px-6">

                {/* 1. HERO HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block bg-white px-4 py-1.5 rounded-full text-sm font-semibold text-accent-orange shadow-sm mb-6 border border-orange-100">
                        Portfolio
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Curated <span className="text-accent-blue">Work.</span>
                    </h1>
                    <p className="text-secondary max-w-2xl mx-auto text-lg">
                        Selected projects that demonstrate my passion for building robust and scalable applications.
                    </p>
                </motion.div>

                {/* 2. FILTER TABS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex justify-center mb-16"
                >
                    <div className="flex flex-wrap gap-2 md:gap-4 bg-surface p-2 rounded-full shadow-bento border border-border">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveFilter(cat.id)}
                                className={`
                                    px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2
                                    ${activeFilter === cat.id
                                        ? 'bg-black text-white shadow-md scale-105'
                                        : 'text-secondary hover:bg-background hover:text-black'
                                    }
                                `}
                            >
                                <cat.icon size={16} />
                                {language === 'ID' ? cat.labelId : cat.labelEn}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* 3. PROJECTS GRID */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project: any, index: number) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link
                                    to={`/projects/${project.slug}`}
                                    className="block bg-surface rounded-bento p-2 shadow-bento hover:shadow-bento-hover transition-all duration-300 group hover:-translate-y-1 h-full"
                                >
                                    <div className="aspect-video rounded-3xl overflow-hidden mb-6 relative">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                                        {/* Overlay & Action Icon */}
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-lg">
                                            <ArrowUpRight size={24} className="text-primary" />
                                        </div>
                                    </div>

                                    <div className="px-6 pb-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="bg-blue-50 text-accent-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-blue-100">
                                                {project.category}
                                            </div>
                                            <span className="text-xs font-mono text-gray-400">#{project.id.toString().padStart(3, '0')}</span>
                                        </div>

                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-blue transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-secondary line-clamp-2 leading-relaxed mb-4">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.techStack.slice(0, 3).map((tech: string, i: number) => (
                                                <span key={i} className="text-xs font-medium text-gray-500 bg-background px-2 py-1 rounded-md">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.techStack.length > 3 && (
                                                <span className="text-xs font-medium text-gray-400 bg-background px-2 py-1 rounded-md">
                                                    +{project.techStack.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 bg-surface rounded-bento shadow-bento"
                    >
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                            <Search size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">No Projects Found</h3>
                        <p className="text-secondary max-w-sm mx-auto">
                            {language === 'ID' ? 'Tidak ada project di kategori ini.' : 'We couldn\'t find any projects matching this category.'}
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
