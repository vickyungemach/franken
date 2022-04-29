import React, { useState, useEffect } from 'react';
import { DropdownButton, DropdownItem, Dropdown } from 'components/elements/Dropdown';
import { EllipsisHorizontal } from 'react-ionicons'
import GroupToggle from './GroupToggle';


const GroupDetailHeader = ({ showAll, isPrivate }) => {
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        const unsubscribe = document.addEventListener('click', (e) => {
            if (e.target.tagName !== 'svg') {
                setDropdown(false);
            }
        })

        return unsubscribe;
    }, [])

    const toggleDropdown = (e) => {
        setDropdown(!dropdown);
    }

    return (
        <div className='grid__header'>
            <h1 className='grid__header-title hide-desktop'>All Photos</h1>

            <div className='grid__header-info'>
                <h1>Munich 2021</h1>

                {!isPrivate && (
                    <>
                        <p>30 Members</p>
                        <GroupToggle className={`${!isPrivate ? 'ml-auto' : ''}`} />
                    </>
                )}

                <Dropdown distance="50%" className={`grid__header-dots ${!isPrivate ? 'ml-6 top-10' : ''}` } dropdown={dropdown} >
                    <DropdownButton>
                        <button onClick={toggleDropdown}>
                            <EllipsisHorizontal color="#dbdbdb" />
                        </button>

                    </DropdownButton>
                    <DropdownItem>Add Photos</DropdownItem>
                    <DropdownItem>Add Members</DropdownItem>
                    <DropdownItem>Leave</DropdownItem>
                </Dropdown>

            </div>
        </div>
    )
}

export default GroupDetailHeader;
