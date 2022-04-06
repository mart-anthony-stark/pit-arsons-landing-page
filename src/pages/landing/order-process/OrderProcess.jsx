import "./style.css";

const steps = [
  {
    name: "Add to Cart",
    description: "Browse our menu, select the items you like.",
    image: "/src/images/home-banner-icons/Add to Cart Icon.png",
  },
  {
    name: "Checkout",
    description: "Proceed to checkout to finalize your order.",
    image: "/src/images/home-banner-icons/Add to Cart Icon.png",
  },
  {
    name: "Payment",
    description: "Select your preferred payment method.",
    image: "/src/images/home-banner-icons/Add to Cart Icon.png",
  },
  {
    name: "Shipping",
    description:
      "Sit back, relax, and wait for your order to arrive (or pick it up from one of our locations).",
    image: "/src/images/home-banner-icons/Add to Cart Icon.png",
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
            <img
              src="/src/images/home-banner-icons/Arrow.png"
              alt="next step"
              className="arrow"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderProcess;
