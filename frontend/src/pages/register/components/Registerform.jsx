import React, { useState, useEffect } from 'react'
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";


import '../../login/components/LoginForm.css'
import RegisterService from '../../../services/RegisterService';

const RegisterForm = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

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

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response = await RegisterService(username,email, password)
            console.log(response.success)

            if (response.success){
                toast.success("Registered successful.", {
                    position:'top-center'
                },
                {
                    style: { fontSize: "0.7rem" },
                });
    
                console.log('register successful')
                navigate('/login')
            }
            else{
                toast.error("Error", {
                    position:'top-center'
                },
                {
                    style: { fontSize: "0.7rem" },
                });
    
                console.log('signup failed')
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
                <input type="text" name="username" placeholder='Enter your username' onChange={handleUsername}/>
            </div>

            <div className="email">
                <input type="text" name="email" placeholder='Enter your email' onChange={handleEmail} />
            </div>

            <div className="password">
                <input type="password" name="password" placeholder='Enter your password' onChange={handlePassword} />
            </div>

            <div className="button">
                <button onClick={handleSubmit}>Signup</button>
            </div>

            <div className="no-account">
                <p>
                    Already have an account? 
                    <Link to='/login'> Login now</Link>
                </p>
            </div>
           
        </form>
    </div>
    
  )
}

export default RegisterForm