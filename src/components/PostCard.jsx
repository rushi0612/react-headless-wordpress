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

      <button>Read More</button>
    </div>
  );
}

export default PostCard;