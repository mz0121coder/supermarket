import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
	return (
		<BrowserRouter>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/products' element={<Products />}></Route>
					<Route path='/products/:id' element={<ProductDetails />}>
						<Route
							path='nutrition'
							element={<ProductDetailNutrition />}></Route>
						<Route path='' element={<ProductDetailsInfo />}></Route>
						<Route path='storage' element={<ProductDetailStorage />}></Route>
					</Route>
					<Route path='/cart' element={<Cart />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}
