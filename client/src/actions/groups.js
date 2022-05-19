import {
    TOGGLE_SHOW_ALL_GROUPS,
    TOGGLE_SHOW_ALL_IMAGES,
    GET_GROUPS,
    SAVE_GROUP,
    DELETE_GROUP,
    ADD_MEMBERS,
    SET_ACTIVE_GROUP,
    GET_ONE_GROUP,
    CLEAR_GROUP
} from './types';

import api from '../utils/api';

export const toggleShowAll = (resource) => async dispatch => {
    if (resource === 'group') {
        dispatch({
            type: TOGGLE_SHOW_ALL_GROUPS
        })
    } else if (resource === 'photo') {
        dispatch({
            type: TOGGLE_SHOW_ALL_IMAGES
        })
    }


}

/* ===================================
   Get my groups
=================================== */
export const getGroups = () => async dispatch => {
    try {
        const res = await api.get('api/group');

        dispatch({
            type: GET_GROUPS,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
}

/* ===================================
   Get one group
=================================== */
export const getOneGroup = (id) => async dispatch => {
    try {
        const res = await api.get(`api/group/${id}`);

        dispatch({
            type: GET_ONE_GROUP,
            payload: res.data
        })
    } catch (err) {

    }
}

/* ===================================
   Save Group
=================================== */
export const saveGroup = (title, members) => async dispatch => {
    try {
        const group = await api.post('api/group', { title });

        const res = await api.put(`api/group/add/${group.data._id}`, { members });

        dispatch({
            type: SAVE_GROUP,
            payload: res.data
        })

    } catch (err) {
        console.log(err);
    }
}

/* ===================================
   Add Members
=================================== */
export const addMembers = (groupId, members) => async dispatch => {
    try {
        const res = await api.post('api/group/add/' + groupId, members);

        dispatch({
            type: ADD_MEMBERS,
            payload: res.data
        })

    } catch (err) {
        console.log(err);
    }
}


/* ===================================
   Delete Group
=================================== */
export const deleteGroup = (id) => async dispatch => {
    try {
        const res = await api.delete(`api/group/${id}`);

        dispatch({
            type: DELETE_GROUP,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}

/* ===================================
   Set active group
=================================== */
export const setActiveGroup = (id) => async dispatch => {
    dispatch({
        type: SET_ACTIVE_GROUP,
        payload: id
    })
}

/* ===================================
   Clear groups
=================================== */
export const clearGroup = () => async dispatch => {
    try {
        dispatch({
            type: CLEAR_GROUP
        })
    } catch (err) {
        console.log(err)
    }
}
