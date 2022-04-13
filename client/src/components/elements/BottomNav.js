import React, { useState } from 'react';
import { Home, HomeOutline, Grid, GridOutline, Pricetag, Add, PricetagOutline } from 'react-ionicons'

/* Props
============================================================= */
// navLinks: [icon: String, text: String]

const BottomNav = ({ }) => {

    const navLinks = [
        { icon: <Home height="1.8rem" />, text: 'Photos' },
        { icon: <Grid height="1.8rem" />, text: 'Groups' },
        { icon: <Pricetag height="1.8rem" />, text: 'Tag' },
        { icon: <Add height="1.8rem" />, text: 'Add' }
    ]

    const [active, setActive] = useState(0);

    const activateTab = (e, i) => {
        e.preventDefault();
        setActive(i);
    }

    return (
        <nav className="bottom-nav">

            {
                navLinks.map((link, i) => (
                    <a 
                        key={i} 
                        href="" 
                        className={`bottom-nav-link ${active === i ? 'bottom-nav-link--active' : ''}`} 
                        onClick={(e) => activateTab(e, i)}
                    >
                        { link.icon }
                        <span className="bottom-nav-text">{ link.text }</span>
                    </a>
                ))
            }

        </nav>
    )
}

export default BottomNav;