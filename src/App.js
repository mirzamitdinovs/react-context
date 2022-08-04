import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { CheckoutProvider } from './context/CheckoutContext';
import CheckoutPage from './pages/CheckoutPages';
import { ProductsPage } from './pages/Products';

function App() {
	return (
		<div>
			<CheckoutProvider>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path='/' element={<ProductsPage />} />
						<Route path='/checkout' element={<CheckoutPage />} />
					</Routes>
				</BrowserRouter>
			</CheckoutProvider>
		</div>
	);
}

export default App;
