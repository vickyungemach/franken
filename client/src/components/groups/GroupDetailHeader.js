import React, { useState, useEffect } from 'react';
import { DropdownButton, DropdownItem, Dropdown } from 'components/elements/Dropdown';
import { EllipsisHorizontal, Person, People } from 'react-ionicons'
import GroupToggle from './GroupToggle';


const GroupDetailHeader = ({ }) => {
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        const unsubscribe = document.addEventListener('click', (e) => {
            if(e.target.tagName !== 'svg') {
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
                <p>30 Members</p>

                <GroupToggle />


                <Dropdown distance="50%" className="grid__header-dots" dropdown={dropdown} >
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

export default GroupDetailHeader ;
