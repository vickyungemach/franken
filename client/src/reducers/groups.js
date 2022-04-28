import {
    TOGGLE_SHARED,
} from '../actions/types';

const initialState = {
    loading: true,
    shared: false
}

export default function groupReducer (state = initialState, action) {
    const { payload, type } = action;

    switch(type) {
        
        case TOGGLE_SHARED: 
            return {
                ...state,
                shared: !state.shared
            }

        default:
            return {
                ...state
            }
    }
}