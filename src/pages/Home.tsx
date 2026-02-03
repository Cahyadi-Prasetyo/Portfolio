import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Dock from '../components/os/Dock';

export default function Home() {
    // Wallpaper Image - Using a dark, moody gradient or abstract image
    // You can replace this URL with a local asset later
    const wallpaperUrl = "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop";

    const [activeApp, setActiveApp] = useState<string | null>(null);

    const handleOpenApp = (appName: string) => {
        console.log("Opening app:", appName);
        setActiveApp(appName);
    };

    return (
        <div className="h-screen w-full overflow-hidden relative bg-black selection:bg-pink-500 selection:text-white">

            {/* 1. BACKGROUND WALLPAPER */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700"
                style={{ backgroundImage: `url(${wallpaperUrl})` }}
            >
                {/* Overlay to dim background for readability */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[0px]" />
            </div>

            {/* 2. DESKTOP AREA (Icons, Windows go here) */}
            <div className="relative z-10 w-full h-full p-8 pointer-events-none">
                {/* Header / Top Bar */}
                <div className="absolute top-0 left-0 w-full h-8 bg-black/20 backdrop-blur-md flex items-center justify-between px-4 text-white text-xs font-medium pointer-events-auto">
                    <div className="flex items-center gap-4">
                        <span className="font-bold"> CahyadiOS</span>
                        <span>File</span>
                        <span>Edit</span>
                        <span>View</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span>100% 🔋</span>
                        <span>{new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                </div>

                {/* Desktop Greetings (Optional) */}
                {!activeApp && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white pointer-events-none"
                    >
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 mix-blend-overlay">CAHYADI</h1>
                        <p className="text-xl md:text-2xl font-light text-white/70">Full Stack Developer • OS v1.0</p>
                    </motion.div>
                )}
            </div>

            {/* 3. WINDOWS (Placeholder) */}
            {/* <AnimatePresence> ... Windows will be rendered here ... </AnimatePresence> */}

            {/* 4. DOCK NAVIGATION */}
            <Dock onOpenApp={handleOpenApp} />

        </div>
    );
}
