
import styles from "./blog.module.css";
import PostCard from "../components/postCard/PostCard";
import postcss from "postcss";


export default async function BlogPage() {
    
  const posts = await getPosts();
  
  
  return (
      <div className= {styles.container}>
        {posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))}

        
      </div>
    );
  }

