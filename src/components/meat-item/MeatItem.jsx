import "./styles.css";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const MeatItem = ({ item }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/meats/item/${item._id}`);
  };
  return (
    <div className="meat-item">
      <img src={item.coverImagePath} alt="" />
      <div className="desc">
        <div className="name">
          <h2>{item.name}</h2>
          <span className="category">{item.category}</span>
        </div>
        <h2 className="price">₱ {item.price}</h2>
        <Button onClick={handleNavigate}>View Item</Button>
      </div>
    </div>
  );
};

export default MeatItem;
