import "./style.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-cont">
        <img className="logo" src={logo} alt="Logo" />
        <div className="links">
          <h2>Explore</h2>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>

            <Link to="/meats/chicken">
              <li>Meats</li>
            </Link>

            <Link to="/faqs">
              <li>Payment Options</li>
            </Link>

            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="links">
          <h2>Get in Touch</h2>
          <ul>
            <li>pitarsons@gmail.com</li>
            <li>09123456789</li>
            <li>Pit Arsons</li>
            <li>@Pit_Arsons</li>
          </ul>
        </div>
        <div className="links newsletter">
          <h2>Newsletter</h2>
          <div className="email-input">
            <input type="email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
