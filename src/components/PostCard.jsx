import { Link } from "react-router-dom";
import "../App.css";

function PostCard({ post }) {
  const image =
    post._embedded?.["wp:featuredmedia"]?.[0]
      ?.source_url;

  return (
    <div className="card">
      {image && (
        <img
          src={image}
          alt={post.title.rendered}
          className="card-image"
        />
      )}

      <h2
        dangerouslySetInnerHTML={{
          __html: post.title.rendered,
        }}
      />

      <div
        dangerouslySetInnerHTML={{
          __html: post.excerpt.rendered,
        }}
      />

      <Link to={`/post/${post.id}`}>
        <button>Read More</button>
      </Link>
    </div>
  );
}

export default PostCard;