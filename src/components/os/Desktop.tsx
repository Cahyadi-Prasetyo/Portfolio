import { useState, useEffect } from 'react';
import Dock from './Dock';
import { motion } from 'framer-motion';

export default function Desktop() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const wallpaper = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black selection:bg-purple-500 selection:text-white">

            {/* 1. Wallpaper */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center scale-105"
                style={{ backgroundImage: `url(${wallpaper})` }}
            >
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
            </div>

            {/* 2. Top Bar */}
            <div className="absolute top-0 left-0 w-full h-8 bg-black/20 backdrop-blur-md flex items-center justify-between px-4 z-50 border-b border-white/5 text-xs text-white shadow-sm">
                <div className="flex items-center gap-4 font-medium">
                    <span className="font-bold text-sm"></span>
                    <span className="hidden sm:inline font-bold">CahyadiOS</span>
                    <span className="hover:bg-white/10 px-2 py-0.5 rounded cursor-default transition-colors">File</span>
                    <span className="hover:bg-white/10 px-2 py-0.5 rounded cursor-default transition-colors">View</span>
                    <span className="hover:bg-white/10 px-2 py-0.5 rounded cursor-default transition-colors">Go</span>
                </div>
                <div className="flex items-center gap-4 font-medium">
                    <span className="hidden sm:inline opacity-80">100% 🔋</span>
                    <span>{currentTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                    <span>{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            </div>

            {/* 3. Desktop Icons Area */}
            <div className="relative z-10 w-full h-full pt-12 p-6 grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] grid-rows-[repeat(auto-fill,minmax(80px,1fr))] gap-4 pointer-events-none">
                {/* Welcome Widget */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="col-span-4 row-span-2 pointer-events-auto"
                >
                    <div className="text-white drop-shadow-lg">
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mix-blend-overlay">CAHYADI</h1>
                        <p className="text-xl md:text-2xl font-light opacity-80 mt-2">Full Stack Developer</p>
                        <div className="mt-4 flex gap-2">
                            <span className="px-2 py-1 bg-white/20 rounded text-xs backdrop-blur-sm border border-white/10">v1.0.0</span>
                            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs backdrop-blur-sm border border-emerald-500/30">System Normal</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* 4. Dock */}
            <Dock onOpenApp={(id) => console.log("Open:", id)} />

        </div>
    );
}
