import React from "react";
import { Link } from "react-router-dom";

import makeRoute from "../../services/makeRoute";
// import '../heroblog/HeroBlog.css'
import "./Post.css";

const Post = ({ post }) => {
    const formatted_date = new Date(post.created_date).toDateString();

    return (
        <div className="small-post" id={post.id}>
            <Link to={`/post/${makeRoute(post.title)}`} state={post}>
                <img src={`${post.picture}`} alt="" />
                <div className="small-content">
                    <span className="small-date">{formatted_date}</span>
                    <h3>{post.title}</h3>
                    <p>{post.blog}</p>
                    <span className="small-created_by">
                        {post.created_by.username}
                    </span>
                </div>
            </Link>
        </div>
    );
};

export default Post;
