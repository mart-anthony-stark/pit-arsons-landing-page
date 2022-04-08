import "./contact.css";
import SectionBanner from "../../components/section-banner/SectionBanner";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <SectionBanner
        data={{
          topHeading: "PENNY FOR YOUR THOUGHTS",
          subHeading: "CONTACT US",
          img: 'contact',
        }}
      />
      <section className="center col">
        <h1>We'd love to hear from you!</h1>
        <form className="center col">
          <div className="two-cols">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
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
