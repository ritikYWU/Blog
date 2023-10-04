import React from "react";
import { Link } from "react-router-dom";

import RegisterForm from "./components/Registerform";

const Register = () => {
    return (
        <div className="login">
            <div className="icon">
                <Link to="/">#Hash</Link>
            </div>
            <div className="left-login">
                <h2>Signup</h2>
                <RegisterForm />
            </div>
            <div className="right-login">
                <h2 className="banner-text">
                    Every new blog is an opportunity for new learning
                    <p> Let's dive in and expand our knowledge!</p>
                </h2>
                <img
                    src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Register;
