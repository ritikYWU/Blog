import React from 'react'
import './HeroBlog.css'

const HeroBlog = ({post}) => {
    const formatted_date = new Date(post.created_date).toDateString()

  return (
    <div className='blog-post' id={post.id}>
        <img src="https://imgs.search.brave.com/3iMOJt5wrTt_T5krrTSMLNlwqJJEMbq5vtlygQjywKo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzMzMDcz/L3NjcmVlbnNob3Rz/LzE1MjM4MDY1L21l/ZGlhLzVkZjVhODRm/M2VkOTA4YWQ3YmFk/MzZmYTY0NWUzZDRh/LnBuZz9yZXNpemU9/NDAweDMwMCZ2ZXJ0/aWNhbD1jZW50ZXI" alt="" />
        <div className="content">
            <span className="date">{formatted_date}</span>
            <h3>
                {post.title}
            </h3>
            <p>
                {post.blog}
            </p>
            <span className='created_by'>{post.created_by.username}</span>
        </div>
    </div>
  )
}

export default HeroBlog