import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import FAQ from '../components/FAQ';

export default function About() {
    const { t } = useLanguage();

    return (
        <div className="pt-32 pb-20 min-h-screen bg-white">
            {/* Title Section */}
            <div className="px-6 mb-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter font-display flex flex-col justify-center items-center">{t.about.title}</h1>
                    </motion.div>
                </div>
            </div>

            {/* Photo Section - Line Concept Only */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative w-full"
            >
                {/* Container with lines */}
                {/* <div className="relative border-t border-b border-black"> */}
                {/* Vertical Line on Left */}
                {/* <div className="absolute left-[60px] md:left-[100px] top-0 bottom-0 w-[1px] bg-black z-10" /> */}

                {/* Vertical Line on Right */}
                {/* <div className="absolute right-[60px] md:right-[100px] top-0 bottom-0 w-[1px] bg-black z-10" /> */}

                {/* Empty Area - Photo will be added later */}
                {/* <div className="relative h-[150px] md:h-[200px]"> */}
                {/* Placeholder */}
                {/* </div> */}
                {/* </div> */}
            </motion.div>

            {/* Connecting Lines between sections */}
            {/* <div className="relative h-16">
                {/* Left connecting line */}
            {/* <div className="absolute left-[60px] md:left-[100px] top-0 bottom-0 w-[1px] bg-black" />
                {/* Right connecting line */}
            {/* <div className="absolute right-[60px] md:right-[100px] top-0 bottom-0 w-[1px] bg-black" />
            </div> */}

            {/* Second Line Section - Connected */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full mb-16"
            >
                <div className="relative border-t border-b border-black">
                    {/* Vertical Line on Left */}
                    <div className="absolute left-[60px] md:left-[100px] top-0 bottom-0 w-[1px] bg-black z-10" />

                    {/* Vertical Line on Right */}
                    <div className="absolute right-[60px] md:right-[100px] top-0 bottom-0 w-[1px] bg-black z-10" />

                    {/* Bio Content Inside Section 2 */}
                    <div className="relative py-12 px-6 md:px-12 max-w-7xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold font-display mb-12 leading-tight">
                            {t.about.subtitle}
                        </h2>

                        <div className="space-y-8">
                            <p className="text-lg md:text-2xl leading-relaxed text-gray-800 font-light">
                                {t.about.intro}
                            </p>

                            <p className="text-lg md:text-2xl leading-relaxed text-gray-800 font-light">
                                {t.about.intro2}{' '}
                                {t.about.skills.map((skill: { name: string; color: string }, index: number) => (
                                    <span key={index} className="inline-block">
                                        <span
                                            className={`font-medium underline decoration-2 underline-offset-4 transition-colors hover:bg-opacity-10 px-1 rounded ${skill.color === 'emerald' ? 'text-emerald-700 decoration-emerald-500 hover:bg-emerald-50' :
                                                skill.color === 'blue' ? 'text-blue-700 decoration-blue-500 hover:bg-blue-50' :
                                                    skill.color === 'purple' ? 'text-purple-700 decoration-purple-500 hover:bg-purple-50' :
                                                        'text-orange-700 decoration-orange-500 hover:bg-orange-50'
                                                }`}
                                        >
                                            {skill.name}
                                        </span>
                                        {index < t.about.skills.length - 1 ? (index === t.about.skills.length - 2 ? ' dan ' : ', ') : '. '}
                                    </span>
                                ))}
                                {t.about.intro3}
                            </p>

                            <p className="text-lg md:text-2xl leading-relaxed text-gray-800 font-light">
                                {t.about.hobby}
                            </p>
                        </div>

                        {/* Quick Info Grid */}
                        <div className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-sm font-mono text-gray-500 mb-2 uppercase tracking-wider">Lokasi / Location</h3>
                                <p className="font-display font-bold text-lg">Kepulauan Riau, Indonesia</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-mono text-gray-500 mb-2 uppercase tracking-wider">Status</h3>
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                    </span>
                                    <p className="font-display font-bold text-lg">Open for Projects</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-mono text-gray-500 mb-2 uppercase tracking-wider">Email</h3>
                                <a href="mailto:chdprasetyo@gmail.com" className="font-display font-bold text-lg hover:underline decoration-wavy decoration-emerald-500">
                                    chdprasetyo@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Connecting Lines between sections */}
                <div className="relative h-16">
                    {/* Left connecting line */}
                    <div className="absolute left-[60px] md:left-[100px] top-0 bottom-0 w-[1px] bg-black" />
                    {/* Right connecting line */}
                    <div className="absolute right-[60px] md:right-[100px] top-0 bottom-0 w-[1px] bg-black" />
                </div>
            </motion.div>


            {/* Experience & Education */}
            <div className="px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Experience */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-20"
                    >
                        <div className="flex flex-col items-center gap-3 mb-12">
                            <h2 className="text-4xl font-bold font-display">{t.about.experience}</h2>
                        </div>

                        <div className="relative">
                            {/* Animated Vertical Line */}
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: "100%" }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute left-[101px] md:left-[169px] top-2 bottom-0 w-[2px] bg-black"
                            />

                            {t.about.experienceData.map((item: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="relative flex gap-3 md:gap-10 mb-12 last:mb-0 group"
                                >
                                    {/* Left Side (Stacked Years) */}
                                    <div className="w-[80px] md:w-[120px] text-right shrink-0 pt-1">
                                        {item.years.split('\n').map((year: string, i: number) => (
                                            <span key={i} className="block text-2xl md:text-3xl font-mono font-bold text-gray-900 leading-none mb-1">
                                                {year}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Middle (Dot) */}
                                    <div className="relative flex justify-center pt-2 shrink-0 w-[20px]">
                                        <div className="w-5 h-5 bg-white border-[3px] border-black rounded-full z-10 shadow-sm relative" />
                                    </div>

                                    {/* Right Side (Content) */}
                                    <div className="grow pb-8">
                                        {/* Period Header */}
                                        <div className="text-blue-600 font-mono text-base md:text-lg mb-2 font-medium">
                                            {item.period}
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold mb-1">{item.role}</h3>
                                        <div className="text-xl text-gray-700 font-medium mb-4">@{item.company}</div>
                                        {/* Description */}
                                        <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed text-lg marker:text-black">
                                            {Array.isArray(item.desc) ? item.desc.map((point: string, i: number) => (
                                                <li key={i}>{point}</li>
                                            )) : (
                                                <li>{item.desc}</li>
                                            )}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-16"
                    >
                        <div className="flex flex-col items-center gap-3 mb-12">
                            <h2 className="text-4xl font-bold font-display">{t.about.education}</h2>
                        </div>
                        <div className="relative">
                            {/* Animated Vertical Line */}
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: "100%" }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute left-[101px] md:left-[169px] top-2 bottom-0 w-[2px] bg-black"
                            />

                            {t.about.educationData.map((item: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="relative flex gap-3 md:gap-10 mb-12 last:mb-0 group"
                                >
                                    {/* Left Side (Stacked Years) */}
                                    <div className="w-[80px] md:w-[120px] text-right shrink-0 pt-1">
                                        {item.years.split('\n').map((year: string, i: number) => (
                                            <span key={i} className="block text-2xl md:text-3xl font-mono font-bold text-gray-900 leading-none mb-1">
                                                {year}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Middle (Dot) */}
                                    <div className="relative flex justify-center pt-2 shrink-0 w-[20px]">
                                        <div className="w-5 h-5 bg-white border-[3px] border-black rounded-full z-10 shadow-sm relative" />
                                    </div>

                                    {/* Right Side (Content) */}
                                    <div className="grow pb-8">
                                        {/* Period Header */}
                                        <div className="text-blue-600 font-mono text-base md:text-lg mb-2 font-medium">
                                            {item.period}
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold mb-1">{item.role}</h3>
                                        <div className="text-xl text-gray-700 font-medium mb-4">{item.company}</div>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed text-lg marker:text-black">
                                            {Array.isArray(item.desc) ? item.desc.map((point: string, i: number) => (
                                                <li key={i}>{point}</li>
                                            )) : (
                                                <li>{item.desc}</li>
                                            )}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <div className="border-b border-black w-full"></div>
                </div>
            </div>

            {/* 4. FAQ SECTION */}
            <section className="py-32 px-6">
                <FAQ />
            </section>

        </div>
    );
}
