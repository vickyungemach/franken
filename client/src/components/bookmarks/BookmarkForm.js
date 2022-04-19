import React, { useState, useEffect, useRef } from 'react';
import icons from '../../utils/icons';
import { Close } from 'react-ionicons'

const BookmarkForm = ({ closeForm, editData, showForm }) => {

    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');

    const input = useRef();

    const startEdit = (name, icon) => {
        setName(name);
        setIcon(icon);
    }

    useEffect(() => {
        if (editData || showForm) input.current.focus();
        editData && startEdit(editData.name, editData.icon);

    }, [editData, showForm])

    return (
        <>
            <div className='bookmarks__form'>
                <Close className='bookmarks__form-close' onClick={closeForm} />
                <div className="bookmarks__form-input-container">
                    <input
                        ref={input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='bookmarks__form-input'
                        type='text'
                        placeholder='Bookmark name'
                    />
                </div>
                <button className="bookmarks__form-button">Save</button>

            </div>

            <div className="bookmarks__form-icons">
                {
                    icons.map((item, i) => (
                        <div key={i} onClick={() => setIcon(item.name)}>
                            {icon === item.name ? item.primaryIcon : item.greyIcon}
                        </div>

                    ))
                }
            </div>
        </>
    )
}

export default BookmarkForm;
