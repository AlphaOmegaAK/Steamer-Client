//API Calls for Posts
// import axios from 'axios'
const url = 'http://localhost:4000/api/v1/posts'


class PostModel {
  static getAllPosts = () => {
    return fetch(url)
      .then((res) => res.json())
  }
  static getPostById = (postId) => {
    return fetch(`${url}/${postId}/`)
      .then((res) => res.json())
  }
  static createPost = (newPost) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token'),
      },

      body: JSON.stringify(newPost)

    })
      .then((res) => res.json())
  }

  // static updatePost = (updatePost, id) => {
  //   let request = axios.put(`${url}/${id}/`, updatePost);
  //   return request;
  // }
  static updatePost = (updatePost, id) => {
    return fetch(`${url}/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // 'authorization': localStorage.getItem('token'),
      },
      body: JSON.stringify(updatePost)
    })
      .then((response) => response.json(updatePost));
  }
  static deletePost = (id) => {
    return fetch(`${url}/${id}`, {
      method: 'DELETE',
      hearders: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token'),
      },
    })
      .then((response) => response.json())
  }





  // static deletePost = (post) => {
  //   let request = axios.delete(`${url}/${post._id}`);
  //   return request;
  // }
}

export default PostModel;

// For Delete you can leave off body/data-axios
// update needs body/data-axios