import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const PlaceOrder = () => {
  const information = useSelector((state) => state.information);
  const validateInfo = () => {
    let isValid = true;

    if (information.deliveryMethod === "deliver") {
      isValid = information.courier == "" ? false : true;
      isValid = information.deliveryAddress.brgy == "" ? false : true;
      isValid = information.deliveryAddress.city == "" ? false : true;
      isValid = information.deliveryAddress.country == "" ? false : true;
      isValid = information.deliveryAddress.firstname == "" ? false : true;
      isValid = information.deliveryAddress.lastname == "" ? false : true;
      isValid = information.deliveryAddress.region == "" ? false : true;
      isValid = information.deliveryAddress.street == "" ? false : true;
      isValid = information.deliveryAddress.zip_code == "" ? false : true;

      if (!isValid)
        toast.error("Delivery Information and Address Must be filled");
    }

    return isValid;
  };

  const handlePlaceOrder = () => {
    console.log("order", "/proof-of-payment");
    console.log(information);
    console.log(validateInfo());
  };

  return { handlePlaceOrder };
};
export default PlaceOrder;
