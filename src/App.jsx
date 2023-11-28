import './App.css';
import { MyNavbar } from './components/Navbar/Navbar.jsx'; 
import { MyFooter } from './components/Footer/Footer.jsx'; 
import { AuthContextProvider } from './context/AuthContext';
import { Routes, Route } from 'react-router-dom';

import SignupScreen from './screens/SignupScreen.jsx';
import SigninScreen from './screens/SigninScreen.jsx';
import HomeScreen from './screens/HomeScreen.jsx';


function App() {
  return (
    <>
    <AuthContextProvider>
    
        <MyNavbar />
            <Routes>
                <Route path='/signup' element={<SignupScreen/>} />
                <Route path='/signin' element={<SigninScreen/>} />
                <Route path="/" element={<HomeScreen/>}></Route>
            </Routes>
        <MyFooter />

    </AuthContextProvider>
    </>
  );
}

export default App;
