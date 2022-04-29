import React from 'react';

const LeaveGroup = ({ }) => {

    return (
        <div className='leave-group'>
            <p className='leave-group__message'>Do you want to leave and delete the group, or keep it with your images only?</p>
            <div className="leave-group__buttons">
                <button className='outline-btn leave-group__buttons--light'>Keep Group</button>
                <button className='outline-btn leave-group__buttons--danger'>Delete Group</button>
            </div>
        </div>
    )
}

export default LeaveGroup;
