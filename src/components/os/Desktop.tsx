import { useState, useEffect } from 'react';
import { Command } from "lucide-react";
import Dock from './Dock';
import Window from './Window';
import AboutApp from '../apps/AboutApp';
import ProjectsApp from '../apps/ProjectsApp';
import TerminalApp from '../apps/TerminalApp';
import TechApp from '../apps/TechApp';
import ContactApp from '../apps/ContactApp';
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
                    <Command size={18} />
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
                    {/* APP WINDOWS - Logic connected to Dock */}
                    <Window id="about" title="About Me - Profile">
                        <AboutApp />
                    </Window>

                    <Window id="projects" title="My Projects" initialPosition={{ x: 150, y: 100 }}>
                        <ProjectsApp />
                    </Window>

                    <Window id="terminal" title="Terminal - zsh" initialPosition={{ x: 200, y: 150 }}>
                        <TerminalApp />
                    </Window>

                    <Window id="stack" title="System Architecture" initialPosition={{ x: 250, y: 50 }}>
                        <TechApp />
                    </Window>

                    <Window id="contact" title="Contact" initialPosition={{ x: 300, y: 100 }}>
                        <ContactApp />
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
