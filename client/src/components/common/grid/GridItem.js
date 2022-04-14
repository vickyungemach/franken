import React from 'react';

const GridItem = ({ image, i }) => {

    return (
        <div key={i} className="grid__body-item" style={{ backgroundImage: `url(${image})` }}>
        </div>
    )
}

export default GridItem ;
