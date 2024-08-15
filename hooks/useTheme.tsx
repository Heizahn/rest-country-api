'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/contexts/theme-context';

export default function useTheme() {
	const context = useContext(ThemeContext);

	return context;
}
