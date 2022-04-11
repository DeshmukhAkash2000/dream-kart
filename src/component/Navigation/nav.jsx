import {Link} from "react-router-dom";
import "./nav.css"
import {useProductContext} from "../Context/protuctContext";
import { useWishListCartContext } from "../Context/Cart-And-Wishlist";

const Navigation = () => {

  const { productDispatch } = useProductContext();
  const { wishListCartValues:{
    wishlist, cart
  }} = useWishListCartContext();
    return (
      <>
        <nav className="navigation-bar">
          <div className="navtitle-container">
          <Link className="title" to="/">
            DreamKKart
          </Link>
          <p id="lower-title">Fullfill Your Dreams With Us!</p>
          </div>
          <input onChange={(e)=> {productDispatch({type: "SEARCH", payload: e.target.value })}} className="search-bar" type="text" placeholder="Search" />
          <ul className="side-nav-section">
            <li>
              <button className="login-btn">
                <a href="/Login">Login</a>
              </button>
            </li>
            <li>
              <Link className="wishlist-btn btn" to="/WishList">
                &#9825;<span className="badge-wishlist" style={{display:wishlist.length>0? "": "none"}}>{wishlist.length}</span>
              </Link>

            </li>
            <li>
              <Link className="add-cart-btn btn" to="/cart">
                {" "}
                &#128722; <span className="badge-wishlist" style={{display:cart.length>0? "": "none"}}>{cart.length}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  };
  
  export { Navigation };
  