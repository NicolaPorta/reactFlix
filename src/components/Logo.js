import React from 'react';

function logo({logo}) {
    return(
        <div className='d-flex align-items-center'>
            <img src={logo} className="header-logo" alt="ReactFlix" />
            <h1>ReactFlix</h1>
        </div>
    )
}

export default logo;