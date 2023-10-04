import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="about">
            <h3>About Us</h3>
            At Bloggy, our mission is to provide valuable and engaging 
            content to our readers. We strive to deliver high-quality 
            articles, tips, and insights on a variety of topics that 
            matter most to you. We believe in sharing knowledge and 
            sparking meaningful conversations that enrich lives.
        </div>

        <div className="info">
            <h3>Information</h3>
            <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='#'>Articles</Link>
                    </li>
                    <li>
                        <Link to='#'>Create</Link>
                    </li>
            </ul>
        </div>

        <div className="newsletter">
            <h3>Subscribe to Newsletter</h3>
            <form>
            <input type="email" placeholder='Enter your email' />
            <button className='btn-auth subscribe'>Subscribe</button>
            </form>
        </div>
    </footer>
  )
}

export default Footer