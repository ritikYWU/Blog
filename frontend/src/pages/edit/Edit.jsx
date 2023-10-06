import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import EditBlogService from "../../services/EditBlogService";

const Edit = () => {
    const [data, setData] = useState();
    const location = useLocation();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        return;
    };

    const handleImage = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
            picture: e.target.files[0],
        });
        return;
    };

    const handleClick = async (e) => {
        e.preventDefault();
        console.log("patch");
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("blog", data.blog);
        formData.append("created_by", localStorage.getItem("id"));

        if (data.picture.includes("http://127.0.0.1:8000/")) {
            console.log("data", data.picture);
        } else {
            formData.append("picture", data.picture);
        }

        try {
            const response = await EditBlogService(formData, data.id);
            console.log("res", response);
            if (response) {
                toast.success(response.message, {
                    position: "top-center",
                });
                navigate("/article");
            }
        } catch (error) {
            toast.error(error, {
                position: "top-center",
            });
        }
        return;
    };

    useEffect(() => {
        setData(location.state);
    }, []);

    return (
        <div>
            {data ? (
                <form className="create" encType="multipart/form-data">
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="title"
                        value={data.title}
                        className="create-title"
                        placeholder="Enter title here"
                    />
                    <label className="warn">
                        *Upload image only to change the previous image
                    </label>
                    <input
                        type="file"
                        onChange={handleImage}
                        name="picture"
                        className="create-file"
                    />
                    <label>Blog</label>
                    <textarea
                        name="blog"
                        cols="30"
                        rows="22"
                        onChange={handleChange}
                        value={data.blog}
                        className="create-blog"
                        placeholder="Enter the blog here"></textarea>
                    <button className="btn-add" onClick={handleClick}>
                        Update
                    </button>
                </form>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Edit;
