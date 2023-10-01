import React, { useState } from 'react'
import { toast } from "react-toastify";

import LogInService from '../../../services/LogInService'
import './LoginForm.css'

const LoginForm = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [loginData, setLoginData] = useState({})

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response = await LogInService(username, password)

            toast.success("Login successful.", {
                style: { fontSize: "0.7rem" },
                });

            console.log('login successful')
        }
        catch{
            toast.error("Invalid username or password.", {
                style: { fontSize: "0.7rem" },
              });
            console.log('Something went wrong')
        }
        
      };

  return (
    <div>
        <form method='POST'>
            <div className="username">
                <input type="text" name="username"placeholder='Enter your username' onChange={handleUsername}/>
            </div>

            <div className="password">
                <input type="password" name="password" placeholder='Enter your password' onChange={handlePassword} />
            </div>

            <div className="forgot-password">
                <a href="#">Forgot password?</a>
            </div>

            <div className="button">
                <button onClick={handleSubmit}>Login</button>
            </div>

            <div className="no-account">
                <p>
                    Don't have an account? 
                    <a href="#"> Signup now</a>
                </p>
            </div>
           
        </form>
    </div>
    
  )
}

export default LoginForm