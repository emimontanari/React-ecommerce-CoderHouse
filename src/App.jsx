import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Error404 from './Error404.jsx';
import CartContextProvider from './components/CartContext/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import FormBuyer from './components/FormBuyer/FormBuyer';

function App() {

	return (
		<CartContextProvider>
			<BrowserRouter>
				<div className="App">
					<NavBar />
					<Routes>
						<Route
							exact
							path="/"
							element={<ItemListContainer greeting="Bienvenido a Sneakers Ecommerce" />}
						/>
						<Route
							exact 
							path="/categoria/:idCategory"
							element={<ItemListContainer greeting="Bienvenido a Sneakers Ecommerce" />}
						/>
						<Route
							exact 
							path="/detalle/:idProduct"
							element={<ItemDetailContainer />}
						/>
						<Route
							exact 
							path="/cart"
							element={<Cart />}
						/>	
						<Route
							exact 
							path="/checkout"
							element={<FormBuyer />}
						/>	
						<Route
							path="*"
							element={<Error404 />}
						/>	
					</Routes>
				
				</div>
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;