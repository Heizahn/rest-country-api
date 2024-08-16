export default function Population({ population }: { population: number }) {
	return (
		<p>
			<strong>Population:</strong>{' '}
			{population
				.toString()
				.split('')
				.reverse()
				.reduce((a, b, i) => {
					if (i % 3 === 0 && i !== 0) {
						return a + '.' + b;
					} else {
						return a + b;
					}
				})
				.split('')
				.reverse()
				.join('')}
		</p>
	);
}
