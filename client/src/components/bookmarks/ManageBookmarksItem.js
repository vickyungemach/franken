import React from 'react';
import { ReorderTwoOutline } from 'react-ionicons';
import EditBookmarkIcons from './EditBookmarkIcons';

const ManageBookmarksItem = ({ showEdits, openEdit, provided, item, index }) => {

    return (
        <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            className="bookmarks__item"
        >
            <div {...provided.dragHandleProps}>
                <ReorderTwoOutline className="bookmarks__reorder" color="black" />
            </div>

            {item.icon}
            <p className="bookmarks__item-name"> {item.name} </p>

            <EditBookmarkIcons onEdit={() => openEdit(index)} showEdits={showEdits} />

        </div>
    )
}

export default ManageBookmarksItem;
