import "./button.css";

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="cta">
      {children}
    </button>
  );
};

export default Button;
