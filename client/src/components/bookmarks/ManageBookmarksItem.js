import React from 'react';
import { ReorderFour, Camera } from 'react-ionicons';

const ManageBookmarksItem = ({ name, icon }) => {

    return (
        <div className='bookmarks__item'>
            <ReorderFour className="bookmarks__reorder" color="gainsboro" />
            { icon }
            <p className="bookmarks__item-name"> {name} </p>
        </div>
    )
}

export default ManageBookmarksItem ;
