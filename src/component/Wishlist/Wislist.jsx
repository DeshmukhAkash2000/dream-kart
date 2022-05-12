import "./Wishlist.css";
import { Link } from "react-router-dom";
import { useWishListCartContext } from "../Context/Cart-And-Wishlist";

const RendingWishlist = () => {
  const {
    wishListCartValues: { wishlist,cart },
    dispatchWishListCart,
  } = useWishListCartContext();

  return (
    <div className="product-container">
      <div className="container-heading">
        <h2>Your Wishlitst {wishlist.length}</h2>
      </div>

      <div className="products">
        {wishlist.map((item) => {
          return (
            <div className="wishlist-container">
              <div className="img-container">
                <img src={item.imgLink} alt="" />
              </div>
              <div className="product-detail">
                <li>{item.title}</li>
                <li>{item.brand}</li>
                <li>{item.rating}</li>
                <li>{item.categoryName}</li>
                <li>{item.ram}</li>
                <li>{item.camera}</li>
                <li>{item.battery}</li>
                <p className="wishlist-item-price">₹{item.price}</p>
                <p>₹{item.originalPrice}</p>
                {cart.some((data) => data.id === item.id) ? (
                      <Link to="/cart" className="remove-cart-btn">
                        <button className="go-to-wishlist-btn">
                          Go to Cart
                        </button>
                      </Link>
                    ) : (
                      <button
                        className="add-to-cart-btn"
                        onClick={() =>
                          dispatchWishListCart({
                            type: "ADD_TO_CART",
                            payload: item,
                          })
                        }
                      >Add to Cart</button>
                    )}
                <button
                  className="remove-from-cart-btn"
                  onClick={() =>
                    dispatchWishListCart({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: item,
                    })
                  }
                >
                  Reomve From Wishlist
                </button>
              </div>
              <div className="right-section">
                <p>
                  {item.deliveryOption ? (
                    <div>Fast Delivery</div>
                  ) : (
                    <div>3-4 Days Delivery</div>
                  )}
                </p>
                <p>
                  {item.stockOption ? (
                    <div>InStock</div>
                  ) : (
                    <div>Out Of Stock</div>
                  )}
                </p>
                <p className="saving">You Are Saving ₹5000</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { RendingWishlist };
