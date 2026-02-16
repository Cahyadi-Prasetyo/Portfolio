import { writable, derived } from 'svelte/store';
import { translations, type Language } from './translations';

export const currentLang = writable<Language>('id');

export const t = derived(currentLang, ($lang) => translations[$lang]);

export function toggleLanguage() {
    currentLang.update((lang) => (lang === 'id' ? 'en' : 'id'));
}

export { type Language };
