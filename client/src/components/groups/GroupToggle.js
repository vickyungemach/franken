import React from 'react';
import { Add, People, Person } from 'react-ionicons'
import { connect } from 'react-redux'
import { toggleShared } from 'actions/groups'

const GroupToggle = ({ shared, toggleShared, className='' }) => {

    const classNames = ['group__toggle-btn', className].join(' ').trim();

    const privateBtn = <button onClick={toggleShared} className={classNames}> <Person height="17px" color="#333" />My Groups</button>;
    const sharedBtn = <button onClick={toggleShared} className={classNames}> <People height="17px" color="#333" />All Groups</button>;

    return shared ? sharedBtn : privateBtn
    
}

const mapStateToProps = state => ({
    shared: state.groups.shared
})

export default connect(mapStateToProps, { toggleShared })(GroupToggle);

