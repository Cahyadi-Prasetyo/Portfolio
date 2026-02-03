import { useState, useEffect } from 'react';
import Dock from './Dock';
import Window from './Window';
import { motion, AnimatePresence } from 'framer-motion';
import { WindowManagerProvider, useWindowManager } from '../../context/WindowManagerContext';

// Inner component to use the context
function DesktopContent() {
    const { openApp } = useWindowManager();
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const wallpaper = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black selection:bg-purple-500 selection:text-white font-sans text-sm">

            {/* 1. Wallpaper */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${wallpaper})` }}
            >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[0px]" />
            </div>

            {/* 2. Top Bar */}
            <div className="absolute top-0 left-0 w-full h-8 bg-black/20 backdrop-blur-md flex items-center justify-between px-4 z-50 border-b border-white/5 text-white shadow-sm">
                <div className="flex items-center gap-4 font-medium">
                    <span className="font-bold text-base"></span>
                    <span className="hidden sm:inline font-bold">CahyadiOS</span>
                    <span className="cursor-default opacity-80 hover:opacity-100 transition-opacity">File</span>
                    <span className="cursor-default opacity-80 hover:opacity-100 transition-opacity">View</span>
                    <span className="cursor-default opacity-80 hover:opacity-100 transition-opacity">Go</span>
                </div>
                <div className="flex items-center gap-4 font-medium">
                    <span className="hidden sm:inline opacity-80">100% 🔋</span>
                    <span>{currentTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                    <span>{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            </div>

            {/* 3. Windows Layer */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="relative w-full h-full pointer-events-auto">
                    {/* EXAMPLE WINDOWS - Logic connected to Dock */}
                    <Window id="about" title="About Me - Profile">
                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-4">Cahyadi Prasetyo</h2>
                            <p>Welcome to my OS-style portfolio! This window is draggable.</p>
                            <p className="mt-4 text-gray-400">Try opening other apps from the dock.</p>
                        </div>
                    </Window>

                    <Window id="projects" title="My Projects" initialPosition={{ x: 150, y: 100 }}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-32 bg-white/10 rounded-lg animate-pulse"></div>
                            <div className="h-32 bg-white/10 rounded-lg animate-pulse"></div>
                            <div className="h-32 bg-white/10 rounded-lg animate-pulse"></div>
                            <div className="h-32 bg-white/10 rounded-lg animate-pulse"></div>
                        </div>
                    </Window>

                    <Window id="terminal" title="Terminal - zsh" initialPosition={{ x: 200, y: 150 }}>
                        <div className="font-mono text-xs md:text-sm">
                            <p className="text-green-400">➜  ~  <span className="text-white">whoami</span></p>
                            <p className="mb-2">cahyadi_dev</p>
                            <p className="text-green-400">➜  ~  <span className="text-white">echo "Hello World"</span></p>
                            <p>Hello World</p>
                            <p className="text-green-400 animate-pulse">➜  ~  <span className="inline-block w-2 h-4 bg-gray-500 ml-1 align-middle"></span></p>
                        </div>
                    </Window>

                </div>
            </div>

            {/* 4. Desktop Icons (Z-Index 0) */}
            <div className="absolute inset-0 z-0 pt-12 p-6 pointer-events-none">
                {/* Icons code can go here */}
            </div>


            {/* 5. Dock */}
            <Dock onOpenApp={openApp} />

        </div>
    );
}

// Main Wrapper with Provider
export default function Desktop() {
    return (
        <WindowManagerProvider>
            <DesktopContent />
        </WindowManagerProvider>
    );
}
