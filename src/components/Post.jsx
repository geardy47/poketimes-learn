import React from 'react';
import { connect } from 'react-redux';

class Post extends React.Component {
  // state = {
  //   post: null,
  // };
  // componentDidMount() {
  //   // console.log(this.props);
  //   // get the post_id from props (automated class based + Route)
  //   let id = this.props.match.params.post_id;
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts/' + id)
  //     .then((res) => {
  //       this.setState({
  //         post: res.data,
  //       });
  //       // console.log(this.state.post);
  //     });
  // }

  render() {
    const post = this.props.post ? (
      <div className='post'>
        <h4 className='center'>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
      </div>
    ) : (
      <div className='center'>Loading post...</div>
    );

    return <div className='container'>{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

export default connect(mapStateToProps)(Post);
