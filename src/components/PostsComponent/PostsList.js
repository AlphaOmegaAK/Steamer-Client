import React from 'react';
import PostCard from './PostCard';


function PostsList(props) {
  console.log(props);
  const postsList = props.posts.map((postObj) => {
    return <PostCard post={postObj} />
  })
  return (
    <div>
      <ul>
        {postsList}
      </ul>
    </div>
  )
}

export default PostsList;