import { useState } from "react";
import Desktop from "./components/os/Desktop";
import LandingPage from "./pages/LandingPage";
import { AnimatePresence, motion } from "framer-motion";

function App() {
    const [showDesktop, setShowDesktop] = useState(false);

    return (
        <AnimatePresence mode="wait">
            {!showDesktop ? (
                <motion.div
                    key="landing"
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.5 }}
                >
                    <LandingPage onEnterDesktop={() => setShowDesktop(true)} />
                </motion.div>
            ) : (
                <motion.div
                    key="desktop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Desktop />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default App;
