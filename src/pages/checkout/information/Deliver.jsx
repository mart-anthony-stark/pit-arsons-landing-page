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
    </>
  );
};

export default Deliver;
