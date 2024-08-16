import Link from 'next/link';

export default function NotFound() {
	return (
		<section className='flex flex-col items-center justify-center h-[calc(100vh-96px)] text-text-light dark:text-t-white'>
			<h2 className='text-4xl'>Country not found</h2>
			<h4 className='text-2xl'>Please, try again</h4>

			<Link
				className='mt-8 px-2 py-1 rounded-lg bg-t-white dark:bg-dark-blue shadow-sm hover:scale-105 transition duration-300'
				href='/'
			>
				{' '}
				Home{' '}
			</Link>
		</section>
	);
}
