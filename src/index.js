import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import "./Pages/Wishlist/wishlist"
import App from './App';
import { makeServer } from "./server";
import { BrowserRouter} from "react-router-dom";
import { ProductListProvider} from "./component/Context/protuctContext";
import { CategoryContextProvider } from "./component/Context/category-Contexts";
import { WishlistAndCartProvider } from "./component/Context/Cart-And-Wishlist"
 
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WishlistAndCartProvider>
        <CategoryContextProvider>
          < ProductListProvider>
            <App/>
          </ ProductListProvider>
        </CategoryContextProvider>
      </WishlistAndCartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



