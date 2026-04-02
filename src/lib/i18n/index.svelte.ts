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

// Svelte 5 runes-based reactive state
let lang = $state<Language>('id');

export function getCurrentLang(): Language {
    return lang;
}

export function setLang(newLang: Language) {
    lang = newLang;
}

export function toggleLanguage() {
    lang = lang === 'id' ? 'en' : 'id';
}

export function getTranslations() {
    return translations[lang];
}

export { type Language };
