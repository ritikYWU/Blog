import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import makeRoute from "../../services/makeRoute";

import "./DetailBlog.css";

const DetailBlog = () => {
    const [isSelf, setISSelf] = useState(Boolean);
    const location = useLocation();
    const data = location.state;

    useEffect(() => {
        if (data.created_by.id == localStorage.getItem("id")) {
            setISSelf(true);
        } else {
            setISSelf(false);
        }
    }, []);

    return (
        <div className="detail-page">
            <h1>{data.title}</h1>
            <img src={`${data.picture}`} alt="" />
            {isSelf ? (
                <Link
                    to={`/edit/${makeRoute(data.title)}`}
                    className="btn-edit"
                    state={data}>
                    Edit
                </Link>
            ) : (
                <></>
            )}
            <p className="content-blog">{data.blog}</p>
        </div>
    );
};

export default DetailBlog;
