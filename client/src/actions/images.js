import {
    GET_IMAGES
} from './types';

import api from '../utils/api';



export const getImages = () => async dispatch => {
    try {
        const res = await api.get('/api/image/624ad5ecef93d753b387a024');

        dispatch({
            type: GET_IMAGES,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}