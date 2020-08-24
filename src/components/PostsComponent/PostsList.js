import React from 'react';
import PostCard from './PostCard';


function PostsList(props) {
  console.log(props);
  const postsList = props.posts.map((postObj) => {
    return <PostCard key={postObj._id} post={postObj} list />
  })
  return (
    <div className="post-container">

      {postsList}

    </div>
  )
}

export default PostsList;