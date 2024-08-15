'use client';

import { createContext, useEffect, useState } from 'react';

type InitialState = {
	filter: string;
	changeFilter: (selectedFilter: string) => void;
};

const initialState: InitialState = {
	filter: '',
	changeFilter: () => {},
};

export const FilterContext = createContext(initialState);

export default function FilterContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [filter, setFilter] = useState('');

	const value = {
		filter,
		changeFilter: (selectedFilter: string) => {
			setFilter(selectedFilter);
		},
	};
	return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}
