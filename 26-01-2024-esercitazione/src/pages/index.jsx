import React from "react";
import Link from "next/link";
import ClockComponent from "../components/clock/ClockComponent";
import styles from "../styles/homepage.module.scss";

export default function Homepage() {
  return (
    <div className={styles.homepage}>
      <Link className={styles.text} href="/auguri/Auguri">
        Vai ai Coriandoli
      </Link>
      <ClockComponent />
    </div>
  );
}
