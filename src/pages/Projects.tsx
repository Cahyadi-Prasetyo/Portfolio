import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Loader } from 'lucide-react';
import { supabase } from '../../utils/supabase/client';
import ScrollReveal from '../components/reactbits/ScrollReveal';

interface Project {
    id: number;
    title: string;
    description: string;
    image_url: string;
    github_url?: string;
    live_url?: string;
    tags?: string[];
    created_at: string;
}

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const { data, error } = await supabase
                    .from('projects')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) {
                    console.error('Error fetching projects:', error);
                    // Fallback data for demo if DB is empty or fails
                    setProjects([
                        { id: 1, title: 'Project Alpha', description: 'A robust e-commerce solution providing seamless shopping experiences.', image_url: '', created_at: new Date().toISOString(), tags: ['React', 'Node'] },
                        { id: 2, title: 'Project Beta', description: 'Real-time dashboard for monitoring financial assets and crypto.', image_url: '', created_at: new Date().toISOString(), tags: ['Vue', 'D3.js'] },
                        { id: 3, title: 'Project Gamma', description: 'Social media mobile application connected to a distributed network.', image_url: '', created_at: new Date().toISOString(), tags: ['Flutter', 'Firebase'] },
                    ]);
                } else {
                    setProjects(data || []);
                }
            } catch (err) {
                console.error("Supabase connection error", err);
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">All Projects.</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mb-16">
                        A collection of my work, experiments, and open source contributions.
                    </p>
                </ScrollReveal>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader className="animate-spin text-gray-400" size={32} />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ScrollReveal key={project.id} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* Image Placeholder */}
                                    <div className="h-64 bg-gray-100 relative overflow-hidden">
                                        {project.image_url ? (
                                            <img src={project.image_url} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        ) : (
                                            <div className="absolute inset-0 bg-gray-200" />
                                        )}

                                        {/* Overlay Buttons */}
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                            {project.github_url && (
                                                <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full hover:scale-110 transition-transform">
                                                    <Github size={20} />
                                                </a>
                                            )}
                                            {project.live_url && (
                                                <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full hover:scale-110 transition-transform">
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags?.map(tag => (
                                                <span key={tag} className="text-xs font-medium px-2 py-1 bg-gray-50 text-gray-600 rounded-md">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
