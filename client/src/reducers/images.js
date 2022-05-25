import {
    GET_IMAGES,
    CLEAR_IMAGES,
    UPLOAD_IMAGES_SUCCESS
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

        case UPLOAD_IMAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                images: [...state.images, ...payload]
            }

        default:
            return {
                ...state
            }
    }
}