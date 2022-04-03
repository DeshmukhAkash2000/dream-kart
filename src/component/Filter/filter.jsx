import React from "react";
import "./filter.css";
import { useProductContext } from "../Context/protuctContext";
import { useCategories } from "../Context/category-Contexts";

const Filter = () => {

  const { categorydata } = useCategories();

  const { productState:{byRange,category,byFastDelivery,byStock}, productDispatch } = useProductContext()
  return (
    <>
      <div className="filter-main-container">
        <div className="filter-text-with-clear-button">
          <h3>Filter</h3>
          <button className="clear-btn" onClick={() => {productDispatch ({ type: "CLEAR" })}}>Clear</button>
        </div>

        <hr />
       
        <div className="slider-filter">
        <div className="price-range">
        <h3>5k</h3>
        <h3>{byRange}</h3>
        <h3>100k</h3>
        </div>
        <input className="slider-input" type="range" id="Price" name="price" min="5000" max="100000" onChange={(e) => productDispatch({type:"RANGE", payload:e.target.value})} />
        </div>

        <hr />
        <div className="delivery-options">
          <h3>Delivery Option</h3>
          <div className="delivery-filter">
            <input onChange={() => { productDispatch ({type:"FILTER_BY_DELIVERY"})}} checked={byFastDelivery} type="checkbox" value="fast-delivery" />
            <label className="label-title">fast Delivery</label>
          </div>
          <div className="delivery-filter">
            <input onChange={() => { productDispatch ({type:"FILTER_BY_STOCK"})}} checked={byStock} type="checkbox" value="InStock" />
            <label className="label-title">InStock</label>
          </div>

          <hr />

          <div className="available-brands">
            <h3>Available Brands</h3>
            {categorydata.map(({ categoryName }) => {
              return(
                <div 
                className="realme"
                key={categoryName}
                >
                  <input 
                   checked={category.includes(categoryName)}
                   onChange={() =>  productDispatch({ type:"CATEGORY", payload:[categoryName] }) } type="checkbox" value="Realme" />
                  <label className="label-title">{categoryName}</label>
                </div>
              );
            })}
          </div>

          <hr />

          <div className="rating-filter">
            <h3>Ratings</h3>
            <div className="rating1">
              <input onChange={() => { productDispatch({ type: "RATING", payload: "4" }) }} type="checkbox" value="4 and above" />
              <label className="label-title">4 Star & Above</label>
            </div>

            <div className="rating2">
              <input onChange={() => { productDispatch({ type: "RATING", payload: "3" }) }} type="checkbox" value="3 and above" />
              <label className="label-title">3 Star & Above</label>
            </div>

            <div className="rating3">
              <input onChange={() => { productDispatch({ type: "RATING", payload: "2" }) }} type="checkbox" value="2 and above" />
              <label className="label-title">2 Star & Above</label>
            </div>

            <div className="rating4">
              <input onChange={() => { productDispatch({ type: "RATING", payload: "1" }) }} type="checkbox" value="1 and above" />
              <label className="label-title">1 Star & Above</label>
            </div>
          </div>

            <hr/>

          <div className="sort-by-price">
            <h3>Sort By Price</h3>
            <div>
                <input onChange={() => { productDispatch({ type: "SORT_BY_PRICE", payload: "LOW_TO_HIGH" }) }} type="radio" name="price" value="price-high-to-low" />
                <label className="label-title">Price-Low-To-High</label>
            </div>
            
            <div>
            <input onChange={() => { productDispatch({ type: "SORT_BY_PRICE", payload: "HIGH_TO_LOW" }) }} type="radio" name="price" value="Price-low-to-high" />
            <label className="label-title">Price-High-To-Low</label>
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export { Filter };
