import { useState, useEffect } from 'react';
import Product from './Product/Product';
import Loader from '../Loader/Loader';

export default function Products() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://react-tutorial-demo.firebaseio.com/supermarket.json')
			.then(response => response.json())
			.then(data => {
				if (data) {
					console.log(data);
					setProducts(data);
				}
			})
			.catch(error => console.log('Could not load products', error))
			.finally(() => setLoading(false));
	}, []);

	return loading ? (
		<Loader />
	) : (
		<div className='products-layout'>
			<h1>Products</h1>
			<p>Take a look at our products</p>
			<div className='products-grid'>
				{products.map((product, index) => (
					<Product
						key={index}
						id={product.id}
						image={product.image}
						name={product.name}
						price={product.price}
						description={product.description}
					/>
				))}
			</div>
		</div>
	);
}
