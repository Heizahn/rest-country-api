import Link from 'next/link';
import data from '@/data.json';

export default function Borders({ borders }: { borders: Array<string> | [] }) {
	return (
		<>
			{borders.map((border, index) => {
				let name = data.find(
					(country) => country.alpha3Code.toLowerCase() === border.toLowerCase(),
				)?.name;

				return (
					<Link className='mt-2' key={index} href={`/${border.toLowerCase()}`}>
						<span className='bg-t-white dark:bg-dark-blue shadow-sm px-6 py-2 rounded-md hover:scale-105 transition duration-300 text-lg '>
							{name?.replace(name[0], name[0].toUpperCase())}
						</span>
					</Link>
				);
			})}
		</>
	);
}
