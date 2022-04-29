import { 
    TOGGLE_SHOW_ALL
} from './types';

export const toggleShowAll = () => async dispatch => {
    dispatch({
        type: TOGGLE_SHOW_ALL
    })
}




