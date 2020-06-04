import React from 'react';
import axios from 'axios';

class Post extends React.Component {
  state = {
    post: null,
  };
  componentDidMount() {
    // console.log(this.props);
    // get the post_id from props (automated class based + Route)
    let id = this.props.match.params.post_id;
    axios
      .get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((res) => {
        this.setState({
          post: res.data,
        });
        // console.log(this.state.post);
      });
  }

  render() {
    // const { post } = this.state;

    const post = this.state.post ? (
      <div className='post'>
        <h4 className='center'>{this.state.post.title}</h4>
        <p className='center'>{this.state.post.body}</p>
      </div>
    ) : (
      <div className='center'>Loading post...</div>
    );

    return <div className='container'>{post}</div>;
  }
}

export default Post;
