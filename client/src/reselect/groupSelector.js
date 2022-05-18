import { createSelector } from 'reselect'

const groupSelector = state => state.groups.groups
const showAllSelctor = state => state.groups.showAllGroups
const userIdSelector = state => state.auth.user._id

const getFilteredGroups = (groups, showAll, userId) => {
    if (!showAll) {

        // groups.active.images = groups.active.images.filter(image => image.user === userId);
    }

    return showAll ? groups : groups.filter(group => group.private === true);
}

export default createSelector(
    groupSelector,
    showAllSelctor,
    userIdSelector,
    getFilteredGroups
)