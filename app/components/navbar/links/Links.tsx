"use client"

import React from "react";
import NavLink from "./navLink/NavLink";
import styles from "./links.module.css";

export default function Links() {

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

      <button className = {styles.menuButton} onClick={() => setOpen((prev) => !prev)}> Menu </button>
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