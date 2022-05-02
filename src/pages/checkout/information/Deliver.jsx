import { useDispatch, useSelector } from "react-redux";
import Grab from "../../../images/Courier Logos/grab-express.png";
import Lalamove from "../../../images/Courier Logos/lalamove.png";
import Toktok from "../../../images/Courier Logos/toktok.png";

import {
  setCourier,
  setDeliveryDateTime,
  setDeliveryAddress,
} from "../../../redux/info";

const Deliver = () => {
  const dispatch = useDispatch();
  const courier = useSelector((state) => state.information.courier);
  const deliveryAddress = useSelector(
    (state) => state.information.deliveryAddress
  );

  const deliveryDateTime = useSelector(
    (state) => state.information.deliveryDateTime
  );

  const handleCourierChange = (e) => {
    dispatch(setCourier(e.target.value));
  };

  return (
    <>
      <h1>Courier Options</h1>
      <div className="courier-opts options">
        <div className="method">
          <input
            type="radio"
            name="courier"
            id="grab"
            value="grab"
            onChange={handleCourierChange}
            checked={courier === "grab"}
          />
          <label htmlFor="grab">
            <img src={Grab} alt="Grab express" />
          </label>
        </div>
        <div className="method">
          <input
            type="radio"
            name="courier"
            id="lalamove"
            value="lalamove"
            onChange={handleCourierChange}
            checked={courier === "lalamove"}
          />
          <label htmlFor="lalamove">
            <img src={Lalamove} alt="Lalamove" />
          </label>
        </div>
        <div className="method">
          <input
            type="radio"
            name="courier"
            id="Toktok"
            value="toktok"
            onChange={handleCourierChange}
            checked={courier === "toktok"}
          />
          <label htmlFor="Toktok">
            <img src={Toktok} alt="Toktok" />
          </label>
        </div>
      </div>
    </>
  );
};

export default Deliver;
