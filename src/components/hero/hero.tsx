import React from "react";
import { Parallax } from "react-parallax";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <Parallax
      blur={{ min: -10, max: 5 }}
      bgImage="/assets/images/hero-bg1.jpg"
      bgImageAlt="background"
      strength={200}
    >
      <div className={styles.hero}>
        <h1 className={styles.headline}>Mythen aus Westernis</h1>
        <h2 className={styles.subheadline}>Deine Bestimmung, in der großen von Westernis Welt</h2>
      </div>
    </Parallax>
  );
};

export default Hero;
