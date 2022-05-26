import {
    GET_IMAGES,
    CLEAR_IMAGES,
    UPLOAD_IMAGES_SUCCESS,
    DELETE_IMAGES,
    UPDATE_PROGRESS
} from '../actions/types';

const initialState = {
    loading: true,
    images: [],
    progress: {
        number: null,
        total: null
    }
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

        case DELETE_IMAGES:
            return {
                ...state,
                loading: false,
                images: state.images.filter(image => !payload.includes(image._id))
            }

        case UPDATE_PROGRESS: 
            return {
                ...state,
                loading: false,
                progress: {
                    number: payload.number,
                    total: payload.total
                }
            }

        default:
            return {
                ...state
            }
    }
}