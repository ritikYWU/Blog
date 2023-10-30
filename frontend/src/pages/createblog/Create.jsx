import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import CreateBlogService from "../../services/CreateBlogService";

import "./Create.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Create = () => {
    const [data, setData] = useState({
        title: "",
        blog: "",
        created_by: localStorage.getItem("id"),
        picture: "",
    });
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("accessToken");

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleImage = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.files[0],
            picture: e.target.files[0],
        });
    };

    const handleClick = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("blog", data.blog);
        formData.append("created_by", localStorage.getItem("id"));
        formData.append("picture", data.picture);

        try {
            const response = await CreateBlogService(formData);
            if (response.status === 201) {
                toast.success(response.message, {
                    position: "top-center",
                });
                navigate("/article");
            } else {
                console.log(response);
            }
        } catch (error) {
            toast.error(error, {
                position: "top-center",
            });
        }
    };

    useEffect(() => {
        let token = localStorage.getItem("accessToken");

        if (!token) {
            toast.error("You should be logged in to create.", {
                position: "top-center",
            });
            navigate("/login");
        }
    }, []);

    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} />
            <div>
                <form className="create" encType="multipart/form-data">
                    <input
                        type="text"
                        onChange={handleChange}
                        name="title"
                        value={data.title}
                        className="create-title"
                        placeholder="Enter title here"
                    />
                    <input
                        type="file"
                        onChange={handleImage}
                        name="picture"
                        className="create-file"
                    />
                    <textarea
                        name="blog"
                        cols="30"
                        rows="18"
                        onChange={handleChange}
                        value={data.blog}
                        className="create-blog"
                        placeholder="Enter the blog here"></textarea>
                    <button className="btn-add" onClick={handleClick}>
                        Add Blog
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Create;
