import React from 'react';
import { Link } from 'react-router-dom'
import './postsStyle.css'



function PostCard({ post, list }) {

  return (

    <div>
      <section className='post-card'>
        <li key='_id'>
          <Link to={`/posts/${post._id}`} >
            <h3>{post.title}</h3>
          </Link >
          <h5>{post.topic}</h5>
          <hr />
          {!list && (
            <>
              <p>{post.body}</p><hr />
              <strong>Posted by: {post.user && 'Anonymous'}</strong><br />
              <em>Posted at: {post.createdAt}</em>
            </>
          )}
        </li>
      </section>
    </div>
  )
};

export default PostCard;