import ThemeMode from './theme-mode';

export default function Header() {
	return (
		<>
			<header className='px-4 py-8 w-full bg-t-white text-text-light dark:text-white dark:bg-dark-blue shadow-md'>
				<div className='flex justify-between mx-auto md:max-w-[1440px] md:[&_h1]:text-2xl '>
					<h1 className='text-base font-bold '>Where in the world?</h1>
					<div className='text-base'>
						<ThemeMode />
					</div>
				</div>
			</header>
		</>
	);
}
