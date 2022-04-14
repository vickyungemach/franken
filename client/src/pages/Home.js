import React from 'react';
import { connect } from 'react-redux';
import Container from 'components/layout/Container';
import HomeHeader from 'components/home/HomeHeader';
import Grid from 'components/common/grid/Grid';



const Home = ({}) => {
    
    return (
        <Container>
            <HomeHeader />
            <Grid />
        </Container>

    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { })(Home);
