import React, { useState, useEffect } from 'react';

/* ===================================
   Dropdown
=================================== */
export const Dropdown = ( { title, children, hideOnMobile }) => {

    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        const unsubscribe = document.addEventListener('click', (e) => {
            if(!e.target.classList.contains("fas")) {
                setDropdown(false);
            }
        })

        return unsubscribe;
    }, [])

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }

    return (
        <div className={`dropdown ${hideOnMobile ? 'hide-mobile' : ''}`}>
            <button className="btn btn-primary btn-dropdown" onClick={toggleDropdown}>
                { title }
                <i className="fas fa-chevron-down" />
            </button>
            <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`}>

                { children }

            </ul>
        </div>
    )
}

/* ===================================
   DropdownItem
=================================== */
export const DropdownItem = ({ children, onClick }) => {
    return <li><button className="dropdown-item" href="#" onClick={onClick}>{ children }</button></li> 
}

