import React, { useState } from 'react';
import { Camera, Airplane, School, EllipsisHorizontal } from 'react-ionicons'

const GridHeader = ({ }) => {
    const [active, setActive] = useState(0);

    const tabs = [
        { name: 'All Photos', icon: <Camera height="17px" /> },
        { name: 'Travel', icon: <Airplane height="17px" /> },
        { name: 'School', icon: <School height="17px" /> }
    ]

    return (
        <div className='grid__header'>

            <h1 className='grid__header-title hide-desktop'>All Photos</h1>

            <div className='grid__header-tabs'>
                {
                    tabs.map((tab, i) => (
                        <div
                            className={`${i === active ? 'active' : ''}`}
                            onClick={() => setActive(i)}
                        >
                            {tab.icon}
                            <p>{tab.name}</p>
                        </div>
                    ))
                }

                <EllipsisHorizontal className="grid__header-dots" color="#dbdbdb" />
            </div>
        </div>
    )
}

export default GridHeader;
