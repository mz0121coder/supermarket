import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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
	function handleProductAdd(newProduct) {
		console.log('Adding product ' + newProduct.id);
	}

	function handleProductDelete(id) {
		console.log('Deleting product ' + id);
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
