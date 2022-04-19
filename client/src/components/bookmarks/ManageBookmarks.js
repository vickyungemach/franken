import React from 'react';
import { CloseOutline, CreateOutline, Camera, Airplane, School } from 'react-ionicons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import BookmarkForm from './BookmarkForm';
import AddBookmarkButton from './AddBookmarkButton';
import ManageBookmarksItem from './ManageBookmarksItem';

const ManageBookmarks = ({ closeBookmarksModal, showForm, showEdits, setShowForm, setShowEdits, editBookmark, setEditBookmark }) => {

    // Open add bookmark form
    const openForm = () => {
        if(list.length >= 5) {
            return alert('Cannot have more than 5 bookmarks');
        }

        setShowForm(true);
        closeEdits();
    }

    // Close add bookmark form
    const closeForm = () => {
        setShowForm(false);
        setEditBookmark(null);
    }

    // Open edit form
    const openEdit = (index) => {
        setEditBookmark(index);
        closeEdits();
    }

    // Toggle edit icons
    const openEdits = () => setShowEdits(true);
    const closeEdits = () => setShowEdits(false);


    const list = [
        { name: 'All Photos', icon: <Camera />, sort: 0 },
        { name: 'Travel', icon: <Airplane />, sort: 1 },
        { name: 'School', icon: <School />, sort: 2 }
    ]

    // Update list after drag and dropping
    const dragEnd = (param) => {
        const sourceIndex = param.source.index;
        const destinationIndex = param.destination?.index;

        if (destinationIndex) {
            list.splice(destinationIndex, 0, list.splice(sourceIndex, 1)[0]);
        }

        // Update sort number after d
        const updatedSort = list.map((item, i) => {
            return { ...item, sort: i }
        });

        return updatedSort;
    }

    return (
        <div className='bookmarks'>
            <div className="bookmarks__title">
                <h1>Manage Bookmarks</h1>
                {
                    showForm || editBookmark !== null ? null :
                        showEdits ? <CloseOutline color='darkgrey' onClick={closeEdits} /> :
                            <CreateOutline color='darkgrey' onClick={openEdits} />
                }
            </div>

            <DragDropContext onDragStart={closeEdits} onDragEnd={(param) => dragEnd(param)}>

                {/* Draggable list */}
                <Droppable droppableId='droppable-1'>
                    {
                        (provided, snapshot) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {
                                    list.map((item, i) => (

                                        // Draggable bookmark item
                                        <Draggable key={i} draggableId={`draggable-${i}`} index={i}>
                                            {
                                                (provided, snapshot) => {
                                                    return editBookmark === i ? <BookmarkForm editData={item} closeForm={closeForm} /> : (
                                                        <ManageBookmarksItem
                                                            showEdits={showEdits}
                                                            item={item}
                                                            provided={provided}
                                                            openEdit={openEdit}
                                                            index={i}
                                                        />
                                                    )
                                                }
                                            }

                                        </Draggable>
                                    ))
                                }

                                {
                                    provided.placeholder
                                }
                            </div>
                        )
                    }

                </Droppable>
            </DragDropContext>

            {editBookmark !== null ? null : showForm ? <BookmarkForm showForm={showForm} closeForm={closeForm} /> : <AddBookmarkButton onClick={openForm} />}

            {
                !showForm && editBookmark === null && (
                    <div className='bookmarks__btn regular-btn' onClick={closeBookmarksModal}>
                        <p>Done</p>
                    </div>
                )}

        </div>
    )
}

export default ManageBookmarks;
