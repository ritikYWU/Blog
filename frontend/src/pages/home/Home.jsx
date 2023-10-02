import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import BlogListService from '../../services/BlogListService'
import Navbar from '../../components/navbar/Navbar'
import HeroBlog from '../../components/heroblog/HeroBlog'
import Post from '../../components/post/Post'
import Footer from '../../components/footer/Footer'


import './Home.css'

const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const isLoggedIn = localStorage.getItem('accessToken')

  const fetchData = async () => {
    try {
      const response = await BlogListService();
      if (response) {
        setData(response);
        // console.log('Fetched data:', response);
        setLoading(false); 
      } else {
        console.log('No response');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    fetchData()
  },[])

  
    

  return (
    <>
    <Navbar isLoggedIn={isLoggedIn} />
    {loading ? (
      <p>Loading data...</p>
    ) : (
      <>
      <div className="hero">
        <HeroBlog post={data.results && data.results.length > 0 ? data.results[0] : null} />
      </div>
      <div className="banner">
        Stay Curious
      </div>
      <div className="blog_posts">
        {
          data.results.map((post, index)=>{
            console.log('index', index)
            if (index){
              return <Post post={post} key={post.id} id={post.id}/>
            }
            else{
              return null
            }
            
          })
        }
      </div>
      </>
    )}
    <Footer />
  </>
    
  )
}

export default Home