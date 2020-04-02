import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import propTypes from 'prop-types';
class Post extends Component {

    componentWillMount() {
        this.props.fetchPosts();

    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    // // in order to put in component state
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         posts:[]
    //     }
    // }
    // componentWillMount() {
    //     console.log("hello");
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(data => this.setState({
    //         posts:data
    //     }))
    // }
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>post</h1>
                {postItems}
            </div>
        )
    }
}
Post.propTypes = {
    fetchPosts: propTypes.func.isRequired,
    posts: propTypes.array.isRequired,
    newPost: propTypes.object
}
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})
export default connect(mapStateToProps, { fetchPosts })(Post);
