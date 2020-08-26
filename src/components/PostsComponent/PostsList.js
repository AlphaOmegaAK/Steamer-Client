import React from 'react';
import PostCard from './PostCard';
import './postsStyle.css'
import { Link } from 'react-router-dom';

function PostsList(props) {
  console.log(props);
  const postsList = props.posts.map((postObj) => {
    return <PostCard
      key={postObj._id} post={postObj}
      deletePost={props.deletePost}
      updatePost={props.updatePost}
      list />
  })
  return (
    <div className="post-container">

      {postsList}
      <Link to='/posts/new'> <button> Create Post</button></Link>
    </div>
  );
}

export default PostsList;