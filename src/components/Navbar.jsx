import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          WP React Blog
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/">Blog</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;