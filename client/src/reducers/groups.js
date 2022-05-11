import {
    TOGGLE_SHOW_ALL,
    GET_GROUPS,
    CREATE_GROUP,
    DELETE_GROUP,
    ADD_MEMBERS,
    SET_ACTIVE_GROUP,
    GET_ONE_GROUP,
    CLEAR_GROUP
} from '../actions/types';

const initialState = {
    groups: [],
    active: null,
    showAll: false,
    loading: true,
}

export default function groupReducer(state = initialState, action) {
    const { payload, type } = action;

    switch (type) {

        case TOGGLE_SHOW_ALL:
            return {
                ...state,
                showAll: !state.showAll
            }

        case GET_GROUPS:
            return {
                ...state,
                groups: payload,
                loading: false
            }

        case CREATE_GROUP:
            return {
                ...state,
                groups: payload
            }

        case DELETE_GROUP:
            return {
                ...state,
                groups: state.groups.filter(group => group._id !== payload._id)
            }

        case SET_ACTIVE_GROUP:
            return {
                ...state,
                active: payload
            }

        case GET_ONE_GROUP:
            return {
                ...state,
                active: payload
            }

        case CLEAR_GROUP:
            return {
                ...state,
                loading: true,
                active: null
            }

        default:
            return {
                ...state
            }
    }
}