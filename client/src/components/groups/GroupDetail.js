import React, { useEffect } from 'react';
import GroupDetailHeader from './GroupDetailHeader';
import Container from 'components/layout/Container';
import Grid from 'components/common/grid/Grid';
import { connect } from 'react-redux';
import { getOneGroup, clearGroup } from 'actions/groups';

const GroupDetail = ({ match, images, showAll, getOneGroup, group, clearGroup }) => {

    useEffect(() => {
        clearGroup();
        getOneGroup(match.params.id)
    }, [])

    return (
        <Container>
            {
                group && (
                    <>
                        <GroupDetailHeader isPrivate={group.private} showAll={showAll} title={group.title} />
                        <Grid images={images} />
                    </>
                )
            }
        </Container>
    )
}


const mapStateToProps = state => ({
    images: state.images.images,
    showAll: state.groups.showAll,
    group: state.groups.active
})

export default connect(mapStateToProps, { getOneGroup, clearGroup })(GroupDetail);

