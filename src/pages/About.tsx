import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Mail, Globe, Code } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import FAQ from '../components/FAQ';

export default function About() {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <div className="pt-32 pb-20 min-h-screen bg-background text-primary selection:bg-accent-blue selection:text-white">

            <div className="max-w-6xl mx-auto px-4 md:px-6">

                {/* 1. HERO TITLE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block bg-white px-4 py-1.5 rounded-full text-sm font-semibold text-accent-blue shadow-sm mb-6 border border-blue-100">
                        My Story
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        More than just <br />
                        <span className="text-accent-blue">Lines of Code.</span>
                    </h1>
                </motion.div>

                {/* 2. BENTO GRID - INTRO */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                >
                    {/* Bio Card (Span 2) */}
                    <motion.div variants={itemVariants} className="md:col-span-2 bg-surface rounded-bento p-8 md:p-10 shadow-bento relative overflow-hidden group">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="text-3xl">🚀</span> Who am I?
                        </h2>
                        <div className="space-y-4 text-secondary leading-relaxed text-lg">
                            <p>{t.about.intro}</p>
                            <p>
                                {t.about.intro2}{' '}
                                <span className="text-primary font-semibold">
                                    {t.about.skills.map((s: any) => s.name).join(', ')}.
                                </span>
                                {' '}{t.about.intro3}
                            </p>
                            <p>{t.about.hobby}</p>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-[80px] group-hover:bg-accent-blue/10 transition-colors" />
                    </motion.div>

                    {/* Quick Stats Column (Span 1) */}
                    <div className="space-y-6">
                        {/* Location */}
                        <motion.div variants={itemVariants} className="bg-surface rounded-bento p-6 shadow-bento flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-accent-blue md:group-hover:scale-110 transition-transform">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase text-secondary tracking-wider">Location</p>
                                <p className="font-bold text-lg">Kepulauan Riau, ID</p>
                            </div>
                        </motion.div>

                        {/* Experience */}
                        <motion.div variants={itemVariants} className="bg-surface rounded-bento p-6 shadow-bento flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-accent-orange md:group-hover:scale-110 transition-transform">
                                <Code size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase text-secondary tracking-wider">Experience</p>
                                <p className="font-bold text-lg">Fullstack Dev</p>
                            </div>
                        </motion.div>

                        {/* Status */}
                        <motion.div variants={itemVariants} className="bg-surface rounded-bento p-6 shadow-bento flex items-center gap-4 group border border-accent-green/20 bg-green-50/50">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-accent-green md:group-hover:scale-110 transition-transform">
                                <Globe size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase text-secondary tracking-wider">Status</p>
                                <p className="font-bold text-lg text-accent-green">Available</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* 3. EXPERIENCE SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold mb-8 px-2 flex items-center gap-3">
                        <Briefcase className="text-accent-blue" /> Experience
                    </h2>

                    <div className="grid gap-6">
                        {t.about.experienceData.map((exp: any, i: number) => (
                            <div key={i} className="bg-surface rounded-bento p-8 md:p-10 shadow-bento hover:shadow-bento-hover transition-all group">
                                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                                    <div className="min-w-[120px]">
                                        <span className="inline-block bg-background px-4 py-2 rounded-xl text-primary font-bold font-mono text-lg border border-border">
                                            {exp.years}
                                        </span>
                                    </div>
                                    <div className="grow">
                                        <h3 className="text-2xl font-bold mb-1 group-hover:text-accent-blue transition-colors">
                                            {exp.role}
                                        </h3>
                                        <p className="text-lg text-secondary font-medium mb-4">@{exp.company}</p>
                                        <ul className="list-disc list-outside ml-5 space-y-2 text-secondary">
                                            {Array.isArray(exp.desc) ? exp.desc.map((point: string, idx: number) => (
                                                <li key={idx} className="leading-relaxed">{point}</li>
                                            )) : (
                                                <li className="leading-relaxed">{exp.desc}</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 4. EDUCATION SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold mb-8 px-2 flex items-center gap-3">
                        <GraduationCap className="text-accent-orange" /> Education
                    </h2>

                    <div className="grid gap-6">
                        {t.about.educationData.map((edu: any, i: number) => (
                            <div key={i} className="bg-surface rounded-bento p-8 md:p-10 shadow-bento hover:shadow-bento-hover transition-all group">
                                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                                    <div className="min-w-[120px]">
                                        <span className="inline-block bg-background px-4 py-2 rounded-xl text-primary font-bold font-mono text-lg border border-border">
                                            {edu.years}
                                        </span>
                                    </div>
                                    <div className="grow">
                                        <h3 className="text-2xl font-bold mb-1 group-hover:text-accent-orange transition-colors">
                                            {edu.role}
                                        </h3>
                                        <p className="text-lg text-secondary font-medium mb-4">{edu.company}</p>
                                        <ul className="list-disc list-outside ml-5 space-y-2 text-secondary">
                                            {Array.isArray(edu.desc) ? edu.desc.map((point: string, idx: number) => (
                                                <li key={idx} className="leading-relaxed">{point}</li>
                                            )) : (
                                                <li className="leading-relaxed">{edu.desc}</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 5. FAQ Bento */}
                <div className="bg-surface rounded-bento p-8 md:p-12 shadow-bento">
                    <FAQ />
                </div>

            </div>
        </div>
    );
}
