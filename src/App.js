import './App.css';
import { Routes, Route} from "react-router-dom";
import {Home, WishList, AllProduct, CartPage, Login, SignUp} from "./Pages/index";
import {Navigation,Footer} from "./component/index";

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
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
