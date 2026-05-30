import { useEffect, useState } from "react";
import PostCard from "./components/PostCard";
import api from "./services/api";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts?_embed")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
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

export default App;