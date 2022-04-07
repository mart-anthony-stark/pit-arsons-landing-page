import "./styles.css";
import Button from "../button/Button";

const MeatItem = ({ item }) => {
  return (
    <div className="meat-item">
      <img src={item.img} alt="" />
      <div className="desc">
        <div className="name">
          <h2>{item.name}</h2>
          <span className="category">{item.category}</span>
        </div>

        <h2 className="price">₱ {item.price}</h2>
        <Button>View Item</Button>
      </div>
    </div>
  );
};

export default MeatItem;
