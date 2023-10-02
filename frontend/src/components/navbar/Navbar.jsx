import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({isLoggedIn}) => {
    const handleLogOut = (e) => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('username')
    
        window.location.reload(true)
    }

    return (
        <nav className='navbar'>
            <div className="brand">
                Hash
            </div>

            <div className="links">
                <ul>
                    <li className='nav-links'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='nav-links'>
                        <Link to='#'>Articles</Link>
                    </li>
                    <li className='nav-links'>
                        <Link to='#'>Create</Link>
                    </li>
                {isLoggedIn
                    ?<li className='nav-links'>
                        <Link to='' className='btn-auth' onClick={handleLogOut}>Logout</Link>    
                    </li>
                    : <li className='nav-links'>
                        <Link to='/register' className='btn-auth' >Get Started</Link>    
                    </li>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar