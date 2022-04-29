import React from 'react';
import GroupDetailHeader from './GroupDetailHeader';
import Container from 'components/layout/Container';
import Grid from 'components/common/grid/Grid';
import { connect } from 'react-redux';

const GroupDetail = ({ match, images }) => {


    return (
        <Container>
            <GroupDetailHeader />
            <Grid images={images} />
        </Container>
    )
}


const mapStateToProps = state => ({
    images: state.images.images
})

export default connect(mapStateToProps, {  })(GroupDetail);

