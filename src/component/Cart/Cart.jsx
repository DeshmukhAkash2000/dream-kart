import "./Cart.css";
import { Link } from "react-router-dom";
import { useWishListCartContext } from "../Context/Cart-And-Wishlist";

const RendingCart = () => {
  const {
    wishListCartValues: { cart, wishlist},
    dispatchWishListCart,
  } = useWishListCartContext();

  let totalValue = 0;
  let totalItems = 0;
  if (cart[0] !== undefined) {
    totalValue = cart.reduce(
      (acc, cur) => acc + cur.price * cur.cartQuantity,
      0
    );

    totalItems = cart.reduce(
      (acc, cur) => (cur.cartQuantity > 1 ? acc + (cur.cartQuantity - 1) : acc),
      0
    );

    totalItems = totalItems + cart.length;
  }

  return (
    <div className="main-product-container">
      <div className="cart-product-container">
        <div className="cart-container-heading">
          <h2>Your Cart {cart.length}</h2>
          {cart.length === 0 ? (
            <Link to="/AllProduct">
              <button className="cart-shop-btn">Shop Now!!</button>
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="cart-product">
          <div className="cart-listing">
            {cart.map((item) => {
              console.log(item);
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

                  
                    {wishlist.some((data) => data.id === item.id) ? (
                      <Link to="/wishlist" className="remove-cart-btn">
                        <button className="go-to-wishlist-btn">
                          Go to Wishlist
                        </button>
                      </Link>
                    ) : (
                      <button
                        className="add-to-cart-btn"
                        onClick={() =>
                          dispatchWishListCart({
                            type: "ADD_TO_WISHLIST",
                            payload: item,
                          })
                        }
                      >Add to wishlist</button>
                    )}
                    <button
                      onClick={() =>
                        dispatchWishListCart({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        })
                      }
                      className="remove-from-cart-btn"
                    >Reomve From Cart</button>
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
                    <div className="product-quantity">
                             <small>Quantity</small>
                             <button onClick={() => dispatchWishListCart ({type:"INCREASE_ITEMS",payload:item})} className="QuantityIncraeseName-btn">+</button>
                             <small className="quantity-num">{item.cartQuantity}</small>
                             <button onClick={()=> dispatchWishListCart({type:"DECREASE_ITEMS",payload:item})} className="quantity-decrease-btn">-</button>
                   </div>
                  </div>
                 

                </div>
                
              );
            })}
          </div>

          <div className="price-detail-container">
            <div className="price-detail-cart">
              <h5>PRICE DETAILS</h5>
              <hr />
              <div className="cart-price-details">
                <div>
                  <p>ITEMS</p>
                  <p>Delivery Charges</p>
                </div>
                <div>
                  <p>{totalItems}</p>
                  <p>₹.0</p>
                </div>
              </div>
              <hr />
              <div className="total-amount">
                <h4>TOATAL AMOUNT</h4>
                <h3>₹ {totalValue}</h3>
              </div>
              <hr />
              <button className="place-order-btn">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { RendingCart };
