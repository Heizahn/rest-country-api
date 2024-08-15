'use client';
import useFilter from '@/hooks/useFilter';
import data from '@/data.json';
import { useEffect, useState } from 'react';
import Country from './country';

export default function Countries() {
	const { filter } = useFilter();

	const [filterCountry, setFilterCountry] = useState(data);

	useEffect(() => {
		if (filter) {
			const filteredCountry = data.filter(
				(country) =>
					country.region.toLowerCase().includes(filter.toLowerCase()) ||
					country.subregion.toLowerCase().includes(filter.toLowerCase()) ||
					country.capital?.toLowerCase().includes(filter.toLowerCase()) ||
					country.name.toLowerCase().includes(filter.toLowerCase()),
			);
			setFilterCountry(filteredCountry);
		} else {
			setFilterCountry(data);
		}
	}, [filter]);

	return (
		<section className='grid grid-cols-1 gap-8 mt-14 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:max-w-[1440px]'>
			{filterCountry &&
				filterCountry.map((country) => (
					<Country key={country.nativeName} country={country} />
				))}
		</section>
	);
}
