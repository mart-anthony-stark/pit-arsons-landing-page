import Gcash from "../../../images/Bank Logos/gcash-logo.png";
import COD from "../../../images/Bank Logos/COD.png";
import BPI from "../../../images/Bank Logos/bpi-logo.jpg";
import BDO from "../../../images/Bank Logos/bdo-logo.png";
import Button from "../../../components/button/Button";

const Payment = () => {
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
          <Button>Select Payment Option</Button>
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
          <Button>Select Payment Option</Button>
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
          <Button>Select Payment Option</Button>
        </div>
        <div className="card center col">
          <img src={COD} alt="" />
          <h3>CASH ON DELIVERY / PICK-UP</h3>
          <Button>Select Payment Option</Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
