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

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
    <AuthContextProvider>
    <CartProvider>
      <ScrollToTop />
        <MyNavbar />
            <Routes>
                <Route path='/signup' element={<SignupScreen/>} />
                <Route path='/signin' element={<SigninScreen/>} />
                <Route path='/cart' element={<CartScreen/>} />
                <Route path='/checkout' element={<CheckoutScreen/>} />
                <Route path='/payment' element={<PaymentScreen/>} />
                <Route path='/place-order' element={<PlaceOrderScreen/>} />
                <Route path="/producto/:slug" element={<ItemDetails />} />

                <Route path="/" element={<HomeScreen/>}></Route>
            </Routes>
        <MyFooter />
        </CartProvider>
    </AuthContextProvider>
    </>
  );
}

export default App;
