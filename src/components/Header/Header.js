import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChild } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo"><FontAwesomeIcon icon={faChild} /> Tiger Team </h1>
        </header>
    );
};

export default Header;