import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
    children: React.ReactNode;
}

// Map paths to display names
const pageNames: Record<string, string> = {
    '/': 'Home',
    '/projects': 'Projects',
    '/about': 'About Me',
    '/contact': 'Contact',
};

export default function PageTransition({ children }: PageTransitionProps) {
    const location = useLocation();
    const currentPageName = pageNames[location.pathname] || 'Page';

    // Timing constants
    const slideUpDuration = 1.2;
    const slideUpHold = 0.3; // Hold at top before slide out
    const slideOutDelay = slideUpDuration + slideUpHold; // Wait for slide up to complete
    const slideOutDuration = 0.8;
    const contentDelay = slideOutDelay + slideOutDuration - 0.2; // Appear as slide out finishes

    return (
        <>
            {/* STEP 1: Slide UP - enters from bottom, covers screen */}
            <motion.div
                initial={{ y: '100%' }}
                animate={{
                    y: ['100%', '0%', '0%', '-100%'],
                    transition: {
                        duration: slideUpDuration + slideUpHold + 0.5,
                        times: [0, 0.4, 0.55, 1], // Enter, hold, then exit up
                        ease: [0.76, 0, 0.24, 1],
                    }
                }}
                className="fixed inset-0 z-[99999] bg-black flex items-center justify-center pointer-events-none overflow-hidden"
                style={{
                    clipPath: 'ellipse(120% 100% at 50% 100%)',
                }}
            >
                {/* Page name text */}
                <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        y: [30, 0, 0, -30],
                        transition: {
                            duration: slideUpDuration + slideUpHold + 0.5,
                            times: [0, 0.35, 0.6, 1],
                            ease: 'easeInOut',
                        }
                    }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide text-gray-500 uppercase"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                >
                    {currentPageName}
                </motion.span>
            </motion.div>

            {/* STEP 2: Slide OUT - reveals page AFTER slide up finishes */}
            <motion.div
                initial={{ y: '0%' }}
                animate={{ y: '-100%' }}
                transition={{
                    duration: slideOutDuration,
                    delay: slideOutDelay, // Wait for slide up to fully cover screen
                    ease: [0.76, 0, 0.24, 1],
                }}
                className="fixed inset-0 z-[99998] bg-black pointer-events-none"
                style={{
                    clipPath: 'ellipse(120% 100% at 50% 0%)',
                }}
            />

            {/* STEP 3: Page Content - appears after slide out */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        delay: contentDelay,
                        ease: 'easeOut',
                    }
                }}
                className="w-full"
            >
                {children}
            </motion.div>
        </>
    );
}
