import {
    TOGGLE_SHOW_ALL,
} from '../actions/types';

const initialState = {
    loading: true,
    showAll: false
}

export default function groupReducer (state = initialState, action) {
    const { payload, type } = action;

    switch(type) {
        
        case TOGGLE_SHOW_ALL: 
            return {
                ...state,
                showAll: !state.showAll
            }

        default:
            return {
                ...state
            }
    }
}