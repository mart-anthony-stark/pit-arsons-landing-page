import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import validator from "validator";

const PlaceOrder = () => {
  const information = useSelector((state) => state.information);
  const deliveryAddress = information.deliveryAddress;
  const customer = information.customer;
  const instructions = information.instructions;
  const cart = useSelector((state) => state.cart.products);

  const sendOrderForm = (body) => {
    console.log("POST FORM");
  };

  const validInfo = () => {
    let valid = true;

    if (!validator.isEmail(customer.email)) {
      valid = false;
      toast.error("Invalid Email");
    }
    if (validator.isEmpty(customer.firstname)) {
      valid = false;
      toast.error("Firstname is required");
    }

    if (validator.isEmpty(customer.lastname)) {
      valid = false;
      toast.error("Lastname is required");
    }

    if (validator.isEmpty(customer.gender)) {
      valid = false;
      toast.error("Gender is required");
    }
    if (validator.isEmpty(customer.age)) {
      valid = false;
      toast.error("Age is required");
    }
    if (validator.isEmpty(customer.mobile)) {
      valid = false;
      toast.error("Mobile Number is required");
    }

    return valid;
  };

  const validAddress = () => {
    let isValid = true;

    if (information.deliveryMethod === "deliver") {
      isValid = information.courier == "" ? false : true;
      isValid = deliveryAddress.city == "" ? false : true;
      isValid = deliveryAddress.country == "" ? false : true;
      isValid = deliveryAddress.firstname == "" ? false : true;
      isValid = deliveryAddress.lastname == "" ? false : true;
      isValid = deliveryAddress.region == "" ? false : true;
      isValid = deliveryAddress.street == "" ? false : true;
      isValid = deliveryAddress.zip_code == "" ? false : true;
      isValid = information.deliveryDateTime == "" ? false : true;

      if (!isValid)
        toast.error("Delivery Information and Address Must be filled");
    }

    return isValid;
  };

  const handlePlaceOrder = () => {
    // console.log("/proof-of-payment");
    console.log(information);

    let validForms = true;
    const body = {};
    if (!validInfo()) validForms = false;
    if (!validAddress()) validForms = false;

    body.customer = customer;
    body.cart = cart;
    body.deliveryAddress = `${deliveryAddress.street}, ${
      deliveryAddress.brgy && deliveryAddress.brgy + ","
    } ${deliveryAddress.city}, ${deliveryAddress.region}, ${
      deliveryAddress.zip_code
    }`;
    body.instructions = instructions;
    body.deliveryMethod = information.deliveryMethod;

    if (information.deliveryMethod == "deliver")
      body.courier = information.courier;
    console.log(body);
    if (validForms) sendOrderForm();
  };

  return { handlePlaceOrder };
};
export default PlaceOrder;
