import {
    START_SELECTION,
    END_SELECTION
} from '../actions/types';

const initialState = {
    selection: false
}

export default function editReducer (state = initialState, action) {
    const { payload, type } = action;
    
    switch(type) {

        case START_SELECTION:
            return {
                ...state,
                selection: true
            }
    
        case END_SELECTION:
            return {
                ...state,
                selection: false
            }
            
        default:
            return {
                ...state
            }
    }
}