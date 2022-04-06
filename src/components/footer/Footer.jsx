import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-cont">
        <img className="logo" src="/src/images/logo.png" alt="Logo" />
        <div className="links">
          <h2>Explore</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Meats</li>
            <li>Payment Options</li>
            <li>Contact Us</li>
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
