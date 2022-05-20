import {
    GET_IMAGES,
    CLEAR_IMAGES
} from './types';

import api from '../utils/api';
import axios from 'axios';


/* ===================================
   Get images
=================================== */
export const getImages = ( activeBookmarkId ) => async dispatch => {
    try {
        const res = await api.get(`/api/image/${activeBookmarkId}`);

        dispatch({
            type: GET_IMAGES,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}

/* ===================================
   Clear images
=================================== */
export const clearImages = () => async dispatch => {
    try {
        dispatch({
            type: CLEAR_IMAGES
        })
    } catch (err) {
        console.log(err)
    }
}

/* ===================================
   Upload images
=================================== */
export const uploadImage = (image) => async dispatch => {
    try {
       const resUrl = await api.get('/api/upload/image');

       const resAWS = await axios.put(resUrl.data.url, image, { headers: { 'Content-Type': 'image/jpeg' }})   
       
        const res = await api.post('/api/image', { url: resUrl.data.key })
    } catch (err) {
        console.log(err);
    }
} 