import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    // represent the single post we add
    item: {}
}

// validation for what type we dealing with
export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        // what type that is
        default:
            return state;

    }

}