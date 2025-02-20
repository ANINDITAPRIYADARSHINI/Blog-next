
import React from "react";
import Image from "next/image";
import styles from "./singlePost.module.css";
import PostCard from "@/app/components/postCard/PostCard";



export default async function SinglePostPage() {



  

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

