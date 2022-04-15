import React, { useState, useEffect } from 'react';

/* ===================================
   Dropdown
=================================== */
export const Dropdown = ( { children, hideOnMobile, dropdown, setDropdown }) => {

    // Get the button and items from children
    const rchildren = React.Children.toArray(children);
    const dropdownButton = rchildren[0];
    const dropdownItems = rchildren.filter((child, i) => i !== 0);

    return (
        <div className={`dropdown ${hideOnMobile ? 'hide-mobile' : ''}`}>

            { dropdownButton }
            
            <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`}>

                { dropdownItems }

            </ul>
        </div>
    )
}


/* ===================================
   DropdownButton
=================================== */
export const DropdownButton = ({ children }) => {
    return children; 
}

/* ===================================
   DropdownItem
=================================== */
export const DropdownItem = ({ children, onClick }) => {
    return <li><button className="dropdown-item" href="#" onClick={onClick}>{ children }</button></li> 
}

