import Button from "../../../components/button/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setInstructions } from "../../../redux/info";

const Instructions = () => {
  const dispatch = useDispatch();
  const instructions = useSelector((state) => state.information.instructions);

  return (
    <div className="special-instructions">
      <h1>Special Instructions</h1>
      <div className="text-container">
        <textarea
          placeholder="Leave us a note..."
          value={instructions}
          onChange={(e) => dispatch(setInstructions(e.target.value))}
        ></textarea>
      </div>
      <div className="buttons flex-end center">
        <Link to="/cart">Return to Checkout</Link>
        <Link to="/checkout/information">
          <Button>
            Proceed to Customer <br />
            Information
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Instructions;
