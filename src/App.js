import './App.css';
import { Routes, Route} from "react-router-dom";
import {Home,Wishlist} from "./Pages/index";
import {Navigation,Footer} from "./component/index";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Wishlist' element={<Wishlist/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
