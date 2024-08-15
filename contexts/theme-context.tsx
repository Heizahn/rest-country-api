'use client';

import { createContext, useEffect, useState } from 'react';

export const themeOptions = ['light', 'dark', 'auto'] as const;

export type Theme = (typeof themeOptions)[number];

type InitialState = {
	theme: Theme;
	changeTheme: (selectedTheme: Theme) => void;
};

const DEFAULT_THEME = 'auto';
const initialState: InitialState = {
	theme: DEFAULT_THEME,
	changeTheme: () => {},
};

export const ThemeContext = createContext(initialState);

export default function ThemeContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

	useEffect(() => {
		const systemTheme = window.matchMedia('( prefers-color-scheme: dark )');

		if (theme === 'auto') {
			systemTheme.matches ? setTheme('dark') : setTheme('light');
		}

		systemTheme.addEventListener('change', (event) => {
			setTheme(event.matches ? 'dark' : 'light');
		});

		if (theme === 'dark') {
			document.body.classList.add('dark');
		}

		if (theme === 'light') {
			document.body.classList.remove('dark');
		}
	}, [theme]);

	const value = {
		theme,
		changeTheme: (selectedTheme: Theme) => {
			setTheme(selectedTheme);
		},
	};
	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
