import api from '../utils/api';

import {
    START_SELECTION,
    END_SELECTION
} from './types';

export const startSelection = () => async dispatch => {
    dispatch({
        type: START_SELECTION
    })
}


export const endSelection = () => async dispatch => {
    dispatch({
        type: END_SELECTION
    })
}