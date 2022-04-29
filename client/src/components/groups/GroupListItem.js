import React from 'react';
import { Link } from 'react-router-dom';


const GroupListItem = ({ title, images }) => {

    const imageCount = images.length;

    return (
        <Link to="/groups/my-group" className="group__list-item">
                <div className="group__list-item--image"></div>
                <div>
                    <h1 className="group__list-item--title">{title}</h1>
                    <p className="group__list-item--subtitle">{imageCount === 1 ? '1 photo' : `${imageCount} photos`}</p>
                </div>
        </Link>
    )
}

export default GroupListItem;
