import "./meats.css";
import SectionBanner from "../../components/section-banner/SectionBanner";
import BannerImg from "/src/images/Meats-Chicken/meats-banner.png";

const Meats = () => {
  return (
    <div className="meats">
      <SectionBanner
        data={{
          topHeading: "SHOP. EAT. MEAT.",
          subHeading: "MEATS",
          img: BannerImg,
        }}
      />
    </div>
  );
};

export default Meats;
