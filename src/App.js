import './App.css';
import { Routes, Route} from "react-router-dom";
import {Home, WishList, AllProduct} from "./Pages/index";
import {Navigation,Footer} from "./component/index";
import {RendingCart} from "./component/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        {/* <Route path='/Wishlist' element={<Wishlist/>}></Route> */}
        <Route path='/AllProduct' element={<AllProduct/>}></Route>
        <Route path="wishlist" element={<WishList />}/>
        <Route path="cart" element={<RendingCart />}/>
        {/* <Route path=''/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
