import React from 'react';
import GroupDetailHeader from './GroupDetailHeader';
import Container from 'components/layout/Container';
import Grid from 'components/common/grid/Grid';
import { connect } from 'react-redux';

const GroupDetail = ({ match, images, showAll }) => {


    return (
        <Container>
            <GroupDetailHeader isPrivate={false} showAll={showAll} />
            <Grid images={images} />
        </Container>
    )
}


const mapStateToProps = state => ({
    images: state.images.images,
    showAll: state.groups.showAll
})

export default connect(mapStateToProps, {  })(GroupDetail);

