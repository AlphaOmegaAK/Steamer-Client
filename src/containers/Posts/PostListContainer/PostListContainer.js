import React from 'react';
import PostList from '../../../components/PostsComponent/PostsList'
import PostModel from '../../../models/PostModel';
import { Link } from 'react-router-dom';


class PostListContainer extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {

    PostModel.getAllPosts()
      .then((result) => {
        console.log(result);
        this.setState({ posts: result })
      })
      .catch((err) => console.log(err))
  }

  render() {


    return (

      <div className="">
        <Link to="/posts/new"><button className="btn third">Write a Post</button></Link>
        <PostList posts={this.state.posts} />



      </div>

    )
  };
}

export default PostListContainer;