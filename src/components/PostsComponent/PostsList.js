import React from 'react';
import PostCard from './PostCard';
import './postsStyle.css'

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
    <div >

      {postsList}

    </div>
  );
}

export default PostsList;