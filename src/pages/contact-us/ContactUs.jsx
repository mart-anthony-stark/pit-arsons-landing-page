import "./contact.css";
import SectionBanner from "../../components/section-banner/SectionBanner";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useRef } from "react";
import validator from "validator";
import toast from "react-hot-toast";

const ContactUs = () => {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const msgRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstname = fnameRef.current.value;
    const lastname = lnameRef.current.value;
    const email = emailRef.current.value;
    const message = msgRef.current.value;

    if (
      validator.isEmpty(firstname) ||
      validator.isEmpty(lastname) ||
      validator.isEmpty(email) ||
      validator.isEmpty(message)
    )
      return toast.error("All fields are required");

    if (!validator.isEmail(email)) return toast.error("Invalid email");

    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, firstname, lastname, message }),
    });
    const data = await res.json();

    toast.success("Feedback was submitted");
    fnameRef.current.value = "";
    lnameRef.current.value = "";
    emailRef.current.value = "";
    msgRef.current.value = "";
  };

  return (
    <div className="contact-us">
      <SectionBanner
        data={{
          topHeading: "PENNY FOR YOUR THOUGHTS",
          subHeading: "CONTACT US",
          img: "contact",
        }}
      />
      <section className="center col">
        <h1>We'd love to hear from you!</h1>
        <form onSubmit={handleSubmit} className="center col">
          <div className="two-cols">
            <input type="text" placeholder="First Name" ref={fnameRef} />
            <input type="text" placeholder="Last Name" ref={lnameRef} />
          </div>
          <input type="text" placeholder="Email" ref={emailRef} />
          <textarea placeholder="Message" ref={msgRef}></textarea>
          <input type="submit" value="Submit" />
        </form>

        <h1 className="get-in-touch">Get in Touch</h1>
        <div className="socials">
          <div className="social">
            <EmailRoundedIcon />
            <h3>pitarsons@ gmail.com</h3>
          </div>
          <div className="social">
            <LocalPhoneRoundedIcon />
            <h3>09123456789</h3>
          </div>
          <div className="social">
            <FacebookRoundedIcon />
            <h3>Pit Arsons</h3>
          </div>
          <div className="social">
            <InstagramIcon />
            <h3>@Pit_Arsons</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
