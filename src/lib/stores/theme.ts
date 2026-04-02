import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

function createThemeStore() {
    let initialTheme: Theme = 'light';

    if (browser) {
        const storedTheme = localStorage.getItem('theme') as Theme;
        if (storedTheme) {
            initialTheme = storedTheme;
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            initialTheme = 'dark';
        }
        applyTheme(initialTheme);
    }

    const { subscribe, set, update } = writable<Theme>(initialTheme);

    return {
        subscribe,
        toggle: () => {
            update((currentTheme) => {
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                if (browser) {
                    localStorage.setItem('theme', newTheme);
                    applyTheme(newTheme);
                }
                return newTheme;
            });
        },
        set: (theme: Theme) => {
            if (browser) {
                localStorage.setItem('theme', theme);
                applyTheme(theme);
            }
            set(theme);
        }
    };
}

function applyTheme(theme: Theme) {
    if (!browser) return;
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

export const theme = createThemeStore();
