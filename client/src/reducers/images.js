import {
    GET_IMAGES
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
                loading: false,
                images: payload
            }

        default:
            return {
                ...state
            }
    }
}