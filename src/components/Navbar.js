import React from 'react';
import SearchBar from './SearchBar';
import Logo from './Logo';

function NavBar({logo, onSearchMovie}) {
    return(
        <nav className="d-flex align-items-center justify-content-between">
            <Logo logo={logo}/>
            <SearchBar onSearchMovie={onSearchMovie}/>
        </nav>
    )
}

export default NavBar;