import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
import { useProductContext } from "../Context/protuctContext";
import { useWishListCartContext } from "../Context/Cart-And-Wishlist";

const ProductList = () => {
  const { product, productState:{sort, byStock, byFastDelivery, category, byRating, bySearch, byRange } } = useProductContext();

  const { wishListCartValues:{cart, wishlist},dispatchWishListCart} =  useWishListCartContext();

  const transformProduct = ()=>{
    let sortedProducts = product;

    if (sort) {
      sortedProducts = sortedProducts.sort((a,b) =>
      sort === "LOW_TO_HIGH" ? a.price - b.price : b.price - a.price)
    }

    if (byStock){
      sortedProducts = sortedProducts. filter((prod)=>prod.stockOption)
    }

    if (byFastDelivery){
      sortedProducts = sortedProducts. filter((prod)=>prod.deliveryOption)
    }

    if (category[0]!==undefined){
      sortedProducts = sortedProducts.filter((prod) => category.includes(prod.categoryName));
    }

    if (byRating){
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= byRating);
    }

    if (bySearch){
      sortedProducts = sortedProducts.filter((prod)=> prod.brand.toLowerCase().includes(bySearch))
    }
    if (byRange){
      sortedProducts = sortedProducts.filter((prod) => prod.price >= byRange)
    }
    return sortedProducts

  }

  return (
    <div className="main-container-productlist">
      {transformProduct().map(
        (item) => {
          return (
            <>
              <div className="sub-container">
                <div className="img-container">
                  <img className="smartphone-images" src={item.imgLink} />
                  <a><button onClick={() => dispatchWishListCart({type:"ADD_TO_WISHLIST",payload:item})} className="product-heart-icon">♡</button></a>
                </div>
               <div className="product-detail-container">
               <div className="about-product">
                  <p className="product-list-title">{item.title}</p>
                  <li className="rating">{item.rating}</li>
                  <li className="categoryName">{item.categoryName}</li>
                  <li className="ram">{item.ram}</li>
                  <li className="camera">{item.camera}</li>
                  <li className="battery">{item.battery}</li>
                  <p className="price">₹{item.price}</p>
                  <p className="OriginalPrice">₹{item.originalPrice}</p>


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

                </div>
                <div className="right-section">
                  <p>{item.deliveryOption ? <div>Fast Delivery</div>: <div>3-4 Days Delivery</div>}</p>
                  <p>{item.stockOption ?<div>InStock</div>: <div>Out Of Stock</div>}</p>
                  <p className="saving">You Are Saving ₹5000</p>
                </div>
               </div>
              </div>
            </>
          );
        }
      )}
    </div>
  );
};

export { ProductList };