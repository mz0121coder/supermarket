import Button from '../../Button/Button';
import { Link } from 'react-router-dom';
export default function Product(props) {
	return (
		<div className='product'>
			<div className='product-image-container'>
				<Link to={`${props.id}`}>
					<img
						src={props.image}
						width='100'
						height='100'
						className='product-image'
						alt='product name here'
					/>
				</Link>
				<div className='product-quantity-container'>
					<div className='product-quantity'>0</div>
				</div>
			</div>
			<div className='product-info'>
				<h3>{props.name}</h3>
				<p>{props.description}</p>
			</div>
			<div className='product-checkout'>
				<div>
					<Button
						onClick={props.handleProductDelete}
						className='btn-outline product-delete'>
						x
					</Button>
				</div>
				<Button className='btn-outline' onClick={props.handleProductAdd}>
					${props.price}
				</Button>
			</div>
		</div>
	);
}
