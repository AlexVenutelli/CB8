import React from "react";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";

const Coriandoli = ({ color, quantity }) => {
  const [confettiDimensions, setConfettiDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setConfettiDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Confetti
      width={confettiDimensions.width}
      height={confettiDimensions.height}
      colors={[color]}
      numberOfPieces={quantity}
    />
  );
};

export default Coriandoli;
