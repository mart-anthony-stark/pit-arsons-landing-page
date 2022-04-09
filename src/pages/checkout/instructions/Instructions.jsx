import Button from "../../../components/button/Button";
import { Link } from "react-router-dom";

const Instructions = () => {
  return (
    <div className="special-instructions">
      <h1>Special Instructions</h1>
      <div className="text-container">
        <textarea placeholder="Leave us a note..."></textarea>
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
