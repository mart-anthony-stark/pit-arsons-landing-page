import Button from "../../../components/button/Button";
import knife from "../../../images/home/hr-knife.png";


const Welcome = () => {
  return (
    <div className="welcome">
      <img src={knife} alt="" />
      <h1>Welcome to Pit Arsons</h1>
      <p>
        Sweet, smoky, fall-off-the-bone meatiness. Picture that in your mouth.
        Are you salivating yet?
      </p>
      <p>
        Don't stop at imagination - make it your reality by ordering from us
        now! Our company, established in 2020, is ready to cater to your texan
        taste by delivering ready to eat, seasoned and marinated meats right to
        your doorstep.
      </p>
      <Button>More About Us</Button>
    </div>
  );
};

export default Welcome;
