import './App.css';
import { MyNavbar } from './components/Navbar/Navbar.jsx'; 
import { MyFooter } from './components/Footer/Footer.jsx'; 
import { AuthContextProvider } from './context/AuthContext';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import SignupScreen from './screens/SignupScreen.jsx';
import SigninScreen from './screens/SigninScreen.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import CartScreen from './screens/CartScreen.jsx';
import { CheckoutScreen } from './screens/CheckoutScreen.jsx';
import { PaymentScreen } from './screens/PaymentScreen.jsx';
import { ItemDetails } from './components/ItemDetails/ItemDetails.jsx';
import { PlaceOrderScreen } from './screens/PlaceOrderScreen.jsx';
import CategoriasScreen from './screens/CategoriasScreen.jsx';
import 'react-tippy/dist/tippy.css'
// import 'flowbite-react/dist/index.css';


import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { OrderScreen } from './screens/OrderScreen.jsx';
import { OrdersScreen } from './screens/OrdersScreen.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
    <CartProvider>
    <AuthContextProvider>
      <ScrollToTop />
        <MyNavbar />
            <Routes>
                <Route path='/signup' element={<SignupScreen/>} />
                <Route path='/signin' element={<SigninScreen/>} />
                <Route path='/cart' element={<CartScreen/>} />
                <Route path='/checkout' element={<CheckoutScreen/>} />
                <Route path='/order/:id' element={<OrderScreen/>} />
                <Route path='/orders' element={<OrdersScreen/>} />
                <Route path='/payment' element={<PaymentScreen/>} />
                <Route path='/place-order' element={<PlaceOrderScreen/>} />
                <Route path="/producto/:slug" element={<ItemDetails />} />
                <Route path='/categorias/:categoria' element={<CategoriasScreen />} />


                <Route path="/" element={<HomeScreen/>}></Route>
            </Routes>
        <MyFooter />
    </AuthContextProvider>
    </CartProvider>

    </>
  );
}

export default App;
