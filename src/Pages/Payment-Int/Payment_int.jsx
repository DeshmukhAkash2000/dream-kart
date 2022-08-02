import React from "react";
import "./Payment_int.css";
import { useWishListCartContext } from "../../component/Context/Cart-And-Wishlist";
import {toast} from "react-toastify";


const PaymentInt = () => {
  const {
    wishListCartValues: { cart },
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

  const loadScript = async (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const paymentHandler = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    // if (!res) {
    //   toast.info("Failed to payment");
    // }
    const options = {
      key: "rzp_test_NU5exBM4BPnBkX",
      currency: "INR",
      amount: amount * 100,
      name: "DreamKKart",
      description: "Thank you for purchase",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6YmDozaiZCW6Z7haDgv2meMtpB6FMzYfK1DAVIPE6PUfC9Laoa25kjnK_2VFqKHaX7c&usqp=CAU",
      theme: {
        color: "#2563eb",
      },

      handler: function () {
        cart.map((item) =>
        dispatchWishListCart({
            type: "REMOVE_FROM_CART",
            payload: item,
          })
        );
        // navigate("/");
        toast.success("Order is successfully Placed..")
      },
      prefill: {
        name: "Akash",
        contact: "9623738495",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div className="checkout-upper-container">
      <h1 className="checkout-text">CheckOut</h1>
      <div className="paymentInt-main">
        <div className="address-container">
          <input type="radio" />
          <div>
            <h2>Akash Deshmukh</h2>
            <p>At Kondha Ta. Pauni Dist. Bhandara</p>
            <p>Maharashtra, India 441908</p>
          </div>
        </div>
        <div className="checkout-card">
          <h2>Order Summary</h2>
          <hr />
          <div className="check-first-card-section">
            <p>Item</p>
            <p>Prices</p>
          </div>
          <div>
            {cart.map((e) => (
              <div className="check-second-card-section">
                <p>{e.title}-</p>
                <p>{e.price}</p>
              </div>
            ))}
          </div>
          <hr />
          <div className="check-third-card-section">
            <p>Total Price</p>
            <p>{totalValue}</p>
          </div>
          <hr />
          <button onClick={()=>paymentHandler(totalValue)} className="proceed-btn">Proceed</button>
        </div>
      </div>
    </div>
  );
};

export { PaymentInt };
