import React from "react";
import "./ProductList.css";
import { useProductContext } from "../Context/protuctContext";

const ProductList = () => {
  const { product, productState:{sort, byStock, byFastDelivery, category, byRating, bySearch, byRange } } = useProductContext();

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
        ({ title, rating, categoryName, price, originalPrice, imgLink, ram, camera, battery, deliveryOption, stockOption}) => {
          return (
            <>
              <div className="sub-container">
                <div className="img-container">
                  <img className="smartphone-images" src={imgLink} />
                  <a><button className="product-heart-icon">♡</button></a>
                </div>
               <div className="product-detail-container">
               <div className="about-product">
                  <p className="product-list-title">{title}</p>
                  <li className="rating">{rating}</li>
                  <li className="categoryName">{categoryName}</li>
                  <li className="ram">{ram}</li>
                  <li className="camera">{camera}</li>
                  <li className="battery">{battery}</li>
                  <p className="price">₹{price}</p>
                  <p className="OriginalPrice">₹{originalPrice}</p>
                  <button className="add-to-card-btn">Add to Cart</button>
                </div>
                <div className="right-section">
                  <p>{deliveryOption ? <div>Fast Delivery</div>: <div>3-4 Days Delivery</div>}</p>
                  <p>{stockOption ?<div>InStock</div>: <div>Out Of Stock</div>}</p>
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