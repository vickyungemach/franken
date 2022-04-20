import React from 'react';
import { Add, People, Person } from 'react-ionicons'

const GroupHeader = ({ shared, toggleShared }) => {

    const privateBtn = <button onClick={toggleShared} className='group__toggle-btn'> <Person height="17px" color="#333" />My Groups</button>;
    const sharedBtn = <button onClick={toggleShared} className='group__toggle-btn'> <People height="17px" color="#333" />All Groups</button>;

    return (
        <div className="group__header">
            <h1 className="group__title"> Groups</h1>
            <button className="regular-btn flex"> <Add height="17px" color="#fff" />Add Group</button>
            <div className="group__search">
                <input className='group__search-input' type="text" placeholder='Search groups' />
                { shared ? sharedBtn : privateBtn }
            </div>
        </div>
    )
}

export default GroupHeader;
