import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import './postsStyle.css'
import PostModel from '../../models/PostModel';



function PostCard(props) {
  const { post, list } = props
  const handleDelete = () => {
    PostModel.deletePost(post._id)
      .then((result) => props.history.push('/posts'))
      .catch((err) => console.log(err))
  }
  return (

    <div>
      <section className='post-card'>
        <li
          key='_id'>
          <Link
            to={`/posts/${post._id}`} >
            <h3>{post.title}</h3>
          </Link>

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

        <button className='delete' onClick={handleDelete}> Delete Post </button>

      </section>
    </div>
  )
};

export default withRouter(PostCard);