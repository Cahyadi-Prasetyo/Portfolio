import { ArrowRight, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LandingPageProps {
    onEnterDesktop: () => void;
}

export default function LandingPage({ onEnterDesktop }: LandingPageProps) {
    const roles = [
        "Full Stack Engineer • System Architecture",
        "Frontend Engineer • Data Visualization Systems",
        "Interactive Systems • Dashboard Engineering"
    ];

    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-screen w-full bg-black text-white flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-blue-500/30">

            {/* Abstract Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
                <div className="absolute inset-0 bg-noise opacity-20" />
            </div>

            {/* 1. Subtle OS Signal - Top Bar */}
            <div className="absolute top-0 w-full p-6 flex justify-between items-center text-xs text-gray-600 font-mono tracking-widest select-none z-20">
                <div className="flex gap-2 items-center">
                    <span className="w-2 h-2 rounded-full bg-gray-600/50" />
                    <span>CAHYADI_OS_KERNEL</span>
                </div>
                <span>BOOT_SEQUENCE_READY</span>
            </div>

            {/* Content */}
            <div className="z-10 text-center max-w-3xl px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* 2. Engineering Badge */}
                    <div className="flex justify-center mb-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono tracking-wider text-green-400 bg-green-900/10 rounded-full border border-green-500/20 shadow-[0_0_10px_rgba(74,222,128,0.1)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            SYSTEM ONLINE • v2.6.0
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                        Cahyadi Prasetyo
                    </h1>

                    {/* 3. Rotating Roles (Subtle Fade) */}
                    <div className="h-8 mb-8 flex justify-center items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={roleIndex}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.5 }}
                                className="text-xl md:text-2xl text-gray-300 font-light"
                            >
                                {roles[roleIndex]}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <p className="text-sm md:text-base text-gray-500 mb-10 font-mono max-w-xl mx-auto border-t border-b border-white/5 py-4">
                        &gt; Initializing scalable backend logic... <br />
                        &gt; Rendering immersive frontend experiences... <br />
                        &gt; Ready to deploy robust solutions.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <button
                        onClick={() => window.open('/resume.pdf', '_blank')}
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group"
                    >
                        <FileText size={18} className="text-gray-300 group-hover:text-white" />
                        <span>Download CV</span>
                    </button>

                    <button
                        onClick={onEnterDesktop}
                        className="flex items-center gap-2 px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-full font-medium transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        <span>Enter CahyadiOS</span>
                        <ArrowRight size={18} />
                    </button>
                </motion.div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-8 text-gray-600 text-xs z-10">
                <p>© 2026 Cahyadi Prasetyo. Built with React, Bun & Framer Motion.</p>
            </div>

        </div>
    );
}
