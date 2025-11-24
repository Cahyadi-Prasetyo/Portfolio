import { createClient } from '@/utils/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, ArrowUpRight } from 'lucide-react'

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
    const supabase = await createClient()

    const { data: project } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', params.slug)
        .single()

    if (!project) notFound()

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
                {/* Back Button - Premium */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 mb-16 group text-lg"
                >
                    <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
                    <span>Back to Projects</span>
                </Link>

                {/* Project Title - Large & Bold */}
                <div className="mb-20">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-600 font-light max-w-4xl leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-4 mb-16">
                        {project.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl text-lg font-medium hover:border-gray-900 transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Action Buttons - Premium */}
                <div className="flex flex-wrap gap-6 mb-20">
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-10 py-5 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 text-lg font-semibold shadow-xl hover:scale-105"
                        >
                            <ExternalLink size={24} />
                            <span>Live Demo</span>
                            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-10 py-5 border-2 border-gray-900 text-gray-900 rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center gap-3 text-lg font-semibold shadow-xl hover:scale-105"
                        >
                            <Github size={24} />
                            <span>Source Code</span>
                            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                        </a>
                    )}
                </div>

                {/* Project Image - Premium */}
                {project.image && (
                    <div className="rounded-3xl overflow-hidden mb-20 shadow-2xl">
                        <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>
                    </div>
                )}

                {/* Project Content */}
                {project.content && (
                    <div className="max-w-4xl">
                        <div className="prose prose-2xl prose-gray max-w-none">
                            <div className="text-gray-700 text-xl leading-relaxed whitespace-pre-line font-light">
                                {project.content}
                            </div>
                        </div>
                    </div>
                )}

                {/* Navigation to Next Project (Optional Enhancement) */}
                <div className="mt-32 pt-20 border-t-2 border-gray-200">
                    <Link
                        href="/projects"
                        className="group inline-flex items-center gap-4 text-3xl font-bold text-gray-900 hover:text-gray-600 transition-colors"
                    >
                        <span>View All Projects</span>
                        <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" size={32} />
                    </Link>
                </div>
            </div>
        </main>
    )
}
