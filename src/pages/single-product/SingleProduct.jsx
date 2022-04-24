import "./single-product.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MeatsData from "../../data/meats";
import b1 from "/src/images/home/angus-smoked-beef.jpg";
import o1 from "/src/images/Meats-Others/_salmon.jpg";
import c1 from "/src/images/home/whole-smoked-chicken.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/cartRedux";

const SingleProduct = ({ meats }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.products);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const [item, setItem] = useState({
    category: "Chicken",
    description: "Slabs of pork ribs infused with an authentic smokey flavor.",
    _id: 1,
    img: "/src/images/Meats-Chicken/half-smoked-chicken.JPG",
    name: "Half Smoked Chicken Peri-peri",
    price: 350,
  });

  const getItem = async () => {
    const data = meats.find((m) => m._id === id);
    setItem(data);
  };

  useEffect(() => {
    getItem();
  }, []);

  const handleQuantity = (operation) => {
    switch (operation) {
      case "add":
        setQuantity(quantity + 1);
        break;
      case "minus":
        if (quantity > 1) setQuantity(quantity - 1);
        break;
    }
  };

  const alreadyInCart = () => {
    return products.find((product) => product.item.id === item.id);
  };

  const handleAddToCart = () => {
    dispatch(addProduct({ item, quantity }));
  };

  const hashCategories = {
    chicken: "Chicken",
    pork: "Pork",
    sausage: "Sausage",
    beef: "Beef",
    giftBox: "GiftBox",
    others: "Others",
  };

  return (
    <div className="single-product">
      <section>
        <div className="header"></div>
        <div className="content">
          <h2 onClick={() => navigate(-1)}>&lt; Go Back </h2>
          <div className="two-cols">
            <img src={item.coverImagePath} alt={item.name} />
            <div className="item-desc center col">
              <div className="top">
                <h2>{hashCategories[item.category]}</h2>
                <h1>{item.name}</h1>
                <h1 className="price center">
                  ₱{" "}
                  {item.price.toLocaleString("en-US", {
                    style: "decimal",
                    minimumFractionDigits: 2,
                  })}
                </h1>
              </div>

              <div className="bottom">
                <div className="quantity-controls center">
                  <button onClick={() => handleQuantity("minus")}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => handleQuantity("add")}>+</button>
                </div>
                <button
                  onClick={handleAddToCart}
                  disabled={alreadyInCart()}
                  className={`add-to-cart ${
                    alreadyInCart() && "already-added"
                  }`}
                >
                  {alreadyInCart() ? "Already in the Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>

          <div className="desc">
            <h2 className="heading">Description</h2>
            <span>{item.description}</span>
          </div>
        </div>

        <div className="suggestions">
          <h1 className="heading">You May Also Like</h1>
          <div className="items center">
            <div className="item">
              <img src={b1} alt="" />
              <h2 className="name">1kg USDA Angus Smoked Beef Belly</h2>
              <span>
                ₱{" "}
                {(1900).toLocaleString("en-US", {
                  style: "decimal",
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
            <div className="item">
              <img src={o1} alt="" />
              <h2 className="name">Smoked Salmon</h2>
              <span>
                ₱{" "}
                {(580).toLocaleString("en-US", {
                  style: "decimal",
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
            <div className="item">
              <img src={c1} alt="" />
              <h2 className="name">Whole Smoked Chicken Peri-peri</h2>
              <span>
                ₱{" "}
                {(600).toLocaleString("en-US", {
                  style: "decimal",
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SingleProduct;
