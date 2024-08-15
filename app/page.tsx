import Countries from '@/components/countries';
import Filters from '@/components/filters';
import FilterContextProvider from '@/contexts/filter-context';
import { Suspense } from 'react';

export default function Home() {
	return (
		<main className='px-4'>
			<FilterContextProvider>
				<Filters />

				<Suspense fallback={<div>Loading...</div>}>
					<Countries />
				</Suspense>
			</FilterContextProvider>
		</main>
	);
}
