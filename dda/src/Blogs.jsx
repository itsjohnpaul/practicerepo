import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setBlogs(data); // first 10 for simplicity
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  if (loading) return <center><h2>Loading...</h2></center>;

  return (
    <div className="blogs-container">
      <center><h1>Blogs List</h1></center>
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h4>{blog.title}</h4>
            <Link to={`${blog.id}`} className="read-more">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
