import { motion } from "framer-motion";
import { User, Code, Terminal, Settings, Mail } from "lucide-react";
import { useState } from "react";

interface DockProps {
    onOpenApp: (appName: string) => void;
}

export default function Dock({ onOpenApp }: DockProps) {
    const apps = [
        { id: "profile", name: "Profile", icon: User, color: "bg-blue-500" },
        { id: "projects", name: "Projects", icon: Code, color: "bg-purple-500" },
        { id: "terminal", name: "Terminal", icon: Terminal, color: "bg-gray-800" },
        { id: "contact", name: "Contact", icon: Mail, color: "bg-green-500" },
        // { id: "settings", name: "Settings", icon: Settings, color: "bg-gray-500" },
    ];

    const [hoveredApp, setHoveredApp] = useState<string | null>(null);

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
            {/* Glassmorphism Dock Background */}
            <div className="flex items-end gap-3 px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
                {apps.map((app) => (
                    <div key={app.id} className="relative flex flex-col items-center gap-2 group">

                        {/* Tooltip */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: hoveredApp === app.id ? 1 : 0, y: hoveredApp === app.id ? 0 : 10 }}
                            className="absolute -top-12 bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap pointer-events-none"
                        >
                            {app.name}
                        </motion.div>

                        {/* App Icon */}
                        <motion.button
                            layoutId={app.id}
                            onMouseEnter={() => setHoveredApp(app.id)}
                            onMouseLeave={() => setHoveredApp(null)}
                            onClick={() => onOpenApp(app.id)}
                            whileHover={{ scale: 1.2, y: -10 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-lg text-white ${app.color} transition-colors`}
                        >
                            <app.icon size={24} strokeWidth={2} />
                        </motion.button>

                        {/* Active Dot indicator (Placeholder for logic) */}
                        <div className="w-1 h-1 bg-white/50 rounded-full opacity-0 group-active:opacity-100" />
                    </div>
                ))}
            </div>
        </div>
    );
}
