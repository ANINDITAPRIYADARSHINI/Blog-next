"use client"

import React from "react";
import NavLink from "./navLink/NavLink";
import styles from "./links.module.css";
import Image from "next/image";

export default function Links() {

  const [isOptimized, setIsOptimized] = React.useState(true);

  const links = [
    {
      title: "Homepage",
      path: "/",
    },

    {
      title: "About",
      path: "/about",
    },

    {
      title: "Contact",
      path: "/contact",
    },

    {
      title: "Blogs",
      path: "/blog",
    },
  ]

  const [open, setOpen] = React.useState(false)

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link => (
          <NavLink item={link} key={link.title} />
        )))}
        
        {session ? (
          <>
            {isAdmin && 
              <NavLink item={{title: "Admin", path: "/admin"}} />
            }

            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{title: "Login", path: "/login"}} />
        )}
      </div>

      <Image className = {styles.menuButton} src="/menu.png" alt="" width={30} height={30} unoptimized={!isOptimized} onError={() => {setIsOptimized(false);}} onClick={() => setOpen((prev) => !prev)}/>
      {
        open && (
          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <NavLink item={link} key={link.title} />
            ))}
        </div>
      )}
    </div>
    
  );
}