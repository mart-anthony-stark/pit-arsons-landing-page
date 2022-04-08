import "./styles.css";
import Meats from "/src/images/Meats-Chicken/meats_banner.png";
import FAQs from "/src/images/FAQs/faq-bg.png";
import Contact from "/src/images/FAQs/faq-bg.png";
import About from "../../images/About/about-banner.png";

const bg = {
  meats: Meats,
  faq: FAQs,
  contact: Contact,
  about: About,
};

const SectionBanner = ({ data }) => {
  const { subHeading, topHeading, img } = data;
  return (
    <div
      className="section-banner"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bg[img]})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      {/* <div className="overlay"></div>
      <img src={img} /> */}
      <h2>{topHeading}</h2>
      <h1>{subHeading}</h1>
    </div>
  );
};

export default SectionBanner;
