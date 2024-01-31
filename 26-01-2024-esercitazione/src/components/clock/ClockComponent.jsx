import React from "react";
import { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import styles from "./ClockComponent.module.scss";

const ClockComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.ClockWrapper}>
      <p>Current time:</p>
      <Clock
        className={styles.Clock}
        size={250}
        value={currentTime}
        renderNumbers={true}
      />
    </div>
  );
};

export default ClockComponent;
