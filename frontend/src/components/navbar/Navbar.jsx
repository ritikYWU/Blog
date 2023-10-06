import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn }) => {
    const [auth, setAuth] = useState(false);

    // const location = useLocation();

    // useEffect(() => {
    //     console.log(location.pathname)

    // if (location.pathname == '/login' | location.pathname == '/register'){
    //     setAuth(true)
    // }
    // else{
    //     setAuth(false)
    // }

    // }, [auth])

    const handleLogOut = (e) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("username");
        localStorage.removeItem("id");

        window.location.reload(true);
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
                            {isLoggedIn ? (
                                <li className="nav-links">
                                    <Link
                                        to="/"
                                        className="btn-auth"
                                        onClick={handleLogOut}>
                                        Logout
                                    </Link>
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
