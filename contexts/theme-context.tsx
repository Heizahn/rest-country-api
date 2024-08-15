'use client';

import { createContext, useEffect, useState } from 'react';

const themeOptions = ['light', 'dark'] as const;

type Theme = (typeof themeOptions)[number];

type InitialState = {
	theme: Theme;
	changeTheme: (selectedTheme: Theme) => void;
};

const DEFAULT_THEME = 'light';
const initialState: InitialState = {
	theme: DEFAULT_THEME,
	changeTheme: () => {},
};

export const ThemeContext = createContext(initialState);

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
	useEffect(() => {
		if (theme === 'dark') {
			document.body.classList.add('dark');
		} else if (theme === 'light') {
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

export default ThemeContextProvider;
