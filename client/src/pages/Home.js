import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getImages } from 'actions/images';
import Container from 'components/layout/Container';
import HomeHeader from 'components/home/HomeHeader';
import Grid from 'components/common/grid/Grid';
import Spinner from 'components/elements/Spinner';



const Home = ({ getImages, images, loading }) => {

    useEffect(() => {
        getImages();
    }, [])

    return (
        <Container>
            <HomeHeader />
            { loading ? <Spinner /> : <Grid images={images} /> }
        </Container>

    )
}

const mapStateToProps = state => ({
    images: state.images.images,
    loading: state.images.loading
})

export default connect(mapStateToProps, { getImages })(Home);
