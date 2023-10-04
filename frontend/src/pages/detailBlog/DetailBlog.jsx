import React from "react";
import { useLocation } from "react-router-dom";

import "./DetailBlog.css";

const DetailBlog = () => {
    const location = useLocation();
    const data = location.state;

    console.log("location data", data);
    return (
        <div className="detail-page">
            <h1>{data.title}</h1>
            <img src={`${data.picture}`} alt="" />
            <p className="content-blog">{data.blog}</p>
        </div>
    );
};

export default DetailBlog;
