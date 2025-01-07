import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

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
    return (
      <div className={styles.links}>
        {links.map((link => (
          <NavLink item={link} key={link.title} />
        )))}
      </div>
    );
  }