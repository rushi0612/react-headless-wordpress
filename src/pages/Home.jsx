import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import api from "../services/api";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts?_embed")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      <h1>WordPress Blog</h1>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}

export default Home;