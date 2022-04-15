import { useSelector } from "react-redux";
import validator from "validator";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useValidate = () => {
  const customer = useSelector((state) => state.information.customer);
  const navigate = useNavigate();

  const isValid = () => {
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
  const validate = () => {
    if (isValid()) navigate("/checkout/payment");
  };
  return { validate };
};

export default useValidate;
// "/checkout/payment"
