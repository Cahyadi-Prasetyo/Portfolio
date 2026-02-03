import { createContext, useContext, useState, ReactNode } from 'react';

type AppId = string;

interface WindowState {
    id: AppId;
    isOpen: boolean;
    isMinimized: boolean;
    zIndex: number;
}

interface WindowManagerContextType {
    windows: Record<AppId, WindowState>;
    activeWindowId: AppId | null;
    openApp: (id: AppId) => void;
    closeApp: (id: AppId) => void;
    focusWindow: (id: AppId) => void;
    minimizeWindow: (id: AppId) => void;
}

const WindowManagerContext = createContext<WindowManagerContextType | undefined>(undefined);

export function WindowManagerProvider({ children }: { children: ReactNode }) {
    const [windows, setWindows] = useState<Record<AppId, WindowState>>({});
    const [activeWindowId, setActiveWindowId] = useState<AppId | null>(null);
    const [maxZIndex, setMaxZIndex] = useState(100);

    const focusWindow = (id: AppId) => {
        setActiveWindowId(id);
        setWindows(prev => ({
            ...prev,
            [id]: { ...prev[id], zIndex: maxZIndex + 1, isMinimized: false }
        }));
        setMaxZIndex(prev => prev + 1);
    };

    const openApp = (id: AppId) => {
        setWindows(prev => {
            if (prev[id]?.isOpen) {
                // Already open, just focus it
                return prev;
            }
            return {
                ...prev,
                [id]: { id, isOpen: true, isMinimized: false, zIndex: maxZIndex + 1 }
            };
        });
        setActiveWindowId(id);
        setMaxZIndex(prev => prev + 1);
    };

    const closeApp = (id: AppId) => {
        setWindows(prev => ({
            ...prev,
            [id]: { ...prev[id], isOpen: false }
        }));
        if (activeWindowId === id) setActiveWindowId(null);
    };

    const minimizeWindow = (id: AppId) => {
        setWindows(prev => ({
            ...prev,
            [id]: { ...prev[id], isMinimized: true }
        }));
        setActiveWindowId(null);
    };

    return (
        <WindowManagerContext.Provider value={{ windows, activeWindowId, openApp, closeApp, focusWindow, minimizeWindow }}>
            {children}
        </WindowManagerContext.Provider>
    );
}

export const useWindowManager = () => {
    const context = useContext(WindowManagerContext);
    if (!context) throw new Error("useWindowManager must be used within WindowManagerProvider");
    return context;
};
