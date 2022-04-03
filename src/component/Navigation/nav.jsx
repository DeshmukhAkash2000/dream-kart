import {Link} from "react-router-dom";
import "./nav.css"
import {useProductContext} from "../Context/protuctContext";

const Navigation = () => {

  const { productDispatch } = useProductContext();

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
                <a href="/login/login.html">Login</a>
              </button>
            </li>
            <li>
              <a className="wishlist-btn btn" href="/wishlist/wishlist.html">
                &#9825;<span className="badge-wishlist">5</span>
              </a>

            </li>
            <li>
              <a className="add-cart-btn btn" href="/my-cart/my-cart.html">
                {" "}
                &#128722; <span className="badge-wishlist">2</span>
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  };
  
  export { Navigation };
  