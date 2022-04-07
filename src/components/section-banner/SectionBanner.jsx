import "./styles.css";

const SectionBanner = ({ data }) => {
  const { subHeading, topHeading, img } = data;
  return (
    <div
      className="section-banner"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img})`,
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
