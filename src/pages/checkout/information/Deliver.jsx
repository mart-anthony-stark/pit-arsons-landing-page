import Grab from "../../../images/Courier Logos/grab-express.png";
import Lalamove from "../../../images/Courier Logos/lalamove.png";
import Toktok from "../../../images/Courier Logos/toktok.png";

const Deliver = () => {
  return (
    <>
      <h1>Courier Options</h1>
      <div className="courier-opts options">
        <div className="method">
          <input type="radio" name="courier" id="grab" value="grab" />
          <label htmlFor="grab">
            <img src={Grab} alt="Grab express" />
          </label>
        </div>
        <div className="method">
          <input type="radio" name="courier" id="lalamove" value="lalamove" />
          <label htmlFor="lalamove">
            <img src={Lalamove} alt="Lalamove" />
          </label>
        </div>
        <div className="method">
          <input type="radio" name="courier" id="Toktok" value="toktok" />
          <label htmlFor="Toktok">
            <img src={Toktok} alt="Toktok" />
          </label>
        </div>
      </div>

      <h1>Delivery Address</h1>
      <div className="input-container">
        <div className="two-cols">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Street" className="full mt-20" />
        <input type="text" placeholder="Barangay" className="full mt-20" />
        <div className="two-cols mt-20">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Region" />
        </div>
        <div className="two-cols mt-20">
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="Zip Code" />
        </div>
      </div>

      <h1>Delivery Date & Time</h1>
      <input type="date" />
    </>
  );
};

export default Deliver;
