import "./style.css";

import step1 from "/src/images/home-banner-icons/Add to Cart Icon.png";
import step2 from "/src/images/home-banner-icons/Checkout Icon.png";
import step3 from "/src/images/home-banner-icons/Payment Icon.png";
import step4 from "/src/images/home-banner-icons/Shipping Icon.png";
import arrow from "/src/images/home-banner-icons/Arrow.png";

const steps = [
  {
    name: "Add to Cart",
    description: "Browse our menu, select the items you like.",
    image: step1,
  },
  {
    name: "Checkout",
    description: "Proceed to checkout to finalize your order.",
    image: step2,
  },
  {
    name: "Payment",
    description: "Select your preferred payment method.",
    image: step3,
  },
  {
    name: "Shipping",
    description:
      "Sit back, relax, and wait for your order to arrive (or pick it up from one of our locations).",
    image: step4,
  },
];

const OrderProcess = () => {
  return (
    <div className="process">
      {steps.map((step, i) => (
        <div className="step" key={i}>
          <div className="content">
            <div className="icon">
              <img src={step.image} alt={step.name} />
            </div>
            <h2>{step.name}</h2>
            <p>{step.description}</p>
          </div>

          {i < steps.length - 1 && (
            <img src={arrow} alt="next step" className="arrow" />
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderProcess;
