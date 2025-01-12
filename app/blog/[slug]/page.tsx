"use client"
import React from "react";
import Image from "next/image";
import styles from "./singlePost.module.css";



export default function SinglePostPage() {
  const [isOptimized, setIsOptimized] = React.useState(true);
  const [optimized, setOptimized] = React.useState(true);

    return (
      <div className={styles.container}>
        
        <div className={styles.imgContainer}>
          <Image src="/download.jpg" alt="" fill unoptimized={!isOptimized} className={styles.img} onError={() => {setIsOptimized(false);}} />
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>Hello</h1>

          <div className={styles.detail}>
            <Image src="/noavatar.png" alt="" fill unoptimized={!optimized} className={styles.avatar} onError={() => {setOptimized(false);}} />

            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Abc</span>
              <span className={styles.detailValue}>gghs</span>
            </div>

            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.01.2025</span>
            </div>
          </div>
          <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos quisquam nam nesciunt nostrum similique, sit aliquid molestiae quam nihil atque qui ea architecto vitae adipisci. Cupiditate perferendis provident aspernatur.</div>
        </div>
      </div>
    );
  }

