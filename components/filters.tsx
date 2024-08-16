'use client';
import useFilter from '@/hooks/useFilter';
import { FaSearch } from 'react-icons/fa';

export default function Filters() {
	const { filter, changeFilter } = useFilter();
	return (
		<section className='flex flex-col px-4 gap-8 mt-14 mx-auto md:flex-row md:justify-between md:max-w-[1440px]'>
			<div className='flex items-center justify-center gap-8 bg-t-white dark:bg-dark-blue py-3 px-6 md:px-9 rounded-lg shadow-md'>
				<FaSearch className='text-base text-text-light dark:text-white' />
				<input
					className='outline-none text-text-light dark:text-t-white dark:bg-dark-blue px-2 py-1'
					type='text'
					placeholder='Search for a country'
					onChange={(e) => {
						changeFilter(e.target.value);
					}}
				/>
			</div>

			<select
				defaultValue={''}
				className='bg-t-white dark:bg-dark-blue w-3/5 px-4 py-3 rounded-lg shadow-md text-text-light dark:text-t-white md:w-60 md:py-4'
				onChange={(e) => {
					changeFilter(e.target.value);
				}}
			>
				<option value='' hidden disabled>
					Filter by Region
				</option>
				<option value='Africa'>Africa</option>
				<option value='Americas'>Americas</option>
				<option value='Asia'>Asia</option>
				<option value='Europe'>Europe</option>
				<option value='Oceania'>Oceania</option>
			</select>
		</section>
	);
}
