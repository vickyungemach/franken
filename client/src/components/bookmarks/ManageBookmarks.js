import React, { useState, useRef } from 'react';
import { Add, ReorderTwo, CreateOutline, Camera, Airplane, School, ReorderTwoOutline } from 'react-ionicons';
import ManageBookmarksItem from './ManageBookmarksItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ManageBookmarks = ({ }) => {

    const list = [
        { name: 'All Photos', icon: <Camera />, sort: 0 },
        { name: 'Travel', icon: <Airplane />, sort: 1 },
        { name: 'School', icon: <School />, sort: 2 },
    ]

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
    }

    return (
        <div className='bookmarks'>
            <div className="bookmarks__title">
                <h1>Manage Bookmarks</h1>
                <CreateOutline />
            </div>

            <DragDropContext onDragEnd={(param) => dragEnd(param)}>

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
                                                (provided, snapshot) => (
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

                                                    </div>
                                                )
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


            <div className='bookmarks__btn regular-btn'>
                <p>Save bookmarks</p>
            </div>
        </div>
    )
}

export default ManageBookmarks;
