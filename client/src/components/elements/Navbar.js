import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '../elements/Drawer';
import Searchbar from './Searchbar';
import logoPng from '../../assets/logo.png'
import { Dropdown, DropdownItem } from 'components/elements/Dropdown';


function Navbar({ authenticated, username, logout }) {

    const [currentURL, setCurrentURL] = useState('register');

    // Toggle between Sign in and sign up
    function changeURL() {
        setCurrentURL(window.location.href);
    }

    // Logo image and text
    const logo = (
        <Link to="/">
            <div className='header__logo'>
                <img src={logoPng} />
                <h1>Minite</h1>
            </div>
        </Link>
    )

    // Logged in navbar
    const loggedInNav = (
        <div className="nav nav--login">

            { logo }

            <Searchbar hideOnMobile />

            <Dropdown title="Profile" hideOnMobile >
                <DropdownItem onClick={logout}>Log out</DropdownItem>
            </Dropdown>
        </div>
    )

    // Logged out navbar
    const loggedOutNav = (
        <div className="nav nav--logout">
            { logo }
            
            {
                currentURL.includes('login') ?
                    <Link to="login" className="nav__link" onClick={changeURL} >Sign in <i className="fas fa-sign-in-alt"> </i></Link> :
                    <Link to="register" className="nav__link" onClick={changeURL}>Sign up <i className="fas fa-user-plus"> </i></Link>
            }
        </div>
    )



    return (
        <div className='header'>

            {/* Desktop Menu */}
            {authenticated ? loggedInNav :loggedOutNav }


        </div>
    )
}

export default Navbar;
