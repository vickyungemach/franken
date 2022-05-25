import React, { useState, useEffect } from 'react';
import { Home, Grid, Pricetag, Add, HomeOutline, GridOutline, PricetagOutline } from 'react-ionicons';
import { Link } from 'react-router-dom';

/* Props
============================================================= */
// navLinks: [icon: String, text: String]

const BottomNav = () => {

    const navLinks = [
        { icon: <HomeOutline height="1.8rem" />, iconActive: <Home height="1.8rem" />, text: 'Photos', link: '/'},
        { icon: <GridOutline height="1.8rem" />, iconActive: <Grid height="1.8rem" />, text: 'Groups', link: '/groups'},
        { icon: <PricetagOutline height="1.8rem" />, iconActive: <Pricetag height="1.8rem" />, text: 'Tags', link: '/' },
        { icon: <Add height="1.8rem" />, iconActive: <Add height="1.8rem" />, text: 'Upload' }
    ]

    const url = window.location.origin;
    const path = window.location.pathname;

    useEffect(() => {
        if (path === '/') {
            setActive(0);
        } else if (path.includes('groups')) {
            setActive(1)
        }
    })

    const [active, setActive] = useState(0);

    const activateTab = (e, i) => {
        e.preventDefault();
        if (i !== 3) {
            setActive(i);
            window.location.href = url + navLinks[i].link
        }
    }

    return (
        <nav className="bottom-nav">

            {
                navLinks.map((link, i) => (
                    <button
                        key={i}
                        href=""
                        className={`bottom-nav-link ${active === i && 'bottom-nav-link--active'}`}
                        onClick={(e) => activateTab(e, i)}
                    >
                        {active === i ? link.iconActive : link.icon}
                        <span className='bottom-nav-text'>{link.text}</span>
                    </button>
                ))
            }

        </nav>
    )
}

export default BottomNav;