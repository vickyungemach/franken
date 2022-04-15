import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getImages, clearImages } from 'actions/images';
import { getBookmarks, setActiveBookmark } from 'actions/bookmarks';
import Container from 'components/layout/Container';
import HomeHeader from 'components/home/HomeHeader';
import Grid from 'components/common/grid/Grid';
import Spinner from 'components/elements/Spinner';



const Home = ({ getImages, clearImages, getBookmarks, images, bookmarks, loadingImages, loadingBookmarks, setActiveBookmark, activeBookmark }) => {

    useEffect(() => {
        getBookmarks(); 
        !loadingBookmarks && getImages(bookmarks[0]._id)
    }, [loadingBookmarks])

    const setActive = (index) => {
        clearImages();
        setActiveBookmark(index);
        getImages(bookmarks[index]._id);
    }

    return (
        <Container>
            <HomeHeader active={activeBookmark} setActive={setActive} bookmarks={bookmarks} />
            { loadingImages ? <Spinner /> : <Grid images={images} /> }
        </Container>

    )
}

const mapStateToProps = state => ({
    loadingImages: state.images.loading,
    images: state.images.images,
    loadingBookmarks: state.bookmarks.loading,
    bookmarks: state.bookmarks.bookmarks,
    activeBookmark: state.bookmarks.activeBookmark
})

export default connect(mapStateToProps, { getImages, getBookmarks, setActiveBookmark, clearImages })(Home);
