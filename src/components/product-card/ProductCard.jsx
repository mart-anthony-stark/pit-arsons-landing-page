import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/cartRedux";
import "./card.css";

const ProductCard = ({ dish }) => {
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addProduct({ item: dish, quantity: 1 }));
  };

  const alreadyInCart = () => {
    return cart.find((product) => product.item.id === dish.id);
  };

  return (
    <div className="product-card">
      <img src={dish.img} alt="" />
      <div className="desc">
        <h2>{dish.name}</h2>

        <div className="price">
          <span>Starting at</span>
          <h2>
            ₱
            {dish.price.toLocaleString("en-US", {
              style: "decimal",
              minimumFractionDigits: 2,
            })}
          </h2>
        </div>
      </div>

      <button
        className={`cta ${alreadyInCart() && "already-added"}`}
        onClick={handleAddItem}
      >
        {alreadyInCart() ? "Already in the Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
