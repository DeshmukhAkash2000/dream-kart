import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
    return(
        <div className="main-footer-container">
            <ul id="get-to-know-us">
                <h3>Get to Know us</h3>
                <a className="footer-contactlink" href="/">About Us</a>
                <a className="footer-contactlink" href="/">Careers</a>
                <a className="footer-contactlink" href="/">Press Release</a>
                <a className="footer-contactlink" href="/">DreamCart Cares</a>
            </ul>
            <div>
            <img class="footer-img" src="./images/cart-pic.png" alt="cart-image" />
            <h2 id="my-name">By AkashDeshmukh_IFS</h2>
            </div>
            <ul id="footer-sublinks2">
                <h3>Connect With Us</h3>   
                <a className="footer-contactlink" href="https://www.linkedin.com/in/akash-deshmukh-b30b36217/">Linkdin</a>
                <a className="footer-contactlink" href="https://twitter.com/AkashIFS2025">Twitter</a>
                <a className="footer-contactlink" href="">Instagram</a>
                
            </ul>
            
        
        </div>
    );
};

export {Footer};