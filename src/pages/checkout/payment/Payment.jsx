import Gcash from "../../../images/Bank Logos/gcash-logo.png";
import COD from "../../../images/Bank Logos/COD.png";
import BPI from "../../../images/Bank Logos/bpi-logo.jpg";
import BDO from "../../../images/Bank Logos/bdo-logo.png";
import Button from "../../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentMethod } from "../../../redux/info";
import { useState } from "react";
import { Link } from "react-router-dom";
import PlaceOrder from "./PlaceOrder";

const Payment = () => {
  const { handlePlaceOrder } = PlaceOrder();

  const [disabledChangeContact, setDisabledChangeContact] = useState(true);
  const dispatch = useDispatch();
  const paymentMethod = useSelector((state) => state.information.paymentMethod);
  const cart = useSelector((state) => state.cart.products);
  const deliveryMethod = useSelector(
    (state) => state.information.deliveryMethod
  );
  const mobileContact = useSelector(
    (state) => state.information.customer.mobile
  );

  const handleClickPayment = (method) => {
    dispatch(setPaymentMethod(method));
  };

  return (
    <div className="payment">
      <div className="heading center col">
        <h1>Payment</h1>
        <h2>
          Payments may be made by depositing to the following bank accounts:
        </h2>
      </div>

      <div className="cards center">
        <div className="card center col">
          <img src={Gcash} alt="" />
          <span>JOHN PAUL A. 09175134495</span>
          <Button onClick={() => handleClickPayment("gcash")}>
            {paymentMethod === "gcash" ? "Selected" : "Select Payment Option"}
          </Button>
        </div>
        <div className="card center col">
          <img src={BPI} alt="" />
          <span>
            PAUL JOHN AGDON
            <br />
            1889219579
            <br />
            Savings Account
          </span>
          <span>JOHN PAUL A. 09175134495</span>
          <Button onClick={() => handleClickPayment("bpi")}>
            {paymentMethod === "bpi" ? "Selected" : "Select Payment Option"}
          </Button>
        </div>
        <div className="card center col">
          <img src={BDO} alt="" />
          <span>
            PAUL JOHN AGDON
            <br />
            006860044321
            <br />
            Savings Account
          </span>
          <Button onClick={() => handleClickPayment("bdo")}>
            {paymentMethod === "bdo" ? "Selected" : "Select Payment Option"}
          </Button>
        </div>
        <div className="card center col">
          <img src={COD} alt="" />
          <h3>CASH ON DELIVERY / PICK-UP</h3>
          <Button onClick={() => handleClickPayment("cod")}>
            {paymentMethod === "cod" ? "Selected" : "Select Payment Option"}
          </Button>
        </div>
      </div>

      <div className="review-order">
        <h1 className="text-center">Review your order below:</h1>
        <table className="">
          <tbody>
            {cart.map((product) => (
              <tr key={product.item.id}>
                <td>
                  <h1>{product.quantity}x</h1>
                </td>
                <td>{product.item.name}</td>
                <td>₱ {product.quantity * product.item.price}</td>
              </tr>
            ))}
            <tr className="sub-total">
              <td></td>
              <td>Subtotal:</td>
              <td>
                ₱{" "}
                {cart.reduce((agg, i) => (agg += i.quantity * i.item.price), 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="center">
        <div className="contact-details">
          <div className="info">
            <span className="">Contact</span>
            <span className="number">
              <input
                type="text"
                disabled={disabledChangeContact}
                value={mobileContact}
              />
            </span>
            <span
              onClick={() => setDisabledChangeContact(!disabledChangeContact)}
              className="btn"
            >
              {disabledChangeContact ? "Change" : "Save"}
            </span>
          </div>
          {deliveryMethod === "collect" && (
            <div className="info">
              <span className="">Pick-Up at</span>
              <span>11 Emerald St. Severina Diamond, Paranaque City</span>
              {/* <span className="btn">Change</span> */}
            </div>
          )}
        </div>
      </div>

      <div className="buttons flex-end center">
        <Link to="/checkout/information">Return to Information</Link>
        <Button onClick={handlePlaceOrder}>Place Order</Button>
      </div>
    </div>
  );
};

export default Payment;
