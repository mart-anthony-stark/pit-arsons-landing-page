import "./card.css";

const ProductCard = ({ dish }) => {
  return (
    <div className="card">
      <img src={dish.img} alt="" />
      <div className="desc">
        <h2>{dish.name}</h2>

        <div className="price">
          <span>Starting at</span>
          <h2>₱{dish.price}</h2>
        </div>
      </div>

      <button className="cta">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
