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

        }));
}

export default fetchPosts;