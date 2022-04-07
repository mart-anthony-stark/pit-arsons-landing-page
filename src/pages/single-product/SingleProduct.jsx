import "./single-product.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState([
    {
      category: "Chicken",
      description:
        "Slabs of pork ribs infused with an authentic smokey flavor.",
      id: 1,
      img: "/src/images/Meats-Chicken/half-smoked-chicken.JPG",
      name: "Half Smoked Chicken Peri-peri",
      price: 350,
    },
  ]);

  const getItem = async () => {
    const res = await fetch(`/src/data/meats.json`);
    const data = await res.json();

    const i = data.find((d) => d.id == id);

    if (!i) return navigate(-1);
    setItem(i);
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
        if (quantity > 0) setQuantity(quantity - 1);
        break;
    }
  };

  return (
    <div className="single-product">
      <section>
        <div className="header"></div>
        <div className="content">
          <h2 onClick={() => navigate(-1)}>&lt; Go Back </h2>
          <div className="two-cols">
            <img src={item.img} alt={item.name} />
            <div className="item-desc center col">
              <div className="top">
                <h2>{item.category}</h2>
                <h1>{item.name}</h1>
                <h1 className="price center">₱ {item.price}</h1>
              </div>

              <div className="bottom">
                <div className="quantity-controls center">
                  <button onClick={() => handleQuantity("minus")}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => handleQuantity("add")}>+</button>
                </div>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="desc">
            <h2 className="heading">Description</h2>
            <span>{item.description}</span>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SingleProduct;
