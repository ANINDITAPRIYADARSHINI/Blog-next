import Link from "next/link";
import path from "path";
import { title } from "process";

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
      <div>
        {links.map((link => (
          <Link href={link.path} key={link.title}> {link.title} </Link>
        )))}
      </div>
    );
  }