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

      <h1>Delivery Address</h1>
      <div className="input-container">
        <div className="two-cols">
          <input
            type="text"
            placeholder="First Name"
            value={deliveryAddress.firstname}
            onChange={(e) =>
              dispatch(
                setDeliveryAddress({
                  ...deliveryAddress,
                  firstname: e.target.value,
                })
              )
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            value={deliveryAddress.lastname}
            onChange={(e) =>
              dispatch(
                setDeliveryAddress({
                  ...deliveryAddress,
                  lastname: e.target.value,
                })
              )
            }
          />
        </div>
        <input
          type="text"
          placeholder="Street"
          className="full mt-20"
          value={deliveryAddress.street}
          onChange={(e) =>
            dispatch(
              setDeliveryAddress({
                ...deliveryAddress,
                street: e.target.value,
              })
            )
          }
        />
        <input
          type="text"
          placeholder="Barangay"
          className="full mt-20"
          value={deliveryAddress.brgy}
          onChange={(e) =>
            dispatch(
              setDeliveryAddress({
                ...deliveryAddress,
                brgy: e.target.value,
              })
            )
          }
        />
        <div className="two-cols mt-20">
          <input
            type="text"
            placeholder="City"
            value={deliveryAddress.city}
            onChange={(e) =>
              dispatch(
                setDeliveryAddress({
                  ...deliveryAddress,
                  city: e.target.value,
                })
              )
            }
          />
          <input
            type="text"
            placeholder="Region"
            value={deliveryAddress.region}
            onChange={(e) =>
              dispatch(
                setDeliveryAddress({
                  ...deliveryAddress,
                  region: e.target.value,
                })
              )
            }
          />
        </div>
        <div className="two-cols mt-20">
          <input
            type="text"
            placeholder="Country"
            value={deliveryAddress.country}
            onChange={(e) =>
              dispatch(
                setDeliveryAddress({
                  ...deliveryAddress,
                  country: e.target.value,
                })
              )
            }
          />
          <input
            type="text"
            placeholder="Zip Code"
            value={deliveryAddress.zip_code}
            onChange={(e) =>
              dispatch(
                setDeliveryAddress({
                  ...deliveryAddress,
                  zip_code: e.target.value,
                })
              )
            }
          />
        </div>
      </div>

      <h1>Delivery Date & Time</h1>
      <input
        type="datetime-local"
        value={deliveryDateTime}
        onChange={(e) => dispatch(setDeliveryDateTime(e.target.value))}
      />
    </>
  );
};

export default Deliver;
