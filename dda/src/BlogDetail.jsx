import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error(err);
        setBlog(null);
      }
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (!blog) return <h2>Blog not found</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() => navigate(-1)}
        style={{ marginBottom: "15px", padding: "6px 12px", cursor: "pointer" }}
      >
         Back
      </button>

      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
    </div>
  );
}

export default BlogDetail;
