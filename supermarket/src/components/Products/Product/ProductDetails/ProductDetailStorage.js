import { useOutletContext } from 'react-router-dom';
export default function ProductDetailStorage() {
	const product = useOutletContext();
	// console.log(product);
	return (
		<>
			<p>
				<strong>Storage instructions:</strong> {product.storage}
			</p>
		</>
	);
}
