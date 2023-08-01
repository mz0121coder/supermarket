import { useOutletContext } from 'react-router-dom';
import Button from '../../../Button/Button';

export default function ProductDetailsInfo(props) {
	const product = useOutletContext();
	// console.log(product);
	return (
		<>
			<p>
				{product.description} sold at <strong>${product.price}</strong> per
				piece.
			</p>
			<Button onClick={() => props.handleProductAdd(product)}>
				${product.price}
			</Button>
		</>
	);
}
