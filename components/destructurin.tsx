export default function Destructuring({ object }: any) {
	return (
		<>
			{object?.map((item: any, index: any) => {
				return <span key={index}> {item.name}</span>;
			})}
		</>
	);
}
