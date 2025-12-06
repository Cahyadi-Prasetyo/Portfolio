import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen bg-white">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter font-display">{t.about.title}</h1>
                    <div className="prose prose-lg text-gray-600 mb-16">
                        <p className="text-xl leading-relaxed">
                            {t.about.intro}
                        </p>
                        <p className="text-xl leading-relaxed">
                            {t.about.hobby}
                        </p>
                    </div>
                </motion.div>

                {/* Experience */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-gray-100 rounded-xl"><Briefcase size={24} /></div>
                        <h2 className="text-2xl font-bold">{t.about.experience}</h2>
                    </div>
                    <div className="space-y-12 border-l-2 border-gray-100 pl-8 ml-4">
                        {t.about.experienceData.map((item, index) => (
                            <div key={index} className="relative">
                                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-white border-4 border-gray-200 rounded-full" />
                                <span className="text-sm text-gray-400 font-mono mb-1 block">{item.year}</span>
                                <h3 className="text-xl font-bold">{item.role}</h3>
                                <div className="text-gray-500 font-medium mb-2">{item.company}</div>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-gray-100 rounded-xl"><GraduationCap size={24} /></div>
                        <h2 className="text-2xl font-bold">{t.about.education}</h2>
                    </div>
                    <div className="space-y-12 border-l-2 border-gray-100 pl-8 ml-4">
                        {t.about.educationData.map((item, index) => (
                            <div key={index} className="relative">
                                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-white border-4 border-gray-200 rounded-full" />
                                <span className="text-sm text-gray-400 font-mono mb-1 block">{item.year}</span>
                                <h3 className="text-xl font-bold">{item.role}</h3>
                                <div className="text-gray-500 font-medium mb-2">{item.company}</div>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
