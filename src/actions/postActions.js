import { FETCH_POSTS, NEW_POST } from './types';


export const fetchPosts =() => dispatch => {
    // the thunk and middleware allow us to call dispatch function directly
    //  so that we can make asyncronoush directly
 
        fetch('https://jsonplaceholder.typicode.com/posts')
        // fetch will return to promise
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
            })
        );
}

// create new actions
export const createPost =(postData) => dispatch => {
    // console.log('action called')
      // make a fetch request
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
        }))
};

export default fetchPosts;