import React, { useState, useEffect} from 'react'
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

import LogInService from '../../../services/LogInService'
import './LoginForm.css'

const LoginForm = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [loginData, setLoginData] = useState({})

    const navigate = useNavigate();


    const isLoggedIn = localStorage.getItem('accessToken')
    useEffect(() => {
        if (isLoggedIn){
            navigate('/')
        }
    })


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
            console.log(response.success)

            if (response.success){
                toast.success("Login successful.",{
                    position:'top-center'
                },
                {
                    style: { fontSize: "0.7rem",  },
                });
    
                console.log('login successful')
                window.location.reload(true)
                navigate('/')
            }
            else{
                toast.error("Invalid username or password.",{
                    position:'top-center'
                },
                {
                    style: { fontSize: "0.7rem" },
                });
    
                console.log('login failed')
            }
        }
        catch{
            toast.error("Something went wrong.",{
                position:'top-center'
            },
            {
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
                    <Link to='/register'> Signup now</Link>
                </p>
            </div>
           
        </form>
    </div>
    
  )
}

export default LoginForm