import "./index.css";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-text">
        <h1>
          Il ritorno <span>di Cagliostro</span>
        </h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="button">
        <button>+</button>
        <button>Play</button>
        <button>Add to Prefer</button>
      </div>
    </div>
  );
};

export default Hero;
