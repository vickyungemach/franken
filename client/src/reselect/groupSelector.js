import { createSelector } from 'reselect'

const groupSelector = state => state.groups.groups
const showAllSelctor = state => state.groups.showAll

const getFilteredGroups = (groups, showAll) => {
    return showAll ? groups : groups.filter(group => group.private === true);
}

export default createSelector(
    groupSelector,
    showAllSelctor,
    getFilteredGroups
)