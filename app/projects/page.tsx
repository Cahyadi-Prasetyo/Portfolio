'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { createClient } from '@/utils/supabase/client'
import { ArrowUpRight } from 'lucide-react'

type Project = {
    id: string
    title: string
    slug: string
    description: string
    image: string | null
    tags: string[]
}

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([])
    const [filter, setFilter] = useState<'all' | 'web' | 'mobile'>('all')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchProjects()
    }, [])

    async function fetchProjects() {
        const supabase = createClient()
        const { data } = await supabase
            .from('projects')
            .select('*')
            .order('created_at', { ascending: false })

        if (data) setProjects(data)
        setLoading(false)
    }

    const filteredProjects = projects.filter(project => {
        if (filter === 'all') return true
        return project.tags.some(tag => tag.toLowerCase().includes(filter))
    })

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
                {/* Header */}
                <div className="mb-24">
                    <span className="text-sm font-medium text-gray-400 tracking-widest mb-6 block">
                        PORTFOLIO
                    </span>
                    <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 tracking-tight mb-8">
                        Selected
                        <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
                            Work
                        </span>
                    </h1>
                    <p className="text-2xl text-gray-600 max-w-3xl font-light">
                        A collection of projects that showcase my expertise in building modern,
                        scalable web applications.
                    </p>
                </div>

                {/* Filter Tabs - Premium Style */}
                <div className="flex gap-4 mb-20">
                    {[
                        { key: 'all', label: 'All Projects' },
                        { key: 'web', label: 'Web' },
                        { key: 'mobile', label: 'Mobile' }
                    ].map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setFilter(tab.key as typeof filter)}
                            className={`px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 ${filter === tab.key
                                    ? 'bg-gray-900 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border-2 border-gray-200'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid - Premium */}
                <div className="grid lg:grid-cols-2 gap-8">
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="group relative block overflow-hidden rounded-3xl bg-gray-900 aspect-[4/3] hover:scale-[1.02] transition-transform duration-700"
                                >
                                    {/* Background Image with Parallax */}
                                    {project.image && (
                                        <div className="absolute inset-0 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-1000"
                                            />
                                        </div>
                                    )}

                                    {/* Gradient Overlay - More Sophisticated */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-900/90 group-hover:from-gray-900/80 group-hover:via-gray-900/60 group-hover:to-gray-900/80 transition-all duration-700" />

                                    {/* Content */}
                                    <div className="relative h-full p-10 lg:p-12 flex flex-col justify-between">
                                        {/* Number - Larger & Bolder */}
                                        <div className="text-white/20 text-8xl lg:text-9xl font-bold font-mono leading-none">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>

                                        {/* Title & CTA */}
                                        <div className="space-y-8">
                                            <div>
                                                <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 group-hover:translate-x-3 transition-transform duration-500 leading-tight">
                                                    {project.title}
                                                </h2>
                                                <p className="text-gray-300 text-xl font-light leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>

                                            {/* Tags */}
                                            {project.tags && project.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-3">
                                                    {project.tags.slice(0, 3).map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full border border-white/20"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* CTA Button */}
                                            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold text-lg group-hover:bg-gray-100 group-hover:scale-105 transition-all duration-300 shadow-xl">
                                                View Project
                                                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Shine Effect on Hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform group-hover:translate-x-[300%] transition-transform duration-1000" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State - Premium */}
                {filteredProjects.length === 0 && !loading && (
                    <div className="text-center py-32">
                        <div className="text-gray-300 text-8xl mb-8">∅</div>
                        <p className="text-2xl text-gray-400 font-light">
                            No projects found in this category.
                        </p>
                    </div>
                )}
            </div>
        </main>
    )
}
