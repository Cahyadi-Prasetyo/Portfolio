import { createClient } from '@/utils/supabase/server'
import { Briefcase, GraduationCap, Users, MapPin, Mail, Github, Linkedin } from 'lucide-react'

export default async function AboutPage() {
    const supabase = await createClient()

    const [
        { data: education },
        { data: experience },
        { data: organizations },
        { data: skills }
    ] = await Promise.all([
        supabase.from('education').select('*').order('start_date', { ascending: false }),
        supabase.from('experience').select('*').order('start_date', { ascending: false }),
        supabase.from('organizations').select('*').order('start_date', { ascending: false }),
        supabase.from('skills').select('*').order('order')
    ])

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
                {/* Header */}
                <div className="mb-32">
                    <span className="text-sm font-medium text-gray-400 tracking-widest mb-6 block">
                        ABOUT ME
                    </span>
                    <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 tracking-tight mb-12 leading-none">
                        Crafting Digital
                        <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
                            Experiences
                        </span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-600 font-light max-w-4xl leading-relaxed">
                        A passionate developer from Bintan, Indonesia, dedicated to building elegant
                        digital solutions and solving complex problems with clean, efficient code.
                    </p>
                </div>

                {/* Chrome Grid - Bio & Stats */}
                <div className="grid lg:grid-cols-3 gap-8 mb-32">
                    {/* Main Bio Card */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 lg:p-16 text-white shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Who I Am</h2>
                        <div className="space-y-8 text-xl text-gray-200 font-light leading-relaxed">
                            <p>
                                I'm a Full Stack Developer with a strong focus on building modern,
                                performance-driven web applications. My journey in tech began during my time at
                                SMKN 1 Bintan Timur, where I discovered my passion for creating solutions that matter.
                            </p>
                            <p>
                                Beyond coding, I've been active in various organizations including OSIS and
                                Pramuka, which taught me valuable leadership and teamwork skills that I bring to
                                every project I work on.
                            </p>
                            <div className="flex items-center gap-6 pt-8">
                                <a
                                    href="https://github.com/Cahyadi-Prasetyo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-colors"
                                >
                                    <Github size={28} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/cahyadi-prasetyo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-colors"
                                >
                                    <Linkedin size={28} />
                                </a>
                                <a
                                    href="mailto:cahyadiprasetyo@example.com"
                                    className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-colors"
                                >
                                    <Mail size={28} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="space-y-8">
                        <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-gray-900 transition-colors shadow-xl">
                            <MapPin className="text-gray-900 mb-4" size={32} />
                            <div className="text-sm text-gray-500 mb-2 font-medium tracking-wider">BASED IN</div>
                            <div className="text-2xl font-bold text-gray-900">Bintan, Indonesia</div>
                        </div>
                        <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-gray-900 transition-colors shadow-xl">
                            <div className="text-5xl font-bold text-gray-900 mb-3">3+</div>
                            <div className="text-gray-600 font-medium">Years Experience</div>
                        </div>
                        <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-gray-900 transition-colors shadow-xl">
                            <div className="text-5xl font-bold text-gray-900 mb-3">{skills?.length || 0}+</div>
                            <div className="text-gray-600 font-medium">Technologies</div>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-16">
                        <Briefcase className="text-gray-900" size={40} />
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                            Experience
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {experience?.map((exp, index) => (
                            <div
                                key={exp.id}
                                className="group bg-white border-2 border-gray-200 rounded-3xl p-8 lg:p-12 hover:border-gray-900 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                style={{
                                    transform: `translateY(-${index * 8}px)`,
                                }}
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-3">
                                            {exp.role}
                                        </h3>
                                        <p className="text-xl text-gray-600 font-medium">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div className="text-gray-500 mt-4 lg:mt-0 text-lg">
                                        {new Date(exp.start_date).getFullYear()} - {
                                            exp.end_date ? new Date(exp.end_date).getFullYear() : 'Present'
                                        }
                                    </div>
                                </div>
                                {exp.description && (
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{exp.description}</p>
                                )}
                                <span className="inline-block px-6 py-3 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                                    {exp.type}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-16">
                        <GraduationCap className="text-gray-900" size={40} />
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                            Education
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {education?.map((edu, index) => (
                            <div
                                key={edu.id}
                                className="bg-white border-2 border-gray-200 rounded-3xl p-8 lg:p-12 hover:border-gray-900 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                style={{
                                    transform: `translateY(-${index * 8}px)`,
                                }}
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-3">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-xl text-gray-600 font-medium">
                                            {edu.school}
                                        </p>
                                    </div>
                                    <div className="text-gray-500 mt-4 lg:mt-0 text-lg">
                                        {new Date(edu.start_date).getFullYear()} - {
                                            edu.end_date ? new Date(edu.end_date).getFullYear() : 'Present'
                                        }
                                    </div>
                                </div>
                                {edu.description && (
                                    <p className="text-gray-600 text-lg leading-relaxed">{edu.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Organizations Section */}
                <section>
                    <div className="flex items-center gap-4 mb-16">
                        <Users className="text-gray-900" size={40} />
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                            Organizations
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {organizations?.map((org, index) => (
                            <div
                                key={org.id}
                                className="bg-white border-2 border-gray-200 rounded-3xl p-8 lg:p-12 hover:border-gray-900 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                style={{
                                    transform: `translateY(-${index * 8}px)`,
                                }}
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-3">
                                            {org.role}
                                        </h3>
                                        <p className="text-xl text-gray-600 font-medium">
                                            {org.name}
                                        </p>
                                    </div>
                                    <div className="text-gray-500 mt-4 lg:mt-0 text-lg">
                                        {new Date(org.start_date).getFullYear()} - {
                                            org.end_date ? new Date(org.end_date).getFullYear() : 'Present'
                                        }
                                    </div>
                                </div>
                                {org.description && (
                                    <p className="text-gray-600 text-lg leading-relaxed">{org.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}
