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
                    <Route path="post/:id" element={<DetailBlog />} />
                    <Route path='/article' element={<Article />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
