import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';

export default function Navbar(props) {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	function handleThemeClick() {
		setIsDarkTheme(!isDarkTheme);
	}
	useEffect(() => {
		if (isDarkTheme) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [isDarkTheme]);

	return (
		<nav className='navbar'>
			<NavLink to='/' className='nav-brand'>
				SuperM
			</NavLink>
			<ul>
				<li className={isDarkTheme ? 'nav-item dark' : 'nav-item'}>
					<Button className='theme-switcher' onClick={handleThemeClick}>
						{isDarkTheme ? 'Dark' : 'Light'}
					</Button>
				</li>
				<li className={isDarkTheme ? 'nav-item dark' : 'nav-item'}>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? 'active' : '')}>
						Home
					</NavLink>
				</li>
				<li className={isDarkTheme ? 'nav-item dark' : 'nav-item'}>
					<NavLink
						to='/about'
						className={({ isActive }) => (isActive ? 'active' : '')}>
						About us
					</NavLink>
				</li>
				<li className={isDarkTheme ? 'nav-item dark' : 'nav-item'}>
					<NavLink
						to='/products'
						className={({ isActive }) => (isActive ? 'active' : '')}>
						Products
					</NavLink>
				</li>
				<li>
					<NavLink to='/cart' className='nav-item nav-cart btn btn-accent'>
						Cart ({props.cart})
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
