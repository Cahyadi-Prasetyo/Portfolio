import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Square } from 'lucide-react';
import { useWindowManager } from '../../context/WindowManagerContext';
import { useRef } from 'react';

interface WindowProps {
    id: string;
    title: string;
    children: React.ReactNode;
    initialPosition?: { x: number; y: number };
    initialSize?: { width: number | string; height: number | string };
}

export default function Window({ id, title, children, initialPosition = { x: 100, y: 50 }, initialSize = { width: 'min(800px, 90vw)', height: 'min(600px, 80vh)' } }: WindowProps) {
    const { windows, closeApp, focusWindow, minimizeWindow, activeWindowId } = useWindowManager();
    const windowState = windows[id];
    const constraintsRef = useRef(null);

    if (!windowState || !windowState.isOpen) return null;

    const isActive = activeWindowId === id;

    return (
        <AnimatePresence mode='popLayout'>
            {windowState.isOpen && !windowState.isMinimized && (
                <motion.div
                    drag
                    dragMomentum={false}
                    initial={{ scale: 0.9, opacity: 0, x: initialPosition.x, y: initialPosition.y }}
                    animate={{ scale: 1, opacity: 1, zIndex: windowState.zIndex }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    onDragStart={() => focusWindow(id)}
                    onClick={() => focusWindow(id)}
                    className="absolute rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900/60 backdrop-blur-2xl flex flex-col min-w-[300px] min-h-[200px] ring-1 ring-white/5"
                    style={{
                        width: initialSize.width,
                        height: initialSize.height,
                        boxShadow: isActive ? '0 0 0 1px rgba(255,255,255,0.1), 0 25px 50px -12px rgba(0, 0, 0, 0.5)' : '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
                    }}
                >
                    {/* Noise Overlay */}
                    <div className="absolute inset-0 bg-noise pointer-events-none opacity-50 z-0" />

                    {/* Title Bar */}
                    <div
                        className={`h-11 flex items-center justify-between px-4 select-none cursor-grab active:cursor-grabbing border-b border-white/5 relative z-10 transition-colors duration-200 ${isActive ? 'bg-white/5' : 'bg-transparent'}`}
                        onPointerDown={() => focusWindow(id)}
                    >
                        <div className="flex items-center gap-2">
                            {/* Mac-style Traffic Lights */}
                            <button onClick={(e) => { e.stopPropagation(); closeApp(id); }} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center group">
                                <X size={8} className="text-black/50 opacity-0 group-hover:opacity-100" />
                            </button>
                            <button onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }} className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center group">
                                <Minus size={8} className="text-black/50 opacity-0 group-hover:opacity-100" />
                            </button>
                            <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center group">
                                <Square size={6} className="text-black/50 opacity-0 group-hover:opacity-100 fill-black/50" />
                            </button>
                        </div>

                        <div className="text-xs font-medium text-white/70">{title}</div>

                        <div className="w-14" /> {/* Spacer for centering */}
                    </div>

                    {/* Window Content */}
                    <div className="flex-1 overflow-auto p-4 text-white relative">
                        {/* Overlay to catch clicks if window is inactive (optional, makes it easier to focus) */}
                        {!isActive && <div className="absolute inset-0 z-10 bg-transparent" />}
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
