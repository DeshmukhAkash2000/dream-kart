import './App.css';
import { Routes, Route} from "react-router-dom";
import {Home, WishList, AllProduct, CartPage, Login, SignUp} from "./Pages/index";
import {Navigation,Footer} from "./component/index";
import {PaymentInt} from "./Pages/Payment-Int/Payment_int"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/AllProduct' element={<AllProduct/>}></Route>
        <Route path="/wishlist" element={<WishList />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/paymentInt" element={<PaymentInt />}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
