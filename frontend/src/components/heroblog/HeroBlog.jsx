import React from "react";
import "./HeroBlog.css";

const HeroBlog = ({ post }) => {
    const formatted_date = new Date(post.created_date).toDateString();

    return (
        <div className="blog-post" id={post.id}>
            <img
                src={`${post.picture}`}
                alt=""
            />
            <div className="content">
                <span className="date">{formatted_date}</span>
                <h3>{post.title}</h3>
                <p>{post.blog}</p>
                <span className="created_by">{post.created_by.username}</span>
            </div>
        </div>
    );
};

export default HeroBlog;
