import React from 'react';
import { connect } from 'react-redux';
import Container from 'components/layout/Container';
import HomeHeader from 'components/home/HomeHeader';




const Home = ({}) => {
    
    return (
        <Container>
            <HomeHeader />
        </Container>

    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { })(Home);
