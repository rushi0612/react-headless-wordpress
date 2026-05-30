import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

function SinglePost() {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/posts/${id}?_embed`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (!post) {
    return <h2>Loading...</h2>;
  }

  const image =
    post._embedded?.["wp:featuredmedia"]?.[0]
      ?.source_url;

  return (
    <div className="container">
      <Link to="/">
        ← Back to Home
      </Link>

      {image && (
        <img
          src={image}
          alt={post.title.rendered}
          className="card-image"
        />
      )}

      <h1
        dangerouslySetInnerHTML={{
          __html: post.title.rendered,
        }}
      />

      <div
        dangerouslySetInnerHTML={{
          __html: post.content.rendered,
        }}
      />
    </div>
  );
}

export default SinglePost;