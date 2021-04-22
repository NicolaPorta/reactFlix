import React from 'react';

function header({logo, clickScrolling}) {
    return(
        <header className="App-header">
          <img onClick={clickScrolling} src={logo} className="App-logo" alt="logo"  />
          <h3>ReactFlix</h3>
        </header>
    )
}

export default header;