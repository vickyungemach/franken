import React from 'react';
import { People, Person } from 'react-ionicons'
import { connect } from 'react-redux'
import { toggleShowAll } from 'actions/groups'

const GroupToggle = ({ showAll, toggleShowAll, className='' }) => {

    const classNames = ['group__toggle-btn', className].join(' ').trim();

    const myGroupsBtn = <button onClick={toggleShowAll} className={classNames}> <Person height="17px" color="#333" />My Groups</button>;
    const allGroupsBtn = <button onClick={toggleShowAll} className={classNames}> <People height="17px" color="#333" />All Groups</button>;

    return showAll ? allGroupsBtn : myGroupsBtn
    
}

const mapStateToProps = state => ({
    showAll: state.groups.showAll
})

export default connect(mapStateToProps, { toggleShowAll })(GroupToggle);

