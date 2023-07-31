import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import ProductDetails from './components/Products/Product/ProductDetails/ProductDetails';
import ProductDetailNutrition from './components/Products/Product/ProductDetails/ProductDetailNutrition';
import ProductDetailsInfo from './components/Products/Product/ProductDetails/ProductDetailsInfo';
import ProductDetailStorage from './components/Products/Product/ProductDetails/ProductDetailStorage';

export default function App() {
	const [cart, setCart] = useState([]);
	useEffect(() => {
		// to visualize the cart in the console every time it changes
		// you can also use React dev tools
		console.log(cart);
	}, [cart]);

	function handleProductAdd(newProduct) {
		console.log('Adding product ' + newProduct.id);
		const existingProduct = cart.find(item => item.id === newProduct.id);
		// immutably increase quantity when an existing product is added again
		if (existingProduct) {
			setCart(
				cart.map(product =>
					product.id === newProduct.id
						? { ...product, quantity: product.quantity + 1 }
						: product
				)
			);
		}
		// add property of quantity: 1 the first time a new product is added to cart
		else {
			setCart([...cart, { ...newProduct, quantity: 1 }]);
		}
	}

	function handleProductDelete(id) {
		console.log('Deleting product ' + id);
		const newCart = cart.filter(item => item.id !== id);
		setCart(newCart);
	}

	return (
		<BrowserRouter>
			<Navbar cart={cart} />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route
						path='/products'
						element={
							<Products
								cart={cart}
								handleProductAdd={handleProductAdd}
								handleProductDelete={handleProductDelete}
							/>
						}></Route>
					<Route path='/products/:id' element={<ProductDetails />}>
						<Route
							path='nutrition'
							element={<ProductDetailNutrition />}></Route>
						<Route
							path=''
							element={
								<ProductDetailsInfo handleProductAdd={handleProductAdd} />
							}></Route>
						<Route path='storage' element={<ProductDetailStorage />}></Route>
					</Route>
					<Route path='/cart' element={<Cart cart={cart} />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}
