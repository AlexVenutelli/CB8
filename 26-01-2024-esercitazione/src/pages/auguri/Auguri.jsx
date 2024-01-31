import { useState } from "react";
import Link from "next/link";
import Coriandoli from "../../components/confetti/Coriandoli";
import Styles from "./auguri.module.scss";

const Auguri = () => {
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(10);

  const handleInputChange = (e) => {
    setColor(e.target.value);
  };

  const onHandleQuantityChange = (e) => setQuantity(e.target.value);

  return (
    <div className={Styles.Auguri}>
      <Coriandoli color={color} quantity={quantity} />

      <div className={Styles.text}>
        <h1>Auguri!</h1>

        <input
          className={Styles.InputColor}
          type="text"
          placeholder="choose your favorite color"
          value={color}
          onChange={handleInputChange}
        />

        <input
          type="range"
          value={quantity}
          onChange={onHandleQuantityChange}
          max={500}
        />
      </div>
      <Link className={Styles.Link} href="/">
        torna alla home
      </Link>
    </div>
  );
};

export default Auguri;
