import React from 'react';
import Sidebar from './Sidebar';


function Container({ children }) {
    return (
        <div className='container'>
            <Sidebar />
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default Container;
