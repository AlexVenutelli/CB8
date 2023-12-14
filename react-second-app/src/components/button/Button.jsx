import "./index.css";

const Button = ({ textContent, color }) => {
  return (
    <button className="Button" style={{ color: color }}>
      {textContent}
    </button>
  );
};

export default Button;
