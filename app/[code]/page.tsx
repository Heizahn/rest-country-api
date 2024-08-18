import Borders from '@/components/borders';
import Destructuring from '@/components/destructurin';
import NotFound from '@/components/no-fount';
import Population from '@/components/population';
import data from '@/data.json';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function Page({ params }: { params: { code: string } }) {
	const country = data.find(
		(country) => country.alpha3Code.toLowerCase() === params.code,
	);

	return (
		<>
			{!country ? (
				<NotFound />
			) : (
				<section className='text-text-light dark:text-t-white px-6 md:px-16 pt-12 md:pt-16 flex flex-col gap-12'>
					<Link
						className='flex items-center justify-between w-28 bg-t-white dark:bg-dark-blue shadow-sm px-6 py-2 rounded-md hover:scale-105 transition duration-300 text-lg '
						href='/'
					>
						<FaArrowLeft /> Back
					</Link>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<Image
							src={country.flags.svg}
							alt={country.name}
							width={300}
							height={300}
							className='w-full mx-auto '
						/>
						<article className='flex flex-col gap-4 text-lg md:justify-center'>
							<h2 className='text-3xl font-bold md:mb-7'>{country.name}</h2>
							<div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
								<div className='flex flex-col gap-1 md:gap-2 mt-2'>
									{country.nativeName && (
										<p>
											<strong>Native name:</strong> {country.nativeName}
										</p>
									)}
									{country.population && <Population population={country.population} />}
									{country.region && (
										<p>
											<strong>Region:</strong> {country.region}
										</p>
									)}
									{country.subregion && (
										<p>
											<strong>Sub Region:</strong> {country.subregion}
										</p>
									)}
									{country.capital && (
										<p>
											<strong>Capital:</strong> {country.capital}
										</p>
									)}
								</div>

								<div className='flex flex-col gap-1 md:gap-2 mt-2'>
									{country.topLevelDomain && (
										<p>
											<strong>Top Level Domain:</strong> {country.topLevelDomain}
										</p>
									)}
									<p>
										<strong>Currencies:</strong>
										<Destructuring object={country.currencies} />
									</p>
									<p>
										<strong>Language:</strong>
										<Destructuring object={country.languages} />
									</p>
								</div>
							</div>

							<div className='grid grid-cols-1 md:grid-cols-4 gap-2 mt-2'>
								<h3 className='font-bold'>Border Countries:</h3>

								<div className='col-span-3 flex flex-wrap gap-3'>
									{country.borders?.length ? (
										<Borders borders={country.borders} />
									) : (
										<span>No border countries</span>
									)}
								</div>
							</div>
						</article>
					</div>
				</section>
			)}
		</>
	);
}
