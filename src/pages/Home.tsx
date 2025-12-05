import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Database, Layout, Smartphone } from 'lucide-react';
import TypingText from '../components/reactbits/TypingText';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import ScrollVelocity from '../components/reactbits/ScrollVelocity';

export default function Home() {
    const skills = [
        { icon: <Layout />, name: "Frontend", desc: "React, Vue, Tailwind" },
        { icon: <Database />, name: "Backend", desc: "Node, Supabase, SQL" },
        { icon: <Code2 />, name: "Languages", desc: "TypeScript, Python" },
        { icon: <Smartphone />, name: "Mobile", desc: "Flutter, React Native" },
    ];

    /* Placeholder data for highlights - in real app, fetch from Supabase */
    const featuredProjects = [
        { id: 1, title: "E-Commerce Platform", category: "Web App" },
        { id: 2, title: "Finance Dashboard", category: "Data Visualization" },
        { id: 3, title: "Social Connect", category: "Mobile App" },
    ];

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="h-screen flex flex-col justify-center items-center px-6 relative">
                <div className="text-center max-w-4xl z-10">
                    <ScrollReveal>
                        <span className="text-gray-500 font-medium tracking-widest text-sm uppercase mb-4 block">
                            Portfolio 2024
                        </span>
                    </ScrollReveal>

                    <div className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-gray-900 leading-tight">
                        <TypingText text="Cahyadi Prasetyo" delay={0.5} />
                    </div>

                    <ScrollReveal delay={1.2}>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
                            Full Stack Developer & UI/UX Enthusiast. Building digital experiences that matter.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={1.5}>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 hover:scale-105 transition-all">
                            Start a Project <ArrowRight size={18} />
                        </Link>
                    </ScrollReveal>
                </div>

                {/* Decorative Background Text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none z-0">
                    <div className="transform -rotate-12 scale-150">
                        <ScrollVelocity text="DEVELOPER DESIGNER CREATOR " velocity={3} />
                        <ScrollVelocity text="REACT VITE NEXTJS TYPESCRIPT " velocity={-3} />
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-32 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Technical Expertise.</h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skill, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center mb-6">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                                    <p className="text-gray-500">{skill.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Highlights */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-4xl font-bold">Selected Works.</h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <Link to="/projects" className="hidden md:flex items-center gap-2 text-gray-500 hover:text-black transition-colors">
                                View All <ArrowRight size={16} />
                            </Link>
                        </ScrollReveal>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <ScrollReveal key={project.id} delay={index * 0.2}>
                                <Link to={`/projects`} className="group block">
                                    <div className="aspect-[4/3] bg-gray-100 rounded-2xl mb-6 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gray-200 animate-pulse group-hover:scale-105 transition-transform duration-500" />
                                        {/* Image would go here */}
                                    </div>
                                    <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">{project.category}</span>
                                    <h3 className="text-xl font-bold mt-2 group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link to="/projects" className="inline-flex items-center gap-2 text-gray-900 font-medium">
                            View All Projects <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
