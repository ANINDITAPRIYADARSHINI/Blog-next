
import React from "react";
import Image from "next/image";
import styles from "./singlePost.module.css";
import PostCard from "@/app/components/postCard/PostCard";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")

  if(!res.ok){
    throw new Error("Something is wrong")
  }

  return res.json()
}

export default async function SinglePostPage() {

  const posts = await getData();

  

    return (
      <div className={styles.container}>
        {posts.map((post: { id: React.Key | null | undefined; }) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
        
      </div>
    );
  }

