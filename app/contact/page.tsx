"use client"
import React from "react";
import Image from "next/image";
import styles from "./contact.module.css";


export default function ContactPage() {
  
  const [isOptimized, setIsOptimized] = React.useState(true);
    return (
      <div className={styles.container}>
        
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" fill unoptimized={!isOptimized} className= {styles.img} onError={() => {setIsOptimized(false);}}/>
        </div>

        <div className={styles.formContainer}>
          

          <form action="" className={styles.form}>
            <input type="text" placeholder="Name and Surname" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number (Optional)" />
            <textarea
              name=""
              id=""
              cols= {30}
              rows= {10}
              placeholder="Message"
            ></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    );
  }

