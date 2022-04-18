import React from 'react';
import { ReorderFour, Camera } from 'react-ionicons';

const ManageBookmarksItem = ({ name, icon, dragHandleProps }) => {

    return (
        <div className='bookmarks__item'>
            <ReorderFour {...dragHandleProps} className="bookmarks__reorder" color="gainsboro" />
            { icon }
            <p className="bookmarks__item-name"> {name} </p>
        </div>
    )
}

export default ManageBookmarksItem ;
