import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';

export default function ProductDetails(props) {
	const [product, setProduct] = useState({});
	const params = useParams();
	console.log(params);

	useEffect(() => {
		fetch(
			`https://react-tutorial-demo.firebaseio.com/productinfo/id${params.id}.json`
		)
			.then(response => response.json())
			.then(data => {
				if (data) {
					console.log(data);
					setProduct(data);
				}
			})
			.catch(error => console.log('Could not load product details', error));
	}, []);

	return (
		<div className='product-details-layout'>
			<div>
				<h2>{product.name}</h2>
				<img
					width='125'
					height='125'
					className='product-details-image'
					alt={product.name}
					src={product.image}
				/>
			</div>
			<div>
				<div className='tabs'>
					<ul>
						<li>
							<NavLink
								to=''
								className={({ isActive }) => (isActive ? 'tab-active' : '')}
								end>
								Details
							</NavLink>
						</li>
						<li>
							<NavLink
								to='nutrition'
								className={({ isActive }) => (isActive ? 'tab-active' : '')}>
								Nutrition
							</NavLink>
						</li>
						<li>
							<NavLink
								to='storage'
								className={({ isActive }) => (isActive ? 'tab-active' : '')}>
								Storage
							</NavLink>
						</li>
					</ul>
				</div>
				<Outlet context={product} />
			</div>
		</div>
	);
}
