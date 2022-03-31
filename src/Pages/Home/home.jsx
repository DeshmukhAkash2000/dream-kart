import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <>
      <div class="main-container">
        <section class="main-img-container">
          <div class="about-web">
            <h2>Welcome To DreamKKart</h2>
            <p class="img-txt">
              Here You Can Explore Various Kind Of SmartPhones.
            </p>
            <button class="shop-btn">
              <Link to="./">Explore Now</Link>
            </button>
          </div>
          <img class="main-img" src="./images/iphone2.0.jpg" alt="" />
        </section>
        <h2 id="avilable-brands-title">Availble Brands</h2>
        <section class="collection-container">
          <div className="btm-img-and-title-container">
            <img className="btm-img" src="/images/realme.jpeg" alt="" />
            <h2>Realme</h2>
          </div>
          <div className="btm-img-and-title-container">
            <img className="btm-img" src="/images/redmi.png" alt="" />
            <h2>Redmi</h2>
          </div>
          <div className="btm-img-and-title-container">
            <img className="btm-img" src="/images/samsung.png" alt="" />
            <h2>Samsung</h2>
          </div>
          <div className="btm-img-and-title-container">
            <img
              className="btm-img"
              id="iphone-btm-pic"
              src="/images/iphone-13-pro.png"
              alt=""
            />
            <h2>Iphone</h2>
          </div>
        </section>
      </div>
    </>
  );
};

export { Home };
