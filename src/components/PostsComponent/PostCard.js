import React from 'react';
import './postsStyle.css'



function PostCard(props) {
  console.log('Post Props ', props);
  return (
    <div>
      <section className='post-card'>
        <li key='_id'>
          <h3>{props.post.title}</h3>
          <p>{props.post.body}</p>
          <em>{props.createdAt}</em>
        </li>
      </section>
    </div>
  )
};

export default PostCard;