import Image from 'next/image';
import Link from 'next/link';
import Population from './population';

export default function Country({ country }: { country: any }) {
	return (
		<Link
			href={`/${country.alpha3Code.toLowerCase()}`}
			className='w-80 m-auto bg-white dark:bg-dark-blue shadow-md rounded-lg  transition duration-300 hover:scale-110'
		>
			<div className='relative object-contain w-full h-48 rounded-s-lg'>
				<Image
					src={country.flags.svg}
					alt={country.name}
					fill={true}
					className='rounded-t-lg'
					priority={true}
				/>
			</div>
			<div className='p-8 text-text-light dark:text-t-white'>
				<h2 className='text-xl font-bold '>
					{country.name.length > 16 ? country.name.slice(0, 16) + '...' : country.name}
				</h2>
				<div className='flex flex-col gap-1 pt-5 pb-6'>
					<Population population={country.population} />

					<p>
						<strong>Region:</strong> {country.region}
					</p>

					<p>
						<strong>Capital:</strong> {country.capital}
					</p>
				</div>
			</div>
		</Link>
	);
}
