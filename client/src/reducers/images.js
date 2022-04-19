import {
    GET_IMAGES,
    CLEAR_IMAGES
} from '../actions/types';

const initialState = {
    loading: true,
    images: []
}

export default function imageReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case GET_IMAGES:
            return {
                ...state,
                loading: false,
                images: payload
            }

        case CLEAR_IMAGES:
            return {
                ...state,
                loading: true,
                images: []
            }

        default:
            return {
                ...state
            }
    }
}