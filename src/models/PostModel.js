//API Calls for Posts
// import axios from 'axios'
const url = 'http://localhost:4000/api/v1/posts'

class PostModel {
  static getAllPosts = () => {
    return fetch(url)
      .then((res) => res.json())
  }
  static getPostById = (postId) => {
    return fetch(`${url}/${postId}`)
      .then((res) => res.json())
  }
  static createPost = (postObj) => {
    return fetch(url, {
      // configuration object anytime you want to do anything other than a GET request
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'authorization': localStorage.getItem('token'),
      },
      // Date itself we want to send
      // if axios its datta
      body: JSON.stringify(postObj)
      // stringify converst objects to strings
    })
      .then((res) => res.json())
  }

  static updatePost = (post, id) => {
    return fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // 'authorization': localStorage.getItem('token'),
      },
      body: JSON.stringify(post)
    })
      .then((response) => response.json());
  }
  static deletePost = (id) => {
    return fetch(`${url}/${id}`, {
      method: 'DELETE',
      hearders: {
        'Content-Type': 'application/json',
        // 'authorization': localStorage.getItem('token'),
      },
    })
      .then((response) => response.json())
  }





  // static updatePost = (post) => {
  //   let request = axios.put(`${url}/${post._id}`);
  //   return request;
  // }
  // static deletePost = (post) => {
  //   let request = axios.delete(`${url}/${post._id}`);
  //   return request;
  // }
}

export default PostModel;

// For Delete you can leave off body/data-axios
// update needs body/data-axios