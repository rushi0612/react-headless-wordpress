import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import CategoryFilter from "../components/CategoryFilter";
import api from "../services/api";

function Home() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch Categories
  useEffect(() => {
    api
      .get("/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  // Fetch Posts
  useEffect(() => {
    const url = selectedCategory
      ? `/posts?_embed&categories=${selectedCategory}`
      : "/posts?_embed";

    api
      .get(url)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
      });
  }, [selectedCategory]);

  return (
    <div className="container">
      <h1>WordPress Blog</h1>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}

export default Home;