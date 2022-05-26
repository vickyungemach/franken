import {
    GET_IMAGES,
    CLEAR_IMAGES,
    UPLOAD_IMAGES_SUCCESS,
    DELETE_IMAGES,
    UPDATE_PROGRESS
} from './types';

import api from '../utils/api';
import axios from 'axios';
import { addImages } from './groups';


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
export const uploadImages = (images, group) => async dispatch => {
    try {
        let uploaded = 0;

        // Get presigned urls
        const resUrls = await api.get('/api/upload/image?count=' + images.length);

        for (let i = 0; i < images.length; i++) {
            // upload each image to s3
            const image = await axios.put(resUrls.data.urls[i], images[i], { headers: { 'Content-Type': 'image/jpeg' }}) 
            uploaded++;
            console.log('uploading: ', uploaded);
            dispatch({
                type: UPDATE_PROGRESS,
                payload: { number: uploaded, total: images.length }
            })
        }

        // upload completed
        if(uploaded === images.length) {
            dispatch({
                type: UPDATE_PROGRESS,
                payload: { number: null, total: null }
            })
        }
        
        const res = await api.post('/api/image', resUrls.data.keys )

        dispatch({
            type: UPLOAD_IMAGES_SUCCESS,
            payload: res.data
        })

        if(group) {
            const imageIds = res.data.map(image => image._id);
            dispatch(addImages(group._id, {images: imageIds}))
        }


    } catch (err) {
        console.log(err);
    }
} 


/* ===================================
   Delete image
=================================== */

export const deleteImages = (ids) => async dispatch => {
    try {
        const res = await api.delete('/api/image', { data: ids });

        dispatch({
            type: DELETE_IMAGES,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}