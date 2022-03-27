import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import "./styles.css";

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <Link to={`/wiki/${id}`}>
      <div className="blogItem-wrap">
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default BlogItem;
