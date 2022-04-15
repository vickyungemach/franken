import React, { useState } from 'react';
import { Camera, Airplane, School, EllipsisHorizontal } from 'react-ionicons'

const GridHeader = ({ bookmarks, active, setActive }) => {

    const iconSize = "17px";

    const icons = {
        camera: <Camera height={iconSize} />,
        airplane: <Airplane height={iconSize} />,
        school: <School height={iconSize} />
    }


    return (
        <div className='grid__header'>

            <h1 className='grid__header-title hide-desktop'>All Photos</h1>

            <div className='grid__header-tabs'>
                {
                    bookmarks.map((bookmark, i) => (
                        <div
                            className={`${i === active ? 'active' : ''}`}
                            onClick={() => setActive(i)}
                        >
                            { icons[bookmark.icon] }
                            <p>{bookmark.name}</p>
                        </div>
                    ))
                }

                <EllipsisHorizontal className="grid__header-dots" color="#dbdbdb" />
            </div>
        </div>
    )
}

export default GridHeader;
