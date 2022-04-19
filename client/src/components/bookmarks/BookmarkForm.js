import React, { useState } from 'react';
import icons from '../../utils/icons';
import { Close } from 'react-ionicons'

const BookmarkForm = ({ }) => {

    const [name, setName] = useState('');
    const [icon, setIcon] = useState('paw');

    return (
        <>
            <div className='bookmarks__form'>
                <Close className='bookmarks__form-close' />
                <div className="bookmarks__form-input-container">
                    <input 
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
                    icons.map(item => (
                        <div onClick={() =>  setIcon(item.name)}>
                            { icon === item.name ? item.primaryIcon : item.greyIcon }
                        </div>
                        
                    ))
                }
            </div>
        </>
    )
}

export default BookmarkForm;
