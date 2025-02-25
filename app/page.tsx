"use client"

import React from "react";
import Image from 'next/image';
import styles from "./home.module.css";


export default function Home() {
  const [isOptimized, setIsOptimized] = React.useState(true);
  const [Optimized, setOptimized] = React.useState(true);

  return (
    <div className={styles.container}>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>

        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>

        <div className={styles.brands}>
          <Image src= "/brands.png" alt= "" fill unoptimized={!Optimized} className={styles.brandImg} onError={() => {setOptimized(false);}} />
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src= "/hero.gif" alt= "" fill unoptimized={!isOptimized} className={styles.heroImg} onError={() => {setIsOptimized(false);}} />
      </div>
    </div>
  );
}
