import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Magnet from '../components/reactbits/Magnet';

const categories = [
    { id: 'all', labelId: 'Semua', labelEn: 'All' },
    { id: 'web', labelId: 'Website', labelEn: 'Website' },
    { id: 'api', labelId: 'API', labelEn: 'API' },
    { id: 'mobile', labelId: 'Mobile', labelEn: 'Mobile' },
];

export default function Projects() {
    const { t, language } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('all');

    return (
        <div className="pt-32 pb-20 min-h-screen bg-white">
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

            {/* Projects Container */}
            <div className="px-6">
                <div className="max-w-7xl mx-auto min-h-[400px]">
                    {/* Add your project cards here */}
                    <p className="text-center text-gray-400">
                        {language === 'ID' ? 'Project akan ditampilkan di sini' : 'Projects will be displayed here'}
                    </p>
                </div>
            </div>
        </div>
    );
}
