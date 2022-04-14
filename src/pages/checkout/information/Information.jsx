import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import "./style.css";
import Button from "../../../components/button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

import Deliver from "./Deliver";
import Collect from "./Collect";
import { useDispatch, useSelector } from "react-redux";

import { editCustomer, setdeliveryMethod } from "../../../redux/info";
import useValidate from "./hooks/useValidate";

const Information = () => {
  const customerInfo = useSelector((state) => state.information.customer);
  const deliveryMethod = useSelector(
    (state) => state.information.deliveryMethod
  );
  const dispatch = useDispatch();

  const handleDeliveryChange = (e) => {
    dispatch(setdeliveryMethod(e.target.value));
  };

  const handleGenderChange = (e) => {
    dispatch(editCustomer({ ...customerInfo, gender: e.target.value }));
  };

  const { validate } = useValidate();

  return (
    <div className="information">
      {/* Basic Customer Info */}
      <h1>Customer Information</h1>
      <div className="top center">
        <div className="center-self">
          <div className="two-cols">
            <input
              type="text"
              placeholder="First Name"
              value={customerInfo.firstname}
              onChange={(e) =>
                dispatch(
                  editCustomer({ ...customerInfo, firstname: e.target.value })
                )
              }
            />
            <input
              type="text"
              placeholder="Last Name"
              value={customerInfo.lastname}
              onChange={(e) =>
                dispatch(
                  editCustomer({ ...customerInfo, lastname: e.target.value })
                )
              }
            />
          </div>
          <div className="two-cols">
            <input
              type="text"
              placeholder="Mobile Phone Number"
              value={customerInfo.mobile}
              onChange={(e) =>
                dispatch(
                  editCustomer({ ...customerInfo, mobile: e.target.value })
                )
              }
            />
            <input
              type="email"
              placeholder="Email Address"
              value={customerInfo.email}
              onChange={(e) =>
                dispatch(
                  editCustomer({ ...customerInfo, email: e.target.value })
                )
              }
            />
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
                    onChange={handleGenderChange}
                    checked={customerInfo.gender === "female"}
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div className="grp">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    onChange={handleGenderChange}
                    checked={customerInfo.gender === "male"}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="grp">
                  <input
                    type="radio"
                    name="gender"
                    id="others"
                    value="others"
                    onChange={handleGenderChange}
                    checked={customerInfo.gender === "others"}
                  />
                  <label htmlFor="others">Others</label>
                </div>
              </div>
            </div>
            <input
              type="number"
              placeholder="Age"
              value={customerInfo.age}
              onChange={(e) =>
                dispatch(editCustomer({ ...customerInfo, age: e.target.value }))
              }
            />
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
            onChange={handleDeliveryChange}
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
            onChange={handleDeliveryChange}
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
        <Collect />
      )}

      <div className="buttons flex-end center">
        <Link to="/checkout/instructions">
          Return to Special
          <br /> Instructions
        </Link>
        <Button onClick={validate}>Proceed to Payment</Button>
      </div>
    </div>
  );
};

export default Information;
