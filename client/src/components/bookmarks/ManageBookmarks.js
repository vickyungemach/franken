import React from 'react';
import { CreateOutline, Camera, Airplane, School } from 'react-ionicons';
import ManageBookmarksItem from './ManageBookmarksItem';

const ManageBookmarks = ({ }) => {

    return (
        <div className='bookmarks'>
            <div className="bookmarks__title">
                <h1>Manage Bookmarks</h1>
                <CreateOutline />
            </div>

            <ManageBookmarksItem name="All Photos" icon={<Camera />} />
            <ManageBookmarksItem name="Travel" icon={<Airplane />} />
            <ManageBookmarksItem name="School" icon={<School />} />
        </div>
    )
}

export default ManageBookmarks;
