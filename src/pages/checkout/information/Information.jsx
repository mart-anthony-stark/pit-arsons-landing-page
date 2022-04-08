import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import "./style.css";
import { useState } from "react";


import Deliver from "./Deliver";

const Information = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("deliver");

  return (
    <div className="information">
      {/* Basic Customer Info */}
      <h1>Customer Information</h1>
      <div className="top center">
        <div className="center-self">
          <div className="two-cols">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="two-cols">
            <input type="text" placeholder="Mobile Phone Number" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="two-cols">
            <div className="gender">
              <span>Gender</span>
              <div className="radio-btns">
                <div className="grp">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div className="grp">
                  <input type="radio" name="gender" id="male" value="male" />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="grp">
                  <input
                    type="radio"
                    name="gender"
                    id="others"
                    value="others"
                  />
                  <label htmlFor="others">Others</label>
                </div>
              </div>
            </div>
            <input type="number" placeholder="Age" />
          </div>
        </div>
      </div>

      {/* Delivery method */}
      <h1>Delivery Method</h1>
      <div className="delivery-method options">
        <div className="method">
          <input
            type="radio"
            name="delivery-method"
            id="deliver"
            value="deliver"
            onChange={(e) => setDeliveryMethod("deliver")}
            checked={deliveryMethod === "deliver"}
          />
          <label htmlFor="deliver">
            <LocalShippingIcon />
            Deliver
          </label>
        </div>
        <div className="method">
          <input
            type="radio"
            name="delivery-method"
            id="collect"
            value="collect"
            onChange={(e) => setDeliveryMethod("collect")}
            checked={deliveryMethod === "collect"}
          />
          <label htmlFor="collect">
            <HouseOutlinedIcon />
            Collect
          </label>
        </div>
      </div>

      {/* Courier options */}
      {deliveryMethod === "deliver" ? (
        //   Render when delivery method is deliver
        <Deliver />
      ) : (
        //   Render when delivery method is collect
        <></>
      )}
    </div>
  );
};

export default Information;
