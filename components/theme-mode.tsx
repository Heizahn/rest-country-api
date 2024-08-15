'use client';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';

import useTheme from '@/hooks/useTheme';

export default function ThemeMode() {
	const { theme, changeTheme } = useTheme();

	return (
		<>
			{theme === 'light' ? (
				<button className='flex items-center gap-3' onClick={() => changeTheme('dark')}>
					<FaRegMoon />
					Dark Mode
				</button>
			) : (
				<button className='flex items-center gap-3' onClick={() => changeTheme('light')}>
					<FaRegSun />
					Light Mode
				</button>
			)}
		</>
	);
}
