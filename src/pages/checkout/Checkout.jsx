import { Link, useParams } from "react-router-dom";
import "./checkout.css";
import { useState, useEffect } from "react";
import Button from "../../components/button/Button";
import Instructions from "./instructions/Instructions";
import Information from "./information/Information";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState("");
  let { step } = useParams();

  useEffect(() => {
    setCurrentStep(step);
  }, [step]);

  return (
    <div className="checkout-page">
      <section>
        <div className="links">
          <Link to="/checkout/instructions">Special Instructions</Link>|
          <Link to="/checkout/information">Information</Link>|
          <Link to="/checkout/payment">Payment</Link>
        </div>

        <div className="container">
          {currentStep === "instructions" && <Instructions />}
          {currentStep === "information" && <Information />}
        </div>
      </section>
    </div>
  );
};

export default Checkout;
