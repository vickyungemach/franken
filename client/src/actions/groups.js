import { 
    TOGGLE_SHARED
} from './types';

export const toggleShared = () => async dispatch => {
    dispatch({
        type: TOGGLE_SHARED
    })
}




