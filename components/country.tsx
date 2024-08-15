import Image from 'next/image';

export default function Country({ country }: { country: any }) {
	return (
		<div className='w-full bg-white dark:bg-dark-blue shadow-md rounded-lg p-8'>
			<Image
				src={country.flag}
				alt={country.name}
				className='w-full h-40 object-cover rounded-lg'
				width={200}
				height={200}
			/>
			<div className='mt-4'>
				<h1 className='text-xl font-bold text-text-light dark:text-t-white'>
					{country.name}
				</h1>
				<p className='text-text-light dark:text-t-white'>{country.capital}</p>
			</div>
		</div>
	);
}
