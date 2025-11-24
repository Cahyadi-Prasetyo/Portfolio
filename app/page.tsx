import { createClient } from '@/utils/supabase/server'
import DecryptedText from '@/components/DecryptedText'
import Typewriter from '@/components/Typewriter'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export default async function Home() {
    const supabase = await createClient()

    // Fetch data
    const { data: skills } = await supabase
        .from('skills')
        .select('*')
        .order('order')

    const { data: projects } = await supabase
        .from('projects')
        .select('*')
        .eq('featured', true)
        .limit(3)

    const skillNames = skills?.map(skill => skill.name) || []

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - Clean & Minimal */}
            <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-32 pb-20">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="space-y-12">
                        {/* Status badge */}
                        <div className="inline-block px-6 py-3 bg-gray-100 rounded-full">
                            <span className="text-gray-700 text-sm font-medium tracking-wider flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                AVAILABLE FOR WORK
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
                            <DecryptedText
                                text="Cahyadi"
                                className="block text-gray-900"
                            />
                            <DecryptedText
                                text="Prasetyo"
                                className="block text-gray-600"
                            />
                        </h1>

                        {/* Typewriter */}
                        <div className="h-24">
                            <Typewriter
                                text={[
                                    'Full Stack Developer',
                                    'UI/UX Enthusiast',
                                    'Problem Solver',
                                    'Creative Thinker'
                                ]}
                                className="text-3xl md:text-4xl lg:text-5xl text-gray-500 font-light"
                            />
                        </div>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed font-light">
                            Crafting elegant digital experiences with modern technologies.
                            Specialized in building scalable web applications.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-6 pt-8">
                            <Link
                                href="/projects"
                                className="group px-10 py-5 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                View My Work
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                            </Link>
                            <Link
                                href="/contact"
                                className="px-10 py-5 border-2 border-gray-900 text-gray-900 rounded-2xl hover:bg-gray-50 transition-all duration-300 text-lg font-semibold hover:scale-105"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects - Clean */}
            <section className="py-32 px-6 lg:px-12 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="flex justify-between items-end mb-20">
                        <div>
                            <span className="text-sm font-medium text-gray-400 tracking-widest mb-4 block">
                                SELECTED WORK
                            </span>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
                                Featured Projects
                            </h2>
                        </div>
                        <Link
                            href="/projects"
                            className="hidden lg:flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <span className="text-lg">View all</span>
                            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                        </Link>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {projects?.map((project, index) => (
                            <Link
                                key={project.id}
                                href={`/projects/${project.slug}`}
                                className="group relative overflow-hidden rounded-3xl bg-white border-2 border-gray-200 hover:border-gray-900 aspect-[4/3] hover:shadow-2xl transition-all duration-500"
                            >
                                {/* Background Image */}
                                {project.image && (
                                    <div className="absolute inset-0">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700"
                                        />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="relative h-full p-10 flex flex-col justify-between">
                                    {/* Number */}
                                    <div className="text-gray-200 text-8xl font-bold font-mono">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    {/* Title & CTA */}
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-600 text-lg">
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium group-hover:bg-gray-800 transition-colors">
                                            View Project
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills - Minimal */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="mb-16 text-center">
                    <span className="text-sm font-medium text-gray-400 tracking-widest mb-4 block">
                        TECH STACK
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                        Technologies I Use
                    </h2>
                </div>

                <div className="relative space-y-6">
                    <div className="flex animate-scroll-left gap-6">
                        {[...skillNames, ...skillNames].map((skill, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 px-8 py-4 bg-gray-100 rounded-2xl border border-gray-200"
                            >
                                <span className="text-2xl font-semibold text-gray-900 whitespace-nowrap">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex animate-scroll-right gap-6">
                        {[...skillNames, ...skillNames].map((skill, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 px-8 py-4 bg-white border border-gray-200 rounded-2xl"
                            >
                                <span className="text-2xl font-semibold text-gray-400 whitespace-nowrap">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-40 px-6 lg:px-12 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center space-y-12">
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
                        Let's Create Something
                        <span className="block text-gray-600">
                            Extraordinary
                        </span>
                    </h2>
                    <p className="text-2xl text-gray-600 font-light max-w-3xl mx-auto">
                        Have a project in mind? I'm always open to discussing new opportunities.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-12 py-6 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 text-xl font-semibold shadow-xl hover:scale-105"
                    >
                        Start a Conversation
                        <ArrowUpRight size={24} />
                    </Link>
                </div>
            </section>
        </main>
    )
}
