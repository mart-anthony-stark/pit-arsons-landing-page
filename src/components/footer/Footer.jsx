import "./style.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import validator from "validator";
import { useRef } from "react";
import toast from "react-hot-toast";

const Footer = () => {
  const emailRef = useRef();
  const handleSubscribeNewsletter = async () => {
    let email = emailRef.current.value;
    if (!validator.isEmail(email))
      return toast.error("Invalid Email. Please try again");
    await fetch(`${import.meta.env.VITE_API_BASE_URL}/email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    toast.success("You're now subscribed to our newsletter")
  };
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
            <li>pitarsons@outlook.com</li>
            <li>0917 513 4495</li>
            <li>
              <a
                href="https://web.facebook.com/Pit-Arsons-104112608002561"
                target="_blank"
              >
                FB: Pit Arsons
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/pit_arsons/" target="_blank">
                IG: @pit_arsons
              </a>
            </li>
          </ul>
        </div>
        <div className="links newsletter">
          <h2>Newsletter</h2>
          <div className="email-input">
            <input type="email" ref={emailRef} />
            <button onClick={handleSubscribeNewsletter}>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
