import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import DetailBlog from "./pages/detailBlog/DetailBlog";
import Footer from "./components/footer/Footer";
import Article from "./pages/article/Article";
import Create from "./pages/createblog/Create";
import Edit from "./pages/edit/Edit";

function App() {
    const isLoggedIn = localStorage.getItem("accessToken");

    return (
        <>
            <BrowserRouter>
                <Navbar isLoggedIn={isLoggedIn} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="post/:title" element={<DetailBlog />} />
                    <Route path="/article" element={<Article />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/edit/:title" element={<Edit />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
