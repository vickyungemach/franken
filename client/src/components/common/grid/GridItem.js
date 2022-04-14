import React from 'react';

const GridItem = ({ openGridModal, image, i }) => {

    return (
        <div 
            key={i} 
            onClick={() => openGridModal(image, i)} 
            className="grid__body-item" 
            style={{ backgroundImage: `url(${image})`}}
        >
        
        </div>
    )
}

export default GridItem ;
