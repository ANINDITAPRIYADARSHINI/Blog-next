"use client"
import React from "react";

import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";



export default function PostCard() {
    const [isOptimized, setIsOptimized] = React.useState(true);
    return(
        <div className={styles.container}>

            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src= "/download.jpg" alt="" fill unoptimized={!isOptimized} className= {styles.img} onError={() => {setIsOptimized(false);}} />
                </div>

                <span className={styles.date}>01.01.2025</span>
            </div>

            <div className={styles.bottom}>
                <h1 className={styles.title}>hello</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum labore minima dolorem? Laudantium sequi quis doloremque aspernatur quas quibusdam, repellendus iste dolore quasi. Tempora ea non, accusamus voluptatibus at placeat?</p>
                <Link className={styles.link} href="/blog/post">READ MORE</Link>
            </div>
        </div>
    )
}