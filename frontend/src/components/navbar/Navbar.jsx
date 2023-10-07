import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";

import "./Navbar.css";

const Navbar = ({ isLoggedIn }) => {
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();

    const handleLogOut = (e) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("username");
        localStorage.removeItem("id");

        window.location.reload(true);
    };

    const handleUser = (e) => {
        navigate("/article");
    };

    const handleChange = (e) => {
        const selected = e.target.value;
        console.log(selected);
        if (selected === "logout") {
            handleLogOut();
        } else if (selected === "user") {
            handleUser();
        }
    };

    return (
        <>
            {auth ? (
                <></>
            ) : (
                <nav className="navbar">
                    <div className="brand">
                        <Link to="/"> Bloggy</Link>
                    </div>

                    <div className="links">
                        <ul>
                            <li className="nav-links">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-links">
                                <Link to="/article">Articles</Link>
                            </li>
                            <li className="nav-links">
                                <Link to="/create">Create</Link>
                            </li>
                            <li className="nav-links">
                                <Link to="/search">Search</Link>
                            </li>
                            {isLoggedIn ? (
                                <li className="nav-links">
                                    <div class="dropdown">
                                        <BiSolidUserCircle className="user-icon" />
                                        <select
                                            id="dropdwon-detail"
                                            onChange={handleChange}>
                                            <option
                                                value="user"
                                                selected
                                                disabled>
                                                {localStorage
                                                    .getItem("username")
                                                    .toUpperCase()}
                                            </option>
                                            <option value="user">
                                                Profile
                                            </option>
                                            <option value="logout">
                                                Logout
                                            </option>
                                        </select>
                                    </div>

                                    {/* <Link
                                        to="/"
                                        className="btn-auth"
                                        onClick={handleLogOut}>
                                        Logout
                                    </Link> */}
                                </li>
                            ) : (
                                <li className="nav-links">
                                    <Link to="/register" className="btn-auth">
                                        Get Started
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            )}
        </>
    );
};

export default Navbar;
