import "./home.css";
import Button from "../../components/button/Button";
import Welcome from "./welcome/Welcome";
import ProductCard from "../../components/product-card/ProductCard";
import OrderProcess from "./order-process/OrderProcess";
import { useNavigate } from "react-router-dom";

// import bestseller1 from

const bestSellers = [
  {
    id: 15,
    name: "USDA Angus Smoked Beef Belly",
    price: 500,
    img: "https://github.com/mart-anthony-stark/pit-arsons-landing-page/blob/main/src/images/home/angus-smoked-beef.jpg?raw=true",
  },
  {
    id: 16,
    name: "Smoked Pork Ribs",
    price: 1300,
    img: "https://github.com/mart-anthony-stark/pit-arsons-landing-page/blob/main/src/images/home/smoked-pork-ribs.jpg?raw=true",
  },
  {
    id: 2,
    name: "Whole Smoked Chicken Peri-peri",
    category: "Chicken",
    price: 350,
    img: "https://github.com/mart-anthony-stark/pit-arsons-landing-page/blob/main/src/images/Meats-Chicken/whole%20smoked%20chicken.jpg?raw=true",
    description: "Slabs of pork ribs infused with an authentic smokey flavor.",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="hero-section">
        <div className="banner">
          <h2>low and slow smoked meats</h2>
          <h1>DELIVERED RIGHT TO YOUR DOORSTEP.</h1>
          <Button onClick={() => navigate("/meats/chicken")}>SHOP NOW</Button>
        </div>

        <Welcome />

        <div className="best-sellers center col">
          <hr />
          <h1>Our Current Bestsellers</h1>

          <div className="cards">
            {bestSellers.map((dish, i) => (
              <ProductCard key={i} dish={dish} />
            ))}
          </div>
        </div>

        {/* How to order banner */}
        <div className="order-banner center col">
          <h1>How to Order From Us?</h1>
          <OrderProcess />
        </div>
      </div>
    </div>
  );
};

export default Home;
