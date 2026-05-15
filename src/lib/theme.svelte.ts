const THEME_KEY = 'portfolio-theme';

export type Theme = 'light' | 'dark';

let theme = $state<Theme>('light');

export function getTheme(): Theme {
    return theme;
}

export function initTheme() {
    if (typeof window === 'undefined') return;
    
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') {
        theme = saved;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = 'dark';
    }
    
    applyTheme(theme);
}

export function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    applyTheme(theme);
}

function applyTheme(newTheme: Theme) {
    if (typeof document === 'undefined') return;
    
    if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem(THEME_KEY, newTheme);
}
