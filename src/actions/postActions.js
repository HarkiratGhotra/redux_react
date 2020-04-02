import { FETCH_POSTS, NEW_POSTS } from './types';
import { createDispatchHook } from 'react-redux/lib/hooks/useDispatch';

export const fetchPosts = () => dispatch =>  {
    console.log("fetching api")
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
    }))
}

export const createPost = postData => dispatch =>  {
    console.log('action called');
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POSTS,
            payload: post
        }))
}