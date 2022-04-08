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
        <Button>
          Proceed to Customer <br />
          Information
        </Button>
      </div>
    </div>
  );
};

export default Instructions;
