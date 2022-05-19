import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import GroupHeader from 'components/groups/GroupHeader';
import GroupList from 'components/groups/GroupList';
import Container from 'components/layout/Container';
import Modal from 'components/elements/Modal';
import CreateGroup from 'components/groups/CreateGroup';

import { getGroups, saveGroup } from 'actions/groups';
import { getAllUsers } from 'actions/auth';
import filteredGroups from '../reselect/groupSelector';


const Groups = ({ closeCreateForm, openCreateForm, getGroups, groups, showAllGroups, getAllUsers, allUsers, saveGroup }) => {
    const [createGroup, setCreateGroup] = useState(false);
    const [addMemberInput, setAddMemberInput] = useState(false);

    const openCreateGroup = () => setCreateGroup(true);

    useEffect(() => {
        getGroups();
    }, [])


    return (
        <Container>
            <div className="group">
                <GroupHeader openCreateGroup={openCreateGroup} showAllGroups={showAllGroups} />
                <GroupList groups={groups} />
            </div>

            <Modal
                modal={createGroup}
                setModal={setCreateGroup}
                title="Create Group"
                width="30%"
            >
                <CreateGroup saveGroup={saveGroup} getAllUsers={getAllUsers} allUsers={allUsers} createGroup={createGroup} addMemberInput={addMemberInput} setAddMemberInput={setAddMemberInput} />
            </Modal>
        </Container >
    )
}

const mapStateToProps = state => ({
    groups: filteredGroups(state),
    showAllGroups: state.groups.showAllGroups,
    allUsers: state.auth.allUsers
})

export default connect(mapStateToProps, { getGroups, getAllUsers, saveGroup })(Groups);

