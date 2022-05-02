import { useSelector } from "react-redux";
import validator from "validator";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useValidate = () => {
  const customer = useSelector((state) => state.information.customer);
  const deliveryAddress = useSelector(
    (state) => state.information.deliveryAddress
  );

  const deliveryDateTime = useSelector(
    (state) => state.information.deliveryDateTime
  );
  const navigate = useNavigate();

  const isValid = () => {
    let valid = true;

    if (
      validator.isEmpty(customer.email) ||
      !validator.isEmail(customer.email)
    ) {
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

    if (validator.isEmpty(deliveryDateTime)) {
      valid = false;
      toast.error("Delivery date and time is required");
    }
    const { brgy, city, country, region, street, zip_code } = deliveryAddress;
    if (
      validator.isEmpty(brgy) ||
      validator.isEmpty(city) ||
      validator.isEmpty(country) ||
      validator.isEmpty(region) ||
      validator.isEmpty(street) ||
      validator.isEmpty(zip_code)
    ) {
      valid = false;
      toast.error("Delivery address is required");
    }

    return valid;
  };
  const validate = () => {
    return isValid();
  };
  return { validate };
};

export default useValidate;
