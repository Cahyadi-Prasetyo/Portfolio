import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import PageTransition from './components/PageTransition';
import ScrollProgress from './components/reactbits/ScrollProgress';

function App() {
    const location = useLocation();

    return (
        <LanguageProvider>
            <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans relative">
                <ScrollProgress />
                <Navbar />
                <main className="flex-grow">
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
                            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                        </Routes>
                    </AnimatePresence>
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    )
}


export default App
