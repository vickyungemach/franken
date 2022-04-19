import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { getImages, clearImages } from 'actions/images';
import { getBookmarks, setActiveBookmark } from 'actions/bookmarks';

import Container from 'components/layout/Container';
import HomeHeader from 'components/home/HomeHeader';
import Grid from 'components/common/grid/Grid';
import Spinner from 'components/elements/Spinner';
import Modal from 'components/elements/Modal';
import ManageBookmarks from 'components/bookmarks/ManageBookmarks';



const Home = ({ getImages, clearImages, getBookmarks, images, bookmarks, loadingImages, loadingBookmarks, setActiveBookmark, activeBookmark }) => {

    const [manageBookmarks, setManageBookmarks] = useState(false);

    useEffect(() => {
        getBookmarks(); 
        !loadingBookmarks && getImages(bookmarks[0]._id)
    }, [loadingBookmarks]) /* eslint-disable-line */

    const setActive = (index) => {
        clearImages();
        setActiveBookmark(index);
        getImages(bookmarks[index]._id);
    }

    return (
        <Container>
            <HomeHeader
                openManageBookmarks={() => setManageBookmarks(true)} active={activeBookmark} setActive={setActive} bookmarks={bookmarks} />
            { loadingImages ? <Spinner /> : <Grid images={images} /> }

            <Modal 
                modal={manageBookmarks} 
                setModal={setManageBookmarks} 
                title="Bookmarks"
                width="30%"
            >
                <ManageBookmarks />
            </Modal>
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
