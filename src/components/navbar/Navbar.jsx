import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src={logo} alt="" />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/meats">Meats</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="cart"></div>
    </nav>
  );
};

export default Navbar;
