import { translations, type Language } from './translations';

export interface ExperienceHighlight {
    title: string;
    desc: string;
}

export interface Experience {
    period: string;
    role: string;
    company: string;
    desc: string;
    highlights: ExperienceHighlight[];
}

const LANG_KEY = 'portfolio-lang';

// Svelte 5 runes-based reactive state
let lang = $state<Language>('id');

export function initLang() {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'id' || saved === 'en') {
        lang = saved;
    }
}

export function getCurrentLang(): Language {
    return lang;
}

export function setLang(newLang: Language) {
    lang = newLang;
    if (typeof window !== 'undefined') {
        localStorage.setItem(LANG_KEY, newLang);
    }
}

export function toggleLanguage() {
    setLang(lang === 'id' ? 'en' : 'id');
}

export function getTranslations() {
    return translations[lang];
}

export { type Language };
