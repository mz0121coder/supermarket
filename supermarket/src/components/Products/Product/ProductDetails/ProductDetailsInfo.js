import { useOutletContext } from 'react-router-dom';
import Button from '../../../Button/Button';

export default function ProductDetailsInfo() {
	const product = useOutletContext();
	// console.log(product);
	return (
		<>
			<p>
				{product.description} sold at <strong>${product.price}</strong> per
				piece.
			</p>
			<Button>${product.price}</Button>
		</>
	);
}
