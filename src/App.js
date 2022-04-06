import './App.css';
import { Routes, Route} from "react-router-dom";
import {Home,Wishlist,AllProduct} from "./Pages/index";
import {Navigation,Footer} from "./component/index";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Wishlist' element={<Wishlist/>}></Route>
        <Route path='/AllProduct' element={<AllProduct/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
