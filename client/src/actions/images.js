import {
    GET_IMAGES,
    CLEAR_IMAGES
} from './types';

import api from '../utils/api';
import axios from 'axios';


/* ===================================
   Get images
=================================== */
export const getImages = (activeBookmarkId) => async dispatch => {
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
export const uploadImages = (images) => async dispatch => {
    try {
        let uploaded = 0;

        // Get presigned urls
        const resUrls = await api.get('/api/upload/image?count=' + images.length);

        for (let i = 0; i < images.length; i++) {
            // upload each image to s3
            const image = await axios.put(resUrls.data.urls[i], images[i], { headers: { 'Content-Type': 'image/jpeg' }}) 
            uploaded++;
            console.log('uploading: ', uploaded);
        }

        // upload completed
        if(uploaded === images.length) {
            console.log('done')
        }
        

        const res = await api.post('/api/image', resUrls.data.keys )
    } catch (err) {
        console.log(err);
    }
} 