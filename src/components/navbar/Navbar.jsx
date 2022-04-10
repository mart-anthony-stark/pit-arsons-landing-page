import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { Badge } from "@material-ui/core";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useState } from "react";
import "./navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.products.length);

  return (
    <nav>
      <img className="logo" src={logo} alt="" />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/meats/chicken">Meats</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="cart">
        <Badge badgeContent={quantity}>
          <Link to="/cart">
            <ShoppingCartRoundedIcon />
          </Link>
        </Badge>
      </div>
    </nav>
  );
};

export default Navbar;
