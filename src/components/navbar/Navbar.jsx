import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src={logo} alt="" />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Meats</Link>
        <Link to="/">FAQs</Link>
        <Link to="/">Contact Us</Link>
      </div>
      <div className="cart"></div>
    </nav>
  );
};

export default Navbar;
