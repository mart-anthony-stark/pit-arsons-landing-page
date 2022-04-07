import "./home.css";
import Button from "../../components/button/Button";
import Welcome from "./welcome/Welcome";
import ProductCard from "../../components/product-card/ProductCard";
import OrderProcess from "./order-process/OrderProcess";

// import bestseller1 from

const bestSellers = [
  {
    name: "USDA Angus Smoked Beef Belly",
    price: 500,
    img: "/src/images/home/angus-smoked-beef.jpg",
  },
  {
    name: "Smoked Pork Ribs",
    price: 1300,
    img: "/src/images/home/smoked-pork-ribs.jpg",
  },
  {
    name: "Whole Smoked Chicken Peri-peri",
    price: 350,
    img: "/src/images/home/whole-smoked-chicken.jpg",
  },
];

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="banner">
          <h2>low and slow smoked meats</h2>
          <h1>DELIVERED RIGHT TO YOUR DOORSTEP.</h1>
          <Button>SHOP NOW</Button>
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