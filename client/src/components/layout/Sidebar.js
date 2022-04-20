import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Home, HomeOutline, Grid, GridOutline, Pricetag, Add, PricetagOutline } from 'react-ionicons'

const Sidebar = () => {

    const [active, setActive] = useState(0);

    const onClick = (page) => {
        setActive(page);
    }

    const getClasses = (index) => {
        return index === active ? 'sidebar__link sidebar__link--active' : 'sidebar__link';
    }


    return (
        <ul className='sidebar'>
            <Link to="/">
                <li className={getClasses(0)} onClick={() => onClick(0)}>
                    {active === 0 ? <Home height="17px" /> : <HomeOutline height="17px" />}
                    <p>Photos</p>
                </li>
            </Link>
            <Link to="/groups">
                <li className={getClasses(1)} onClick={() => onClick(1)}>
                    {active === 1 ? <Grid height="17px" /> : <GridOutline height="17px" />}
                    <p>Groups</p>
                </li>
            </Link>
            <li className={getClasses(2)} onClick={() => onClick(2)}>
                {active === 2 ? <Pricetag height="17px" /> : <PricetagOutline height="17px" />}
                <p>Tags</p>
            </li>
            <li className="sidebar__link">
                <div className='sidebar__btn btn-round'>
                    <Add height="20px" />
                    <p>Add</p>
                </div>

            </li>
        </ul>
    )
}

export default Sidebar;

