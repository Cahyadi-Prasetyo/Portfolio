import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '../lang/en';
import id from '../lang/id';

type Language = 'EN' | 'ID';
type Translations = typeof en;

interface LanguageContextType {
    language: Language;
    t: Translations;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
    EN: en,
    ID: id,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>(() => {
        // Get from localStorage on initial load
        const saved = localStorage.getItem('portfolio-language');
        return (saved as Language) || 'ID'; // Default to Indonesian
    });

    // Save to localStorage whenever language changes
    useEffect(() => {
        localStorage.setItem('portfolio-language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguageState(prev => prev === 'ID' ? 'EN' : 'ID');
    };

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, t, toggleLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
