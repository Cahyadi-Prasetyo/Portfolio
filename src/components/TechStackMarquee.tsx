import React from 'react';
import { motion } from 'framer-motion';
import {
    SiPhp,
    SiLaravel,
    SiCodeigniter,
    SiMysql,
    SiPostgresql,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiReact,
    SiDocker,
    SiGit,
    SiRedis
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

interface TechItem {
    icon: React.ReactNode;
    name: string;
}

const techStack: TechItem[] = [
    { icon: <SiPhp className="text-indigo-400" />, name: 'PHP' },
    { icon: <SiLaravel className="text-red-500" />, name: 'Laravel' },
    { icon: <SiCodeigniter className="text-orange-500" />, name: 'CodeIgniter' },
    { icon: <SiMysql className="text-blue-500" />, name: 'MySQL' },
    { icon: <SiPostgresql className="text-blue-400" />, name: 'PostgreSQL' },
    { icon: <SiJavascript className="text-yellow-400" />, name: 'JavaScript' },
    { icon: <SiTypescript className="text-blue-600" />, name: 'TypeScript' },
    { icon: <SiTailwindcss className="text-cyan-500" />, name: 'Tailwind' },
    { icon: <SiReact className="text-cyan-400" />, name: 'React' },
    { icon: <SiDocker className="text-blue-500" />, name: 'Docker' },
    { icon: <SiGit className="text-orange-500" />, name: 'Git' },
    { icon: <SiRedis className="text-red-600" />, name: 'Redis' },
    { icon: <TbApi className="text-green-500" />, name: 'REST API' },
];

// Duplicate for seamless loop
const duplicatedTech = [...techStack, ...techStack];

export default function TechStackMarquee() {
    return (
        <div className="overflow-hidden py-8 space-y-6">
            {/* Row 1: Moves LEFT continuously */}
            <div className="relative flex overflow-hidden">
                <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        x: {
                            duration: 30,
                            repeat: Infinity,
                            ease: 'linear',
                        }
                    }}
                    className="flex gap-8 py-4"
                >
                    {duplicatedTech.map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 text-2xl md:text-4xl font-bold text-white/80 hover:text-white transition-colors whitespace-nowrap group"
                        >
                            <span className="text-3xl md:text-5xl group-hover:scale-110 transition-transform">
                                {tech.icon}
                            </span>
                            <span className="font-display tracking-tight">{tech.name}</span>
                            <span className="text-white/20 mx-4">•</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Row 2: Moves RIGHT continuously */}
            <div className="relative flex overflow-hidden">
                <motion.div
                    animate={{ x: ['-50%', '0%'] }}
                    transition={{
                        x: {
                            duration: 30,
                            repeat: Infinity,
                            ease: 'linear',
                        }
                    }}
                    className="flex gap-8 py-4"
                >
                    {duplicatedTech.map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 text-2xl md:text-4xl font-bold text-white/80 hover:text-white transition-colors whitespace-nowrap group"
                        >
                            <span className="text-3xl md:text-5xl group-hover:scale-110 transition-transform">
                                {tech.icon}
                            </span>
                            <span className="font-display tracking-tight">{tech.name}</span>
                            <span className="text-white/20 mx-4">•</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
