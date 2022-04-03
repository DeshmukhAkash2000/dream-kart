import { Link } from "react-router-dom";
import "./home.css";


const Home = () => {
  return (
    <>
      <div className="main-container">
        <section className="main-img-container">
          <div className="about-web">
            <h2>Welcome To DreamKKart</h2>
            <p className="img-txt">
              Here You Can Explore Various Kind Of SmartPhones.
            </p>
            <button className="shop-btn">
              <Link to="/AllProduct">Explore Now</Link>
            </button>
          </div>
          <img className="main-img" src="./images/iphone2.0.jpg" alt="" />
        </section>
        <h2 id="avilable-brands-title">Availble Brands</h2>
        <section className="collection-container">
          <div className="btm-img-and-title-container">
            <img className="btm-img" src="/images/realme.jpeg" alt="" />
            <h2 className="home-brand-name">Realme</h2>
          </div>
          <div className="btm-img-and-title-container">
            <img className="btm-img" src="/images/redmi.png" alt="" />
            <h2 className="home-brand-name">Redmi</h2>
          </div>
          <div className="btm-img-and-title-container">
            <img className="btm-img" src="/images/samsung.png" alt="" />
            <h2 className="home-brand-name">Samsung</h2>
          </div>
          <div className="btm-img-and-title-container">
            <img
              className="btm-img"
              id="iphone-btm-pic"
              src="/images/iphone-13-pro.png"
              alt=""
            />
            <h2 className="home-brand-name">Iphone</h2>
          </div>
        </section>
      </div>
    </>
  );
};

export { Home };
