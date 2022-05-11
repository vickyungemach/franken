import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import GroupHeader from 'components/groups/GroupHeader';
import GroupList from 'components/groups/GroupList';
import Container from 'components/layout/Container';
import Modal from 'components/elements/Modal';
import CreateGroup from 'components/groups/CreateGroup';

import { getGroups } from 'actions/groups';


const Groups = ({ closeCreateForm, openCreateForm, getGroups, groups }) => {
    const [createGroup, setCreateGroup] = useState(false);
    const [addMemberInput, setAddMemberInput] = useState(false);

    const openCreateGroup = () => setCreateGroup(true);

    useEffect(() => {
        getGroups();
    }, [])


    return (
        <Container>
            <div className="group">
                <GroupHeader openCreateGroup={openCreateGroup} />
                <GroupList groups={groups} />
            </div>

            <Modal
                modal={createGroup}
                setModal={setCreateGroup}
                title="Create Group"
                width="30%"
            >
                <CreateGroup createGroup={createGroup} addMemberInput={addMemberInput} setAddMemberInput={setAddMemberInput} />
            </Modal>
        </Container >
    )
}

const mapStateToProps = state => ({
    groups: state.groups.groups
})

export default connect(mapStateToProps, { getGroups })(Groups);

