import React, { useEffect } from 'react';
import GroupDetailHeader from './GroupDetailHeader';
import Container from 'components/layout/Container';
import Grid from 'components/common/grid/Grid';
import { connect } from 'react-redux';
import { getOneGroup, clearGroup, deleteGroup } from 'actions/groups';

const GroupDetail = ({ match, showAllImages, getOneGroup, group, clearGroup, deleteGroup, images, user }) => {

    useEffect(() => {
        clearGroup();
        getOneGroup(match.params.id)
    }, [])

    return (
        <Container>
            {
                group && (
                    <>
                        <GroupDetailHeader isPrivate={group.private} showAllImages={showAllImages} title={group.title} deleteGroup={() => deleteGroup(group._id)} />
                        <Grid images={showAllImages ? group.images : group.images.filter(i => i.user === user)  } />
                    </>
                )
            }
        </Container>
    )
}


const mapStateToProps = state => ({
    showAllImages: state.groups.showAllImages,
    group: state.groups.active,
    user: state.auth.user._id
})

export default connect(mapStateToProps, { getOneGroup, clearGroup, deleteGroup })(GroupDetail);

