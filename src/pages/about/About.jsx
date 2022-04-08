import SectionBanner from "../../components/section-banner/SectionBanner";
import "./about.css";
import BannerImg from "../../images/About/about-banner.png";
import Beef from "../../images/About/about-pic.jpg";
import Taco from "../../images/About/about-taco-bite.jpg";
import Steak from "../../images/About/hr-steak.png";
import Agdon from "../../images/About/john-paul-agdon.png";
import Santiago from "../../images/About/mark-santiago.png";

const About = () => {
  return (
    <div className="about">
      <SectionBanner
        data={{
          topHeading: "BEHIND THE BARBECUE",
          subHeading: "WHAT PIT ARSONS IS ALL ABOUT",
          img: BannerImg,
        }}
      />

      <section>
        <div className="desc">
          <img src={Beef} alt="About us" />
          <div className="text">
            <h1>WHO ARE WE?</h1>
            <p>
              In 2020, what started as fun between several friends soon grew
              into a successful business that caters to the hungry stomachs of
              people across the Philippines. Our texas style barbecues need no
              physical restaurant to pique your interest, so here at Pit Arsons,
              we deliver ready to eat, original smoked meats which are vaccuum
              packed and sealed to be brought directly to you! Order yours now
              from this site or from one of our 10 resellers across the country.
            </p>
          </div>
        </div>
        <div className="desc">
          <div className="text">
            <h1>OUR MISSION</h1>
            <p>
              Since the pandemic began, it has become more difficult for people
              to get a taste of gourmet food due to the rapid shut-down of
              restaurants.
            </p>
            <p>
              Because of this, we made it our mission to invigorate the
              tastebuds of Filipinos and anyone else who wishes to satisfy their
              cravings for texan style cuisines, from the comfort and safety of
              their own homes.
            </p>
          </div>
          <img src={Taco} alt="Taco bite" />
        </div>

        <div className="meat-the-team">
          <img className="divider" src={Steak} alt="Meat the team" />
          <h1>MEAT THE TEAM</h1>
          <span>
            From our kitchens, to your homes, here's the people that made it all
            possible.
          </span>
          <div className="owners">
            <div className="owner">
              <img src={Agdon} alt="" />
              <div className="name">
                John Paul Agdon <span>Owner</span>
              </div>
            </div>
            <div className="owner">
              <img src={Santiago} alt="" />
              <div className="name">
                Mark Santiago <span>Owner / Chef</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
