import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
	return (
		<nav className='navbar'>
			<NavLink to='/' className='nav-brand'>
				SuperM
			</NavLink>
			<ul>
				<li className='nav-item'>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? 'active' : '')}>
						Home
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						to='/about'
						className={({ isActive }) => (isActive ? 'active' : '')}>
						About us
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						to='/products'
						className={({ isActive }) => (isActive ? 'active' : '')}>
						Products
					</NavLink>
				</li>
				<li>
					<NavLink to='/cart' className='nav-item nav-cart btn btn-accent'>
						Cart ({props.cart.length})
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
