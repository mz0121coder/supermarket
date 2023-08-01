export default function Cart(props) {
	return !props.cart.length ? (
		<div className='cart-layout'>
			<div>
				<h1>Your Cart</h1>
				<p>You have not added any product to your cart yet.</p>
			</div>
		</div>
	) : (
		<table class='table table-cart'>
			<thead>
				<tr>
					<th width='25%' class='th-product'>
						Product
					</th>
					<th width='20%'>Unit price</th>
					<th width='10%'>Quantity</th>
					<th width='25%'>Total</th>
				</tr>
			</thead>
			<tbody>
				{props.cart.map((product, index) => (
					<tr key={index}>
						<td>
							<img width='30' height='30' alt='' src={product.image} />
							{product.name}
						</td>
						<td>${product.price}</td>
						<td>{product.quantity}</td>
						<td>
							<strong>${product.price * product.quantity}</strong>
						</td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
					<th colSpan='2'></th>
					<th class='cart-highlight'>
						{props.cart.reduce((acc, curr) => acc + curr.quantity, 0)}
					</th>
					<th class='cart-highlight'>
						$
						{props.cart.reduce(
							(acc, curr) => acc + curr.price * curr.quantity,
							0
						)}
					</th>
				</tr>
			</tfoot>
		</table>
	);
}
