import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../../config/data";
import Chip from "../../components/common/Chip";
import EmptyList from "../../components/common/EmptyList";
import "./styles.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === id);

    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <>
          <Helmet>
            <title>Inqiri | {blog.title}</title>
            <meta name="description" content={blog.shortDescription} />
            <meta property="og:image" content={blog.cover} />
          </Helmet>
          <header style={{ textAlign: "center" }}>
            <img
              src={blog.cover}
              alt="cover"
              width="20%"
              style={{ borderRadius: "10px" }}
            />

            <h2 style={{ marginTop: "10px" }}>{blog.title}</h2>
          </header>
          <div className="blog-wrap">
            <p className="blog-desc">{blog.description}</p>
          </div>
        </>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
