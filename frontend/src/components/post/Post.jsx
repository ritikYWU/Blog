import React from 'react'
// import '../heroblog/HeroBlog.css'
import './Post.css'

const Post = ({post}) => {
  const formatted_date = new Date(post.created_date).toDateString()

  return (
    <div className='small-post' id={post.id} >
        <img src="https://imgs.search.brave.com/LbSXHDlqHSETVZ_omevyT8EYcmmJsPmybgYSxkQyVzA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/Mi8wMS8yMi8wMi9t/b3VudGFpbi1sYW5k/c2NhcGUtMjAzMTUz/OV82NDAuanBn" alt="" />
        <div className="small-content">
            <span className="small-date">{formatted_date}</span>
            <h3>
                {post.title}
            </h3>
            <p>
                {post.blog}
            </p>
            <span className='small-created_by'>{post.created_by.username}</span>
        </div>
    </div>
  )
}

export default Post